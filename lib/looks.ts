const CDN = "https://fim-looks.vercel.app";

export function lookSrc(src?: string | null): string | null {
  if (!src) return null;
  const cleaned = src.replace(/^\//, "");
  const name = cleaned.startsWith("looks/") ? cleaned.slice("looks/".length) : cleaned;
  return `${CDN}/looks/${name}`;
}
