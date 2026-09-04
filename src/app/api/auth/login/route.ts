import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/src/lib/prisma";
import { createSessionToken, verifyPassword } from "@/src/lib/auth";
import { roles, type Role } from "@/src/lib/roles";
import { SESSION_COOKIE } from "@/src/lib/session";

export async function POST(request: Request) {
  const body = await request.json();
  const email = body?.email?.toString().trim().toLowerCase();
  const password = body?.password?.toString();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const isValid = await verifyPassword(password, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const allowedRoles: Role[] = [roles.SUPER_ADMIN, roles.CONTENT_EDITOR, roles.TEAM_MANAGER, roles.VOLUNTEER_MANAGER];
  if (!allowedRoles.includes(user.role as Role)) {
    return NextResponse.json({ error: "You do not have access to the dashboard." }, { status: 403 });
  }

  const token = createSessionToken();
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 8);

  await prisma.session.create({
    data: {
      token,
      userId: user.id,
      expiresAt,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return NextResponse.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
}
