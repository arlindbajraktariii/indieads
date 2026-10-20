# Database

RoketAd stores waitlist signups and contact/publisher messages in
[Bunny Database](https://bunny.net/docs/database/) (libSQL, SQLite-compatible).
Locally it falls back to a SQLite file so you can develop without credentials.
There is no admin panel in the app — submissions are managed from the Bunny
dashboard.

## 1. Create the database

1. Open **bunny.net Dashboard → Edge Platform → Database**.
2. Create a database (pick a region close to your app).
3. Open the database → **Access** and copy:
   - the **Database URL** (looks like `libsql://<name>.bunny.net`)
   - a freshly generated **access token**

## 2. Configure the app

Add to `.env.local` (local) and to your hosting provider's environment (production):

```bash
BUNNY_DATABASE_URL=libsql://your-database.bunny.net
BUNNY_DATABASE_AUTH_TOKEN=your-access-token
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without the two `BUNNY_DATABASE_*` variables the app uses
`.data/waitlist.db` (a local SQLite file). Restart the dev server after
changing env values.

## 3. Tables

Tables are created automatically on the first query:

```sql
CREATE TABLE waitlist (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  email      TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE contact_messages (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  topic      TEXT NOT NULL,
  site_url   TEXT,
  message    TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
```

Indexes: `waitlist(created_at)`, `contact_messages(created_at)`,
`contact_messages(topic)`.

## 4. Viewing and managing submissions

Open **bunny.net Dashboard → Edge Platform → Database → [your database]**.
The database editor lets you run SQL and browse/export rows.

Useful queries:

```sql
-- Everyone on the waitlist, newest first
SELECT id, email, created_at FROM waitlist ORDER BY id DESC;

-- Contact and publisher messages
SELECT id, name, email, topic, created_at
FROM contact_messages
ORDER BY id DESC;

-- Publisher applications only
SELECT * FROM contact_messages WHERE topic = 'publisher' ORDER BY id DESC;

-- Count signups per day
SELECT date(created_at) AS day, COUNT(*) AS signups
FROM waitlist
GROUP BY day
ORDER BY day DESC;
```

To remove a spam signup:

```sql
DELETE FROM waitlist WHERE email = 'someone@example.com';
```

The public write endpoints (`POST /api/waitlist`, `POST /api/contact`) are the
only way the app writes data. There is no read endpoint exposed by the site.

## 5. Moving local signups to Bunny

If you collected emails locally before setting the Bunny credentials:

```bash
npm run db:migrate-local
```

`scripts/migrate-waitlist.cjs` reads `.data/waitlist.db`, copies every email
into the configured Bunny database (skipping duplicates), and prints the new
total. It only copies waitlist emails, not contact messages.

## 6. Where the code lives

| File | Purpose |
| --- | --- |
| `src/lib/db/client.ts` | LibSQL client, env handling, schema init |
| `src/lib/db/waitlist.ts` | `joinWaitlist`, counts |
| `src/lib/db/contact.ts` | `saveContact`, counts |
| `src/app/api/waitlist/route.ts` | Public waitlist endpoint |
| `src/app/api/contact/route.ts` | Public contact endpoint |

## Notes

- The Bunny access token can read and write the database. Keep it in env vars,
  never in client code, and rotate it if it leaks.
- Bunny Database is usage-billed and idles when inactive.
- Local data lives in `.data/waitlist.db`, which is gitignored.
