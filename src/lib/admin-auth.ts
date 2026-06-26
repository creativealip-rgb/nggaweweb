import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "nggawe2026!";
const SESSION_SECRET =
  process.env.ADMIN_SECRET ||
  process.env.SESSION_SECRET ||
  (process.env.NODE_ENV === "production" ? "" : "nggawe-web-dev-secret");

const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

function getSessionSecret() {
  if (!SESSION_SECRET) {
    throw new Error("ADMIN_SECRET or SESSION_SECRET must be set in production");
  }
  return SESSION_SECRET;
}

function signPayload(payload: string): string {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("base64url");
}

function safeEqual(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

export async function verifyLogin(
  username: string,
  password: string
): Promise<boolean> {
  return username === ADMIN_USER && password === ADMIN_PASS;
}

export function createToken(username: string): string {
  const payload = Buffer.from(`${username}:${Date.now()}`).toString("base64url");
  const signature = signPayload(payload);
  return `${payload}.${signature}`;
}

export function verifyToken(token: string): boolean {
  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature) return false;

    const expectedSignature = signPayload(payload);
    if (!safeEqual(signature, expectedSignature)) return false;

    const decoded = Buffer.from(payload, "base64url").toString();
    const [username, ts] = decoded.split(":");
    if (username !== ADMIN_USER) return false;

    const issuedAt = Number.parseInt(ts, 10);
    if (!Number.isFinite(issuedAt)) return false;

    const age = Date.now() - issuedAt;
    return age >= 0 && age < TOKEN_MAX_AGE_MS;
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
