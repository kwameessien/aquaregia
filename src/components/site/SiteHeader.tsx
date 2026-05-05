import Image from "next/image";
import Link from "next/link";

const navClass =
  "font-site-nav text-[13px] font-normal uppercase tracking-[0.12em] text-black md:text-[14px]";

const linkClass =
  "text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline";

export default function SiteHeader() {
  return (
    <header className="flex flex-col items-center bg-white px-[12px] pb-[4px] pt-[7px]">
      <Link href="/" className="mb-[2px] block" aria-label="Aqua Regia home">
        <Image
          src="/assets/images/logos/AR-finalfinal.svg"
          alt=""
          width={64}
          height={42}
          className="h-auto w-[48px] select-none md:w-[56px]"
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
