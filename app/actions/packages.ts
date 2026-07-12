"use server";

import { db } from "@/lib/db";
import { packages } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { eq, desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";

async function getUserId() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  return session.user.id;
}

export async function getPackages() {
  const userId = await getUserId();

  return await db.query.packages.findMany({
    where: eq(packages.userId, userId),

    orderBy: [desc(packages.createdAt)],
  });
}

export async function getPackageById(id: number) {
  return await db.query.packages.findFirst({
    where: eq(packages.id, id),
  });
}

export async function createPackage(data: {
  name: string;
  description?: string;
}) {
  const userId = await getUserId();

  await db.insert(packages).values({
    userId,

    name: data.name,

    description: data.description,
  });

  revalidatePath("/dashboard/packages");
}

export async function updatePackage(
  id: number,
  data: {
    name: string;
    description?: string;
  },
) {
  await db
    .update(packages)
    .set({
      name: data.name,

      description: data.description,
    })
    .where(eq(packages.id, id));

  revalidatePath("/dashboard/packages");
}

export async function deletePackage(id: number) {
  await db.delete(packages).where(eq(packages.id, id));

  revalidatePath("/dashboard/packages");
}
