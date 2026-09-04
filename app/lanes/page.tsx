import type { Metadata } from "next";
import { Plate } from "@/components/Plate";
import { at, ig, style } from "@/lib/language";

export const metadata: Metadata = {
  title: "Lanes",
};

const SWATCH: Record<string, string> = {
  white: "dot-white",
  indigo: "dot-indigo",
  olive: "dot-olive",
  cream: "dot-cream",
  black: "dot-black",
  tan: "dot-tan",
  navy: "dot-navy",
  burgundy: "dot-burgundy",
  khaki: "dot-khaki",
  charcoal: "dot-charcoal",
  ink: "dot-ink",
  "warm paper": "dot-paper",
  "one red accent": "dot-red",
};

export default function LanesPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Four lanes</p>
        <h1 className="page-title">Plain-word names, then the closet map.</h1>
        <p className="lede">
          Each lane is a way of seeing, not a brand list. Handles are the
          north stars. The last line is how it lands on akiff&apos;s closet.
        </p>
      </header>

      {style.lanes.map((lane) => {
        const handles = [
          ...lane.handles,
          ...(lane.feed_handles ?? []),
        ];
        return (
          <article key={lane.id} id={lane.id} className="lane-block">
            <div className="lane-grid">
              <div>
                <p className="kicker">Lane {lane.number}</p>
                <h2 className="page-title" style={{ fontSize: "2.2rem" }}>
                  {lane.name}
                </h2>
                <p className="meta">{lane.plain}</p>
                <p className="lede" style={{ marginTop: "1rem" }}>
                  {handles.map((h, i) => (
                    <span key={h}>
                      {i ? " · " : ""}
                      <a href={ig(h)} target="_blank" rel="noreferrer">
                        {at(h)}
                      </a>
                    </span>
                  ))}
                </p>
                <ul className="owned">
                  {lane.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="swatch-row">
                  {lane.palette.map((color) => (
                    <span key={color} className="swatch">
                      <i className={`dot ${SWATCH[color] ?? "dot-ink"}`} />
                      {color}
                    </span>
                  ))}
                </div>
                <p>
                  <b>How it maps:</b> {lane.closet}
                </p>
              </div>
              <div className="grid-2">
                {lane.images.map((src) => {
                  const file = src.replace("/looks/", "");
                  const meta = style.images[file];
                  return (
                    <Plate
                      key={src}
                      src={src}
                      handle={meta?.handle ?? lane.handles[0]}
                      note={meta?.note ?? lane.plain}
                      stamp="LANE"
                    />
                  );
                })}
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
}
