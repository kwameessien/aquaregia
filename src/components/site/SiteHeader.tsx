import Image from "next/image";
import Link from "next/link";

const navClass =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.12em] text-black sm:text-[12px]";

const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline";

export default function SiteHeader() {
  return (
    <header className="flex flex-col items-center bg-white px-[12px] pb-[4px] pt-[7px]">
      <Link href="/" className="mb-[2px] block" aria-label="Aqua Regia home">
        <Image
          src="/assets/images/logos/AR-finalfinal.svg"
          alt=""
          width={56}
          height={37}
          className="h-auto w-[42px] select-none sm:w-[48px]"
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
