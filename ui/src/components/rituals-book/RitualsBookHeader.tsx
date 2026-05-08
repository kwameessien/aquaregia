import Image from "next/image";
import Link from "next/link";

export default function RitualsBookHeader({
  logoUrl,
  className,
}: {
  logoUrl?: string;
  className?: string;
}) {
  const resolvedLogoUrl = logoUrl && logoUrl.length > 0 ? logoUrl : "/assets/images/logos/AR-finalfinal.svg";

  return (
    <header
      className={`sticky top-0 z-30 w-full shrink-0 bg-white ${className ?? ""}`}
    >
      <div className="flex flex-row items-center justify-end px-[12px] pb-[12px] pt-[10px] sm:px-[20px] sm:pb-[14px] xl:justify-center xl:px-[12px]">
        <Link href="/" className="block" aria-label="Aqua Regia home">
          <Image
            src={resolvedLogoUrl}
            alt=""
            width={56}
            height={37}
            className="h-auto w-[40px] select-none sm:w-[44px] xl:w-[44px]"
            priority
            unoptimized={resolvedLogoUrl.endsWith(".svg")}
          />
        </Link>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
    </header>
  );
}
