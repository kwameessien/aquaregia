import Link from "next/link";

const navLinkClass =
  "font-site-nav text-[12px] font-normal uppercase tracking-[0.12em] text-black no-underline transition-colors hover:underline hover:decoration-black hover:decoration-1 hover:underline-offset-[3px] sm:text-[13px] uppercase";

export default function IndexChrome() {
  return (
    <div className="w-full shrink-0">
      <div className="flex w-full items-baseline justify-between px-[12px] pb-[10px] pt-[12px] sm:px-[16px] sm:pt-[14px]">
        <Link href="/" className={navLinkClass}>
          Project
        </Link>
        <Link href="/index" className={navLinkClass} aria-current="page">
          Index
        </Link>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
      <div className="flex w-full justify-center px-[12px] py-[14px] sm:px-[16px] sm:py-[16px]">
        <p className={`${navLinkClass} text-center`}>
          Rituals (2026) —{" "}
          <Link href="/rituals-book" className={navLinkClass}>
            Buy here
          </Link>
        </p>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
    </div>
  );
}
