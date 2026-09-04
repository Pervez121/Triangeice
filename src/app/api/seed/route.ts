import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { hashPassword } from "@/src/lib/auth";
import { roles } from "@/src/lib/roles";

export async function POST() {
  const existing = await prisma.user.findUnique({ where: { email: "admin@triangeice.org" } });
  if (existing) {
    return NextResponse.json({ message: "Seed user already exists." });
  }

  const hashedPassword = await hashPassword("Triangeice2026!");

  const user = await prisma.user.create({
    data: {
      name: "Super Admin",
      email: "admin@triangeice.org",
      password: hashedPassword,
      role: roles.SUPER_ADMIN,
    },
  });

  await prisma.profile.create({
    data: {
      userId: user.id,
      bio: "Founder and system administrator for Triangeice Institute.",
      location: "Global",
    },
  });

  return NextResponse.json({ message: "Seeded super admin account.", user });
}
