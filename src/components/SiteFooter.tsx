import Image from "next/image";
import Link from "next/link";

const navClass =
  "font-footer-nav text-[11px] font-normal uppercase tracking-[0.14em] text-black";

export default function SiteFooter() {
  return (
    <footer className="flex flex-col items-center bg-white px-[16px] pb-[32px] pt-[28px]">
      <Link href="/" className="mb-[14px] block" aria-label="Aqua Regia home">
        <Image
          src="/assets/images/logos/AR-finalfinal.svg"
          alt=""
          width={132}
          height={87}
          className="h-auto w-[120px] select-none sm:w-[132px]"
          priority
        />
      </Link>
      <nav aria-label="Footer" className={navClass}>
        <Link href="/info" className="text-black transition-colors hover:text-neutral-700">
          Info
        </Link>
        <span className="text-black" aria-hidden>
          {" "}
          /{" "}
        </span>
        <Link href="/index" className="text-black transition-colors hover:text-neutral-700">
          Index
        </Link>
      </nav>
    </footer>
  );
}
