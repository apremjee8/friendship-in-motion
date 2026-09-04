import { allFollows, style } from "@/lib/language";

export function renderBrief(): string {
  const follows = allFollows();
  const lines: string[] = [];

  lines.push("FRIENDSHIP IN MOTION");
  lines.push("hot takes and fire fits");
  lines.push("");
  lines.push(style.purpose);
  lines.push("");
  lines.push(style.source);
  lines.push("");
  lines.push("— ACCOUNT —");
  lines.push(`@${style.account}`);
  lines.push(`${style.followers} followers, ${style.following} following`);
  for (const b of style.bio) lines.push(`bio: ${b}`);
  lines.push("");
  lines.push("— THESIS —");
  lines.push(
    `${style.thesis.follows} follows, ${style.thesis.lanes} lanes, ${style.thesis.silhouettes} silhouettes.`,
  );
  lines.push("");
  lines.push("— ROSTER (complete, do not invent handles) —");
  for (const f of follows) {
    lines.push(`${f.group.padEnd(12)} @${f.handle}  — ${f.note}`);
  }
  lines.push(`total: ${follows.length}`);
  lines.push("");
  lines.push("— FOUR LANES —");
  for (const lane of style.lanes) {
    lines.push("");
    lines.push(`${lane.number}. ${lane.name}  (${lane.plain})`);
    lines.push(`   handles: ${lane.handles.map((h) => "@" + h).join(", ")}`);
    if (lane.feed_handles?.length) {
      lines.push(`   feed: ${lane.feed_handles.map((h) => "@" + h).join(", ")}`);
    }
    lines.push(`   items: ${lane.items.join("; ")}`);
    lines.push(`   palette: ${lane.palette.join(", ")}`);
    lines.push(`   closet: ${lane.closet}`);
  }
  lines.push("");
  lines.push("— TWO SILHOUETTES —");
  for (const s of style.silhouettes) {
    lines.push(
      `${s.name}: pants ${s.pants}; top ${s.top}; finish ${s.finish}; shoes ${s.shoes}`,
    );
  }
  lines.push("");
  lines.push("— FEED COPY —");
  for (const item of style.feed.copy) {
    const hero = item.hero ? " HERO" : "";
    const img = item.image ? `  [${item.image}]` : "  [text card]";
    lines.push(`COPY${hero}  @${item.handle} — ${item.note}${img}`);
  }
  lines.push("");
  lines.push("— FEED SKIP —");
  for (const item of style.feed.skip) {
    lines.push(`SKIP  @${item.handle} — ${item.note}`);
  }
  lines.push("");
  lines.push("— RULES —");
  lines.push(`closed palette: ${style.rules.palette.closed.join(", ")}`);
  lines.push(`accent only: ${style.rules.palette.accent_only}`);
  lines.push(`no: ${style.rules.palette.no}`);
  lines.push(`skip: ${style.rules.skip.join("; ")}`);
  lines.push(`mix-and-match: ${style.rules.mix_and_match}`);
  lines.push(`sourcing: ${style.rules.sourcing.join("; ")}`);
  lines.push(`laundry: ${style.rules.laundry}`);
  lines.push(`places: ${style.rules.places.join(" / ")}`);
  lines.push(`shoe: ${style.rules.shoe_size}`);
  lines.push(`hospital shoe: ${style.rules.hospital_shoe}`);
  lines.push(`not for Siena/London: ${style.rules.do_not_use_on_siena_or_london}`);
  lines.push(`do not invent: ${style.rules.do_not_invent.join("; ")}`);
  lines.push("");
  lines.push("— OWNED —");
  for (const item of style.closet.owned) lines.push(`- ${item}`);
  lines.push("");
  lines.push("— BUYS —");
  for (const item of style.closet.buys) lines.push(`- ${item}`);
  lines.push("");
  lines.push("Machine file: /style.json");
  lines.push("");
  return lines.join("\n");
}
