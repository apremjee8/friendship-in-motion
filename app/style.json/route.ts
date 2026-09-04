import { style } from "@/lib/language";

export const dynamic = "force-static";

export function GET() {
  return new Response(JSON.stringify(style, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
