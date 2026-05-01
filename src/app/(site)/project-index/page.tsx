import Link from "next/link";

export default function ProjectIndexPage() {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-[50rem] text-center text-[0.95rem] leading-relaxed">
        <p className="mb-8">
          <Link href="/" className="cargo-link">
            HOME
          </Link>
          <span className="text-black"> / </span>
          <Link href="/info" className="cargo-link">
            INFO
          </Link>
        </p>
        <p className="text-black">
          Project index will mirror your Cargo index after you move assets and copy over.
        </p>
      </div>
    </main>
  );
}
