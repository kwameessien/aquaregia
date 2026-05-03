import Link from "next/link";

export default function IndexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-[24px] py-[48px]">
      <p className="text-[15px] text-neutral-600">Index — content coming soon.</p>
      <Link href="/" className="mt-[24px] text-[13px] text-black underline underline-offset-4">
        Home
      </Link>
    </main>
  );
}
