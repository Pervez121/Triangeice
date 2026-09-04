export const roles = {
  SUPER_ADMIN: "SUPER_ADMIN",
  CONTENT_EDITOR: "CONTENT_EDITOR",
  TEAM_MANAGER: "TEAM_MANAGER",
  VOLUNTEER_MANAGER: "VOLUNTEER_MANAGER",
  VOLUNTEER: "VOLUNTEER",
} as const;

export type Role = (typeof roles)[keyof typeof roles];

export function canAccessDashboard(role: Role | null | undefined) {
  return role === roles.SUPER_ADMIN || role === roles.CONTENT_EDITOR || role === roles.TEAM_MANAGER || role === roles.VOLUNTEER_MANAGER;
}
