import Link from "next/link";

const navClass =
  "font-site-nav text-[13px] font-normal uppercase tracking-[0.07em] text-black sm:text-[14px]";

const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline";

export default function InfoStockists() {
  return (
    <nav
      aria-label="Stockists"
      className={`mb-[30px] flex w-full justify-center sm:mb-[48px] ${navClass}`}
    >
      <Link href="/stockists" className={linkClass}>
        Stockists
      </Link>
    </nav>
  );
}
