import raw from "@/data/style.json";

export type Follow = { handle: string; note: string };

export type Lane = {
  id: string;
  number: string;
  name: string;
  plain: string;
  handles: string[];
  feed_handles?: string[];
  items: string[];
  palette: string[];
  closet: string;
  images: string[];
};

export type Silhouette = {
  id: string;
  name: string;
  pants: string;
  top: string;
  finish: string;
  shoes: string;
};

export type FeedCopy = {
  id: string;
  handle: string;
  verdict: "COPY" | "SKIP";
  hero?: boolean;
  note: string;
  image?: string | null;
  lane?: string;
};

export type FeedSkip = {
  id: string;
  handle: string;
  verdict: "SKIP";
  note: string;
};

export type StyleLanguage = {
  account: string;
  url: string;
  followers: number;
  following: number;
  bio: string[];
  title: string;
  subtitle: string;
  thesis: { follows: number; lanes: number; silhouettes: number };
  source: string;
  purpose: string;
  follows: {
    fashion: Follow[];
    hamza: Follow[];
    friends: Follow[];
    not_fashion: Follow[];
  };
  lanes: Lane[];
  silhouettes: Silhouette[];
  feed: { copy: FeedCopy[]; skip: FeedSkip[] };
  rules: {
    palette: { closed: string[]; accent_only: string; no: string };
    skip: string[];
    mix_and_match: string;
    sourcing: string[];
    laundry: string;
    places: string[];
    shoe_size: string;
    hospital_shoe: string;
    do_not_use_on_siena_or_london: string;
    do_not_invent: string[];
  };
  closet: { owned: string[]; buys: string[] };
  images: Record<string, { handle: string; use: string; note: string }>;
};

export const style = raw as StyleLanguage;

export const NAV = [
  { href: "/", label: "Index" },
  { href: "/lanes", label: "Lanes" },
  { href: "/roster", label: "Roster" },
  { href: "/feed", label: "Feed" },
  { href: "/rules", label: "Rules" },
  { href: "/style.json", label: "JSON" },
  { href: "/brief", label: "Brief" },
] as const;

export function ig(handle: string) {
  return `https://instagram.com/${handle}`;
}

export function at(handle: string) {
  return `@${handle}`;
}

export function allFollows(): { group: string; handle: string; note: string }[] {
  return [
    ...style.follows.fashion.map((f) => ({ group: "fashion", ...f })),
    ...style.follows.hamza.map((f) => ({ group: "hamza", ...f })),
    ...style.follows.friends.map((f) => ({ group: "friends", ...f })),
    ...style.follows.not_fashion.map((f) => ({ group: "not-fashion", ...f })),
  ];
}

export function followCount() {
  return allFollows().length;
}

export function laneById(id: string) {
  return style.lanes.find((lane) => lane.id === id);
}
