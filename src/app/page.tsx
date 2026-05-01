export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-[24px] py-[48px]">
      <h1 className="text-[28px] font-semibold tracking-[-0.02em]">Aqua Regia</h1>
      <p className="mt-[16px] max-w-[420px] text-center text-[15px] leading-[24px] text-neutral-600">
        Fresh shell. Your assets are still under <code className="text-neutral-800">public/</code>{" "}
        and Sanity under <code className="text-neutral-800">sanity/</code>.
      </p>
    </main>
  );
}
