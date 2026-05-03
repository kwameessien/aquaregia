import Image from "next/image";
import Link from "next/link";

export default function RitualsBookHeader() {
  return (
    <header className="bg-white">
      <div className="flex flex-col items-center px-[12px] pb-[12px] pt-[10px] sm:pb-[14px]">
        <Link href="/" className="block" aria-label="Aqua Regia home">
          <Image
            src="/assets/images/logos/AR-finalfinal.svg"
            alt=""
            width={56}
            height={37}
            className="h-auto w-[40px] select-none sm:w-[44px]"
            priority
          />
        </Link>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
    </header>
  );
}
