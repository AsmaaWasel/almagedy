import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const url = process.env.DATABASE_URL;

console.log("DATABASE_URL:", url);

if (!url) {
  throw new Error("DATABASE_URL missing");
}

export const pool = new Pool({
  connectionString: url,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool, { schema });
