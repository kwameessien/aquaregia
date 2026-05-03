import Link from "next/link";

const navClass =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.14em] text-black";

const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline";

export default function InfoStockists() {
  return (
    <nav aria-label="Stockists" className={`flex w-full justify-center ${navClass}`}>
      <Link href="/stockists" className={linkClass}>
        Stockists
      </Link>
    </nav>
  );
}
