import Link from "next/link";

export default function RitualsBookPage() {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-4 py-12">
      <div className="mx-auto w-full max-w-[50rem] text-center text-[0.95rem] leading-relaxed">
        <p className="mb-8">
          <Link href="/" className="cargo-link">
            HOME
          </Link>
        </p>
        <h1 className="mb-6 text-[clamp(1.5rem,4vw,2.2rem)] font-medium leading-tight tracking-tight text-black">
          RITUALS — pre-order
        </h1>
        <p className="text-black">
          Replace this page with your checkout link (Shopify, Big Cartel, etc.) or embed the
          same flow you use on Cargo today.
        </p>
      </div>
    </main>
  );
}
