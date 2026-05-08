import Image from "next/image";
import Link from "next/link";

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 8h14v11H5V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8V6a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RitualsBookHeader({
  logoUrl,
  className,
  cartLabel = "Cart",
}: {
  logoUrl?: string;
  className?: string;
  cartLabel?: string;
}) {
  const resolvedLogoUrl = logoUrl && logoUrl.length > 0 ? logoUrl : "/assets/images/logos/AR-finalfinal.svg";

  return (
    <header
      className={`sticky top-0 z-30 w-full shrink-0 bg-white ${className ?? ""}`}
    >
      <div className="flex flex-row items-center justify-between px-[12px] pb-[12px] pt-[10px] sm:px-[20px] sm:pb-[14px] xl:justify-center xl:px-[12px]">
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
        <button
          type="button"
          className="flex h-[28px] w-[28px] items-center justify-center bg-transparent p-0 text-black xl:hidden"
          aria-label={cartLabel}
        >
          <CartIcon className="h-[20px] w-[20px]" />
        </button>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
    </header>
  );
}
