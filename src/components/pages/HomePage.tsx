import Image from "next/image";
import Link from "next/link";

import { ritualsBookSpinGifUrl } from "@/lib/assets";

export default function HomePage() {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-[40rem] flex-1 flex-col justify-center text-center">
        <p className="font-ui mb-8 text-[0.6875rem] leading-normal tracking-[0.14em] uppercase sm:mb-10 sm:text-[0.75rem]">
          <Link href="/info" className="cargo-link">
            INFO
          </Link>
          <span className="text-black"> / </span>
          <Link href="/project-index" className="cargo-link">
            INDEX
          </Link>
        </p>

        <div className="relative isolate flex justify-center py-2">
          <Image
            src={ritualsBookSpinGifUrl}
            alt=""
            width={800}
            height={800}
            unoptimized
            className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-auto w-[min(88vw,22rem)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:w-[min(72vw,28rem)] select-none"
            aria-hidden
          />
          <h1 className="font-times-now relative z-10 text-[clamp(1.05rem,2.75vw,2.25rem)] font-normal leading-[1.45] tracking-[-0.015em] text-black">
            <span className="font-medium">RITUALS</span> is a permanent document and a body
            of work dedicated to independent image-making. It loosely examines events from
            the third space between memory and myth, contextualized as{" "}
            <span className="whitespace-nowrap">&ldquo;sites of lingering.&rdquo;</span> An
            anthology of seven stories photographed over the course of a year, across five
            cities worldwide, with forty collaborators, spans 180 pages bound within a single
            volume. Published by Aqua Regia, 2026.
          </h1>
        </div>

        <p className="mt-10 sm:mt-12">
          <Link
            href="/rituals-book"
            className="cargo-link font-ui text-[0.6875rem] font-normal tracking-[0.14em] uppercase sm:text-[0.75rem]"
          >
            PRE-ORDER HERE
          </Link>
        </p>
      </div>
    </main>
  );
}
