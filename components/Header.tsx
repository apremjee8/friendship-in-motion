import Link from "next/link";
import { NAV, style } from "@/lib/language";

export function Header({ pathname }: { pathname: string }) {
  return (
    <header className="site-header">
      <div className="mast">
        <p className="running">
          Field catalog <span aria-hidden="true">·</span> No. 01{" "}
          <span aria-hidden="true">·</span> 3 Sep 2026
        </p>
        <Link href="/" className="wordmark">
          {style.title}
        </Link>
        <p className="deck">{style.subtitle}</p>
      </div>
      <nav className="nav" aria-label="Catalog">
        {NAV.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "active" : undefined}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
