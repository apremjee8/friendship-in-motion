import Link from "next/link";
import { Plate } from "@/components/Plate";
import { followCount, style } from "@/lib/language";

export default function HomePage() {
  const hero = style.feed.copy.find((item) => item.hero);
  const count = followCount();

  return (
    <main>
      <section className="hero">
        <div className="thesis">
          <p className="kicker">@ {style.account}</p>
          <h1>18 follows, four lanes, two silhouettes.</h1>
          <p className="lede">
            The dressing language of @{style.account}, pulled from the
            following list and the feed on 3 Sep 2026. Open this URL and dress
            from it. Not a shop.
          </p>
          <div className="counts">
            <div className="count">
              <b>{count}</b>
              <span>follows</span>
            </div>
            <div className="count">
              <b>{style.thesis.lanes}</b>
              <span>lanes</span>
            </div>
            <div className="count">
              <b>{style.thesis.silhouettes}</b>
              <span>silhouettes</span>
            </div>
          </div>
          <div className="btn-row">
            <Link className="btn btn-olive" href="/lanes">
              Read the lanes
            </Link>
            <Link className="btn" href="/rules">
              Dressing rules
            </Link>
            <Link className="btn" href="/style.json">
              Machine file
            </Link>
          </div>
        </div>
        {hero ? (
          <Plate
            src={hero.image}
            handle={hero.handle}
            note={hero.note}
            plate="Plate 01"
            stamp="HERO"
            priority
            wide
          />
        ) : null}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Four lanes</h2>
          <Link href="/lanes">full map →</Link>
        </div>
        <div className="grid-4">
          {style.lanes.map((lane) => (
            <Link key={lane.id} href={`/lanes#${lane.id}`} className="lane-card">
              <p className="kicker">Lane {lane.number}</p>
              <h3>{lane.name}</h3>
              <p>{lane.plain}</p>
              <p>
                {lane.handles.map((h) => `@${h}`).join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Two silhouettes</h2>
          <Link href="/rules">how to wear them →</Link>
        </div>
        <div className="grid-2">
          {style.silhouettes.map((s) => (
            <article key={s.id} className="lane-card">
              <p className="kicker">{s.id.replace("-", " ")}</p>
              <h3>{s.name}</h3>
              <p>
                {s.pants}. {s.top}. {s.finish}. {s.shoes}.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Own grid</h2>
          <span className="meta">@{style.account} as worn</span>
        </div>
        <div className="grid-2">
          <Plate
            src="/looks/profile-outfits.jpg"
            handle={style.account}
            note="puffer, glasses, friends"
            plate="Own 01"
            stamp="OWN"
          />
          <Plate
            src="/looks/profile-outfits-2.jpg"
            handle={style.account}
            note="cable vest + olive trousers + puffer"
            plate="Own 02"
            stamp="OWN"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Feed steals</h2>
          <Link href="/feed">copy vs skip →</Link>
        </div>
        <div className="grid-3">
          {style.feed.copy.slice(0, 6).map((item, i) => (
            <Plate
              key={item.id}
              src={item.image}
              handle={item.handle}
              note={item.note}
              plate={`F-${String(i + 1).padStart(2, "0")}`}
              stamp={item.hero ? "HERO" : "COPY"}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
