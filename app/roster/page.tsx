import type { Metadata } from "next";
import { at, ig, style } from "@/lib/language";

export const metadata: Metadata = {
  title: "Roster",
};

const GROUPS = [
  {
    key: "fashion" as const,
    title: "Fashion",
    blurb: "The lookbook. Dress from these grids.",
  },
  {
    key: "hamza" as const,
    title: "Hamza north star",
    blurb: "Utility silhouette. Not loafers.",
  },
  {
    key: "friends" as const,
    title: "Friends",
    blurb: "People, not a shopping list.",
  },
  {
    key: "not_fashion" as const,
    title: "Not fashion",
    blurb: "On the following list. Do not dress from it.",
  },
];

export default function RosterPage() {
  const total =
    style.follows.fashion.length +
    style.follows.hamza.length +
    style.follows.friends.length +
    style.follows.not_fashion.length;

  return (
    <main>
      <header className="page-hero">
        <p className="kicker">Complete following · {total}</p>
        <h1 className="page-title">Eighteen handles. None invented.</h1>
        <p className="lede">
          @{style.account} follows {style.following}. This is the whole list,
          grouped the way the language uses them. Every name links to
          instagram.com.
        </p>
      </header>

      {GROUPS.map((group) => (
        <section key={group.key} className="roster-group">
          <h2>{group.title}</h2>
          <p className="meta" style={{ marginBottom: "0.8rem" }}>
            {group.blurb} · {style.follows[group.key].length}
          </p>
          <div className="roster-list">
            {style.follows[group.key].map((f) => (
              <a
                key={f.handle}
                className="roster-row"
                href={ig(f.handle)}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{at(f.handle)}</strong>
                <span>{f.note}</span>
              </a>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
