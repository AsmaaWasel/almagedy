import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

console.log("=== DB INIT ===");
console.log("DATABASE_URL EXISTS:", !!process.env.DATABASE_URL);
console.log("DATABASE_URL TYPE:", typeof process.env.DATABASE_URL);
console.log("DB URL HOST:", new URL(process.env.DATABASE_URL!).hostname);

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is missing");
}

export const pool = new Pool({
  connectionString,
});

export const db = drizzle(pool, { schema });
