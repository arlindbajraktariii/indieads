import { db, ensureSchema } from "./client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type WaitlistEntry = {
  id: number;
  email: string;
  createdAt: string;
  /** Position in the queue (1 = first signup). */
  position: number;
};

export type JoinResult =
  | { ok: true; position: number; already: boolean }
  | { ok: false; error: string };

/**
 * Add an email to the waitlist.
 * Duplicate emails are accepted silently and return their original position.
 */
export async function joinWaitlist(rawEmail: string): Promise<JoinResult> {
  const email = rawEmail.trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  await ensureSchema();

  const existing = await db.execute({
    sql: "SELECT id FROM waitlist WHERE email = ?",
    args: [email],
  });

  if (existing.rows.length > 0) {
    const position = await getPosition(Number(existing.rows[0].id));
    return { ok: true, position, already: true };
  }

  await db.execute({
    sql: "INSERT INTO waitlist (email) VALUES (?)",
    args: [email],
  });

  return { ok: true, position: await countWaitlist(), already: false };
}

export async function countWaitlist(): Promise<number> {
  await ensureSchema();
  const res = await db.execute("SELECT COUNT(*) AS total FROM waitlist");
  return Number(res.rows[0]?.total ?? 0);
}

/** Signups in the last `days` days (default 7). */
export async function countRecentWaitlist(days = 7): Promise<number> {
  await ensureSchema();
  const res = await db.execute({
    sql: "SELECT COUNT(*) AS total FROM waitlist WHERE created_at >= datetime('now', ?)",
    args: [`-${Math.max(1, Math.floor(days))} days`],
  });
  return Number(res.rows[0]?.total ?? 0);
}

/** Newest first, with each entry's position in the queue. */
export async function listWaitlist(limit = 500): Promise<WaitlistEntry[]> {
  await ensureSchema();
  const res = await db.execute({
    sql: `SELECT id, email, created_at,
            (SELECT COUNT(*) FROM waitlist w2 WHERE w2.id <= w.id) AS position
          FROM waitlist w
          ORDER BY id DESC
          LIMIT ?`,
    args: [Math.max(1, Math.min(5000, Math.floor(limit)))],
  });

  return res.rows.map((row) => ({
    id: Number(row.id),
    email: String(row.email),
    createdAt: String(row.created_at),
    position: Number(row.position),
  }));
}

async function getPosition(id: number): Promise<number> {
  const res = await db.execute({
    sql: "SELECT COUNT(*) AS position FROM waitlist WHERE id <= ?",
    args: [id],
  });
  return Number(res.rows[0]?.position ?? 0);
}
