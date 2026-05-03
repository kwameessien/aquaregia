import Image from "next/image";
import Link from "next/link";

import { ritualsBookSpinGifUrl } from "@/lib/assets";

export default function RitualsHero() {
  return (
    <section className="flex w-full flex-1 flex-col justify-center px-[16px] py-[32px] sm:px-[24px] sm:py-[48px]">
      <div className="relative isolate mx-auto flex w-full max-w-[min(94vw,720px)] flex-col items-center text-center">
        <Image
          src={ritualsBookSpinGifUrl}
          alt=""
          width={640}
          height={640}
          unoptimized
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-auto w-[min(72vw,260px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain blur-[2px] opacity-[0.42] select-none sm:w-[min(56vw,300px)]"
          aria-hidden
        />
        <h1 className="font-times-now relative z-10 text-[clamp(16px,2.6vw,28px)] font-light leading-[1.45] tracking-[-0.012em] text-black">
          <span className="font-normal">RITUALS</span> is a permanent document and a body of work
          dedicated to independent image-making. It loosely examines events from the third space
          between memory and myth, contextualized as{" "}
          <span className="whitespace-nowrap">&ldquo;sites of lingering.&rdquo;</span> An anthology
          of seven stories photographed over the course of a year, across five cities worldwide,
          with forty collaborators, spans 180 pages bound within a single volume. Published by Aqua
          Regia, 2026.
        </h1>

        <p className="relative z-10 mt-[36px] sm:mt-[44px]">
          <Link
            href="/rituals-book"
            className="font-site-nav text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--accent)] underline decoration-[var(--accent)] decoration-1 underline-offset-[3px] transition-colors hover:text-black hover:decoration-black"
          >
            Pre-order here
          </Link>
        </p>
      </div>
    </section>
  );
}
