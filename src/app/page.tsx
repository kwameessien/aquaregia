export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-gradient-to-b from-teal-950 via-slate-950 to-slate-950 text-zinc-100">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 py-24">
        <p className="mb-3 text-sm font-medium tracking-wide text-teal-300/90">
          Welcome
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Aqua Regia
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-400">
          React on Next.js with Tailwind CSS. Edit{" "}
          <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-teal-200">
            src/app/page.tsx
          </code>{" "}
          to build your app.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-medium text-teal-950 transition hover:bg-teal-400"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js docs
          </a>
          <a
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind docs
          </a>
        </div>
      </main>
    </div>
  );
}
