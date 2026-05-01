import Link from "next/link";

export default function InfoPage() {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-[50rem] text-center text-[0.95rem] leading-relaxed">
        <p className="mb-8">
          <Link href="/" className="cargo-link">
            HOME
          </Link>
          <span className="text-black"> / </span>
          <Link href="/project-index" className="cargo-link">
            INDEX
          </Link>
        </p>
        <p className="text-black">
          Info for this site will live here when you migrate content from{" "}
          <a
            href="https://aquaregia.world"
            className="cargo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            aquaregia.world
          </a>
          .
        </p>
      </div>
    </main>
  );
}
