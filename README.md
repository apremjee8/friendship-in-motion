# friendship in motion

Editorial field catalog for the [@friendshipinmotion](https://instagram.com/friendshipinmotion) dressing language. One URL so another agent can dress from it. **Not a shop.**

**Live Vercel URL:** Vercel already detected this repo and emailed an Import Project link. Open that import (or [this deploy URL](https://vercel.com/new/import?framework=nextjs&project-name=friendship-in-motion&provider=github&s=https://github.com/apremjee8/friendship-in-motion)) while signed into Vercel as `apremjee8`. Production will be:

**https://friendship-in-motion.vercel.app**

GitHub (public, for Vercel Hobby): [apremjee8/friendship-in-motion](https://github.com/apremjee8/friendship-in-motion)

## Thesis

18 follows, four lanes, two silhouettes.

- **Heritage americana / tank-and-denim** — willhalbert, edgyalbert, _jonathankirby
- **Quiet studio tailoring** — _zachmcnally; feed unionhallny, kai.baker26, rami.frn_
- **Field-kit / Hamza utility** — william_ellery, abouammz
- **Magazine / editorial** — vmansea, rkzuk (look, don't shop)

## Routes

| Path | What |
| --- | --- |
| `/` | Index — title, thesis, hero plate |
| `/lanes` | Four lanes, palettes, closet map |
| `/roster` | All 18 follows, grouped, Instagram links |
| `/feed` | Feed steals — copy vs skip |
| `/rules` | Dressing rules, owned, buys |
| `/style.json` | Machine-readable language |
| `/brief` and `/brief.md` | Plain-text dump |

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:43173](http://127.0.0.1:43173)

## Plates

Feed and account screenshots belong in `public/looks/` under the filenames in `data/style.json`. If a file is missing, the catalog shows a words-only plate — no fake photos.

## Stack

Next.js (App Router) + static assets. Paper `#f3efe6`, ink `#161411`, olive `#3f4a32`.

## Source

source: @friendshipinmotion following + feed, 3 sep 2026. for agents. not a shop.
