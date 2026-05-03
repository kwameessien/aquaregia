import Link from "next/link";

import SiteHeader from "@/components/site/SiteHeader";

export default function InfoPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex flex-1 flex-col items-center justify-center px-[24px] py-[48px]">
        <p className="text-[15px] text-neutral-600">Info — content coming soon.</p>
        <Link href="/" className="mt-[24px] text-[13px] text-black underline underline-offset-4">
          Home
        </Link>
      </div>
    </main>
  );
}
