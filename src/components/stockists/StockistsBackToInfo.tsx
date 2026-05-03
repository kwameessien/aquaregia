import Link from "next/link";

const navClass =
  "font-site-nav text-[13px] font-normal uppercase tracking-[0.12em] text-black sm:text-[14px]";

const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline";

export default function StockistsBackToInfo() {
  return (
    <nav
      aria-label="Back to info"
      className={`flex w-full justify-center px-[20px] pb-[30px] pt-[clamp(20px,5vh,48px)] sm:px-[32px] sm:pb-[48px] ${navClass}`}
    >
      <Link href="/info" className={linkClass}>
        BACK TO INFO
      </Link>
    </nav>
  );
}
