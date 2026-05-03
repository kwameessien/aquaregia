import Image from "next/image";
import Link from "next/link";

const navClass =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.14em] text-black";

const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline";

export default function SiteHeader() {
  return (
    <header className="flex flex-col items-center bg-white px-[12px] pb-[10px] pt-[10px]">
      <Link href="/" className="mb-[6px] block" aria-label="Aqua Regia home">
        <Image
          src="/assets/images/logos/AR-finalfinal.svg"
          alt=""
          width={56}
          height={37}
          className="h-auto w-[40px] select-none sm:w-[44px]"
          priority
        />
      </Link>
      <nav aria-label="Primary" className={navClass}>
        <Link href="/info" className={linkClass}>
          Info
        </Link>
        <span className="text-black" aria-hidden>
          {" "}
          /{" "}
        </span>
        <Link href="/index" className={linkClass}>
          Index
        </Link>
      </nav>
    </header>
  );
}
