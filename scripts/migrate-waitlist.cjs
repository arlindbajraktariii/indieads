/**
 * Copy waitlist signups from the local SQLite fallback (.data/waitlist.db)
 * into the Bunny Database configured in the environment.
 *
 * Usage: node scripts/migrate-waitlist.cjs
 *
 * Safe to re-run: emails are unique, so existing rows are skipped.
 */
const { existsSync } = require("node:fs");
const { loadEnvConfig } = require("@next/env");
const { createClient } = require("@libsql/client");

loadEnvConfig(process.cwd());

const LOCAL_PATH = ".data/waitlist.db";
const remoteUrl = process.env.BUNNY_DATABASE_URL;

if (!remoteUrl) {
  console.error("BUNNY_DATABASE_URL is not set. Nothing to migrate to.");
  process.exit(1);
}

if (!existsSync(LOCAL_PATH)) {
  console.log(`No local database at ${LOCAL_PATH}. Nothing to migrate.`);
  process.exit(0);
}

const local = createClient({ url: `file:${LOCAL_PATH}` });
const remote = createClient({
  url: remoteUrl,
  authToken: process.env.BUNNY_DATABASE_AUTH_TOKEN || undefined,
});

async function main() {
  const { rows } = await local.execute(
    "SELECT email, created_at FROM waitlist ORDER BY id",
  );
  console.log(`Local signups: ${rows.length}`);

  await remote.execute(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      email      TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  let inserted = 0;
  for (const row of rows) {
    const result = await remote.execute({
      sql: "INSERT OR IGNORE INTO waitlist (email, created_at) VALUES (?, ?)",
      args: [String(row.email), String(row.created_at)],
    });
    inserted += result.rowsAffected;
  }

  const total = Number(
    (await remote.execute("SELECT COUNT(*) AS n FROM waitlist")).rows[0].n,
  );

  console.log(`Inserted ${inserted} new row(s). Remote total: ${total}.`);
}

main().catch((error) => {
  console.error("Migration failed:", error.message);
  process.exit(1);
});
