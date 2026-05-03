import Link from "next/link";

const linkClassName =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.14em] text-black no-underline transition-colors hover:underline hover:decoration-black hover:decoration-1 hover:underline-offset-[3px]";

export default function RitualsPreorderCta() {
  return (
    <p className="relative z-10 mt-[28px] w-full text-center sm:mt-[36px]">
      <Link href="/rituals-book" className={linkClassName}>
        Pre-order here
      </Link>
    </p>
  );
}
