import { cookies } from "next/headers";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "nggawe2026!";
const SESSION_SECRET = process.env.SESSION_SECRET || "nggawe-web-secret-key-2026";

export async function verifyLogin(
  username: string,
  password: string
): Promise<boolean> {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export function createToken(username: string): string {
  const payload = `${username}:${Date.now()}`;
  return Buffer.from(payload).toString("base64url");
}

export function verifyToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const [username, ts] = decoded.split(":");
    if (username !== ADMIN_USER) return false;
    // Token valid for 7 days
    const age = Date.now() - parseInt(ts);
    return age < 7 * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get("admin_session")?.value;
  if (!token) return false;
  return verifyToken(token);
}
