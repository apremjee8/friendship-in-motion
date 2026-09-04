import Image from "next/image";
import { lookSrc } from "@/lib/looks";
import { at, ig } from "@/lib/language";

type PlateProps = {
  src?: string | null;
  handle: string;
  note: string;
  plate?: string;
  stamp?: "COPY" | "SKIP" | "HERO" | "LANE" | "OWN";
  priority?: boolean;
  wide?: boolean;
};

export function Plate({
  src,
  handle,
  note,
  plate,
  stamp,
  priority,
  wide,
}: PlateProps) {
  const photo = lookSrc(src);

  return (
    <figure className={wide ? "plate plate-wide" : "plate"}>
      <div className="frame">
        {stamp ? <span className={`stamp stamp-${stamp.toLowerCase()}`}>{stamp}</span> : null}
        {photo ? (
          <Image
            src={photo}
            alt={`${at(handle)} — ${note}`}
            width={wide ? 1600 : 900}
            height={wide ? 1200 : 1200}
            priority={priority}
          />
        ) : (
          <div className="text-card">
            <p className="text-card-kicker">no plate — words only</p>
            <p className="text-card-handle">{at(handle)}</p>
            <p className="text-card-note">{note}</p>
          </div>
        )}
      </div>
      <figcaption>
        {plate ? <span className="plate-no">{plate}</span> : null}
        <a href={ig(handle)} target="_blank" rel="noreferrer">
          {at(handle)}
        </a>
        <span className="cap-rule" aria-hidden="true" />
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}
