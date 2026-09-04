import { cookies } from "next/headers";
import { prisma } from "@/src/lib/prisma";
import { roles, type Role } from "@/src/lib/roles";

export const SESSION_COOKIE = "triangeice-session";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date()) {
    return null;
  }

  return session.user;
}

export async function getCurrentRole() {
  const user = await getCurrentUser();
  return user?.role ?? null;
}

export async function requireDashboardAccess() {
  const role = await getCurrentRole();
  const allowedRoles: Role[] = [roles.SUPER_ADMIN, roles.CONTENT_EDITOR, roles.TEAM_MANAGER, roles.VOLUNTEER_MANAGER];

  return role !== null && role !== undefined && allowedRoles.includes(role as Role);
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
