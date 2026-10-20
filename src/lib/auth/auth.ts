import { Lucia } from "lucia";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";

const adapter = new DrizzleSQLiteAdapter(db, users, {
  userIdColumn: "id",
  sessionTableName: "sessions",
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      email: attributes.email,
      name: attributes.name,
      emailVerified: attributes.emailVerified,
      image: attributes.image,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  email: string;
  name: string | null;
  emailVerified: Date | null;
  image: string | null;
}

export { lucia };