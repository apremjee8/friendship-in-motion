import type { Metadata } from "next";
import { style } from "@/lib/language";

export const metadata: Metadata = {
  title: "Rules",
};

export default function RulesPage() {
  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Dressing rules</p>
        <h1 className="page-title">Closed palette. Two silhouettes. No inventions.</h1>
        <p className="lede">
          These are constraints, not vibes. If a new piece cannot sit on three
          pairs of pants, it does not come home.
        </p>
      </header>

      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <ul className="rule-list">
          <li>
            <b>Closed palette</b>
            {style.rules.palette.closed.join(", ")}. {style.rules.palette.accent_only}{" "}
            only as accent. No {style.rules.palette.no}.
          </li>
          <li>
            <b>Ivy / pleat</b>
            {style.silhouettes[0].pants}. {style.silhouettes[0].top}.{" "}
            {style.silhouettes[0].finish}. {style.silhouettes[0].shoes}.
          </li>
          <li>
            <b>Hamza utility</b>
            {style.silhouettes[1].pants}. {style.silhouettes[1].top}.{" "}
            {style.silhouettes[1].finish}. {style.silhouettes[1].shoes}.
          </li>
          <li>
            <b>Mix-and-match</b>
            {style.rules.mix_and_match}.
          </li>
          <li>
            <b>Sourcing</b>
            {style.rules.sourcing.join(". ")}.
          </li>
          <li>
            <b>Laundry</b>
            {style.rules.laundry}.
          </li>
          <li>
            <b>Places</b>
            {style.rules.places.join(" / ")}.
          </li>
          <li>
            <b>Shoe</b>
            {style.rules.shoe_size}. Hospital: {style.rules.hospital_shoe}.{" "}
            {style.rules.do_not_use_on_siena_or_london} not for Siena or London.
          </li>
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Skip these combinations</h2>
        </div>
        <div className="chips">
          {style.rules.skip.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        <p className="meta" style={{ marginTop: "1rem" }}>
          Do not invent: {style.rules.do_not_invent.join("; ")}.
        </p>
      </section>

      <section className="section">
        <div className="two-col">
          <div>
            <div className="section-head">
              <h2>Owned</h2>
              <span className="meta">{style.closet.owned.length}</span>
            </div>
            <ul className="owned">
              {style.closet.owned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="section-head">
              <h2>Buys</h2>
              <span className="meta">{style.closet.buys.length}</span>
            </div>
            <ul className="buys">
              {style.closet.buys.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
