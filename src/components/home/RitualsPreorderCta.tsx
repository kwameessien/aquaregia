import Link from "next/link";

const linkClassName =
  "font-site-nav text-[13px] font-normal uppercase tracking-[0.12em] text-black no-underline transition-colors hover:underline hover:decoration-black hover:decoration-1 hover:underline-offset-[3px] sm:text-[14px]";

export default function RitualsPreorderCta() {
  return (
    <p className="relative z-10 mt-[48px] w-full text-center sm:mt-[60px]">
      <Link href="/rituals-book" className={linkClassName}>
        Pre-order here
      </Link>
    </p>
  );
}
