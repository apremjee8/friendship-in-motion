import type { Metadata } from "next";
import { Plate } from "@/components/Plate";
import { style } from "@/lib/language";

export const metadata: Metadata = {
  title: "Feed",
};

export default function FeedPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Feed steals</p>
        <h1 className="page-title">Copy vs skip.</h1>
        <p className="lede">
          What to lift from the feed, and what to leave. Plates are real
          screenshots. Where there is no photo, the card is words only — no
          fake pictures.
        </p>
      </header>

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="section-head">
          <h2>Copy</h2>
          <span className="meta">{style.feed.copy.length} plates</span>
        </div>
        <div className="grid-3">
          {style.feed.copy.map((item, i) => (
            <Plate
              key={item.id}
              src={item.image}
              handle={item.handle}
              note={item.note}
              plate={`C-${String(i + 1).padStart(2, "0")}`}
              stamp={item.hero ? "HERO" : "COPY"}
              priority={i < 2}
            />
          ))}
        </div>
      </section>

      <section className="section skip-grid">
        <div className="section-head">
          <h2>Skip</h2>
          <span className="meta">{style.feed.skip.length} — do not lift</span>
        </div>
        <div className="grid-3">
          {style.feed.skip.map((item, i) => (
            <Plate
              key={item.id}
              handle={item.handle}
              note={item.note}
              plate={`S-${String(i + 1).padStart(2, "0")}`}
              stamp="SKIP"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
