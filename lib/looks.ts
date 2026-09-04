import { existsSync } from "node:fs";
import path from "node:path";

export function lookSrc(src?: string | null): string | null {
  if (!src) return null;
  const file = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  return existsSync(file) ? src : null;
}
