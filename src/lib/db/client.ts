import { createClient, type Client } from "@libsql/client";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";

/**
 * Bunny Database (LibSQL) connection.
 *
 * Production: Dashboard > Edge Platform > Database > [db] > Access
 *   BUNNY_DATABASE_URL=libsql://<db>.bunny.net
 *   BUNNY_DATABASE_AUTH_TOKEN=<token>
 *
 * Local dev: falls back to a SQLite file so the app works without credentials.
 */

const LOCAL_DB_PATH = ".data/waitlist.db";

const remoteUrl = process.env.BUNNY_DATABASE_URL?.trim() || "";
const url = remoteUrl || `file:${LOCAL_DB_PATH}`;
const authToken = process.env.BUNNY_DATABASE_AUTH_TOKEN?.trim() || undefined;

if (!remoteUrl) {
  // The libSQL file driver creates the file, but not the parent directory.
  mkdirSync(dirname(LOCAL_DB_PATH), { recursive: true });
}

export const isRemoteDatabase = Boolean(remoteUrl);

export const db: Client = createClient({ url, authToken });

let schemaReady: Promise<void> | null = null;

/**
 * Create tables/indexes once per process. Safe to call on every request;
 * the promise is cached and retried if the first attempt fails.
 */
export function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = initSchema().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }
  return schemaReady;
}

async function initSchema(): Promise<void> {
  await db.batch(
    [
      `CREATE TABLE IF NOT EXISTS waitlist (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        email      TEXT NOT NULL UNIQUE,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      `CREATE TABLE IF NOT EXISTS contact_messages (
        id         INTEGER PRIMARY KEY AUTOINCREMENT,
        name       TEXT NOT NULL,
        email      TEXT NOT NULL,
        topic      TEXT NOT NULL,
        site_url   TEXT,
        message    TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      `CREATE INDEX IF NOT EXISTS idx_waitlist_created ON waitlist (created_at)`,
      `CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_messages (created_at)`,
      `CREATE INDEX IF NOT EXISTS idx_contact_topic ON contact_messages (topic)`,
    ],
    "write",
  );
}
