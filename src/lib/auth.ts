import bcrypt from "bcryptjs";
import crypto from "crypto";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}

export function createSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}
