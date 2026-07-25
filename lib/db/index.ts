import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

console.log("=== DB INIT ===");
console.log("DATABASE_URL EXISTS:", !!process.env.DATABASE_URL);
console.log("DATABASE_URL TYPE:", typeof process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is missing at build time!");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
