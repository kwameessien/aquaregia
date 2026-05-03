import Image from "next/image";

import RitualsPreorderCta from "@/components/home/RitualsPreorderCta";
import { ritualsBookSpinGifUrl } from "@/lib/assets";

export default function RitualsHero() {
  return (
    <section className="flex w-full flex-col gap-20 px-[20px] py-[24px] sm:px-[32px] sm:py-[32px] lg:gap-28 xl:gap-36 2xl:gap-44">
      <div className="relative isolate mx-auto w-full pt-[20px] sm:pt-[28px]">
        <Image
          src={ritualsBookSpinGifUrl}
          alt=""
          width={640}
          height={640}
          unoptimized
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-auto w-[min(82vw,480px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain blur-[2px] opacity-[0.42] select-none lg:w-[min(72vw,600px)]"
          aria-hidden
        />
        <h1 className="font-times-now-light relative z-10 w-full text-center text-[clamp(22px,3.7vw,42px)] leading-[1.42] tracking-[-0.014em] text-black">
          RITUALS is a permanent document and a body of work dedicated to independent image-making. It
          loosely examines events from the third space between memory and myth, contextualized as{" "}
          <span className="whitespace-nowrap">&ldquo;sites of lingering.&rdquo;</span> An anthology
          of seven stories photographed over the course of a year, across five cities worldwide,
          with forty collaborators, spans 180 pages bound within a single volume. Published by Aqua
          Regia, 2026.
        </h1>
      </div>
      <RitualsPreorderCta />
    </section>
  );
}
