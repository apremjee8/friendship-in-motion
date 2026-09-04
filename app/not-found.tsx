import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero">
      <p className="kicker">Missing plate</p>
      <h1 className="page-title">That page is not in the catalog.</h1>
      <p className="lede">Back to the index, or read the machine file.</p>
      <div className="btn-row">
        <Link className="btn btn-olive" href="/">
          Index
        </Link>
        <Link className="btn" href="/style.json">
          style.json
        </Link>
      </div>
    </main>
  );
}
