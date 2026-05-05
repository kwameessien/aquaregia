import Link from "next/link";

const linkClassName =
  "font-site-nav text-[13px] font-normal uppercase tracking-[0.07em] text-black no-underline transition-colors hover:underline hover:decoration-black hover:decoration-1 hover:underline-offset-[3px] sm:text-[14px]";

export default function RitualsPreorderCta({ label = "PRE-ORDER HERE" }: { label?: string }) {
  return (
    <p className="relative z-10 w-full text-center">
      <Link href="/rituals-book" className={linkClassName}>
        {label}
      </Link>
    </p>
  );
}
