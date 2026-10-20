import { db, ensureSchema } from "./client";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type ContactInput = {
  name: string;
  email: string;
  topic: string;
  message: string;
  siteUrl?: string;
};

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  topic: string;
  siteUrl: string | null;
  message: string;
  createdAt: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

export async function saveContact(input: ContactInput): Promise<ContactResult> {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const topic = input.topic.trim() || "general";
  const message = input.message.trim();
  const siteUrl = input.siteUrl?.trim() || null;

  if (name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return {
      ok: false,
      error: "Please add a little more detail (10+ characters).",
    };
  }
  if (message.length > 4000) {
    return { ok: false, error: "Message is too long (4000 characters max)." };
  }

  await ensureSchema();

  await db.execute({
    sql: "INSERT INTO contact_messages (name, email, topic, site_url, message) VALUES (?, ?, ?, ?, ?)",
    args: [name, email, topic, siteUrl, message],
  });

  return { ok: true };
}

/** Newest first. */
export async function listContactMessages(limit = 500): Promise<ContactMessage[]> {
  await ensureSchema();
  const res = await db.execute({
    sql: `SELECT id, name, email, topic, site_url, message, created_at
          FROM contact_messages
          ORDER BY id DESC
          LIMIT ?`,
    args: [Math.max(1, Math.min(5000, Math.floor(limit)))],
  });

  return res.rows.map((row) => ({
    id: Number(row.id),
    name: String(row.name),
    email: String(row.email),
    topic: String(row.topic),
    siteUrl: row.site_url ? String(row.site_url) : null,
    message: String(row.message),
    createdAt: String(row.created_at),
  }));
}

export async function countContactMessages(): Promise<number> {
  await ensureSchema();
  const res = await db.execute("SELECT COUNT(*) AS total FROM contact_messages");
  return Number(res.rows[0]?.total ?? 0);
}

export async function countPublisherApplications(): Promise<number> {
  await ensureSchema();
  const res = await db.execute(
    "SELECT COUNT(*) AS total FROM contact_messages WHERE topic = 'publisher'",
  );
  return Number(res.rows[0]?.total ?? 0);
}
