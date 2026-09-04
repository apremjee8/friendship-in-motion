import { renderBrief } from "@/lib/brief";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderBrief(), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=300",
    },
  });
}
