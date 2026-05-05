import Image from "next/image";

import { ritualsBookSpinGifUrl } from "@/lib/assets";

type RitualsHeroProps = {
  heroHeading?: string;
  heroSubheading?: string;
};

const fallbackHeroHeading =
  "RITUALS is a permanent document and a body of work dedicated to independent image-making.";

const fallbackHeroSubheading =
  "It loosely examines events from the third space between memory and myth, contextualized as “sites of lingering.” An anthology of seven stories photographed over the course of a year, across five cities worldwide, with forty collaborators, spans 180 pages bound within a single volume. Published by Aqua Regia, 2026.";

export default function RitualsHero({ heroHeading, heroSubheading }: RitualsHeroProps) {
  const resolvedHeading = heroHeading?.trim() || fallbackHeroHeading;
  const resolvedSubheading = heroSubheading?.trim() || fallbackHeroSubheading;

  return (
    <section className="w-full px-[24px] py-0 sm:px-[40px] lg:px-[48px]">
      <div className="relative isolate mx-auto w-full pt-[20px] sm:pt-[28px]">
        <Image
          src={ritualsBookSpinGifUrl}
          alt=""
          width={640}
          height={640}
          unoptimized
          className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-auto w-[min(84vw,520px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain blur-[2px] opacity-[0.42] select-none lg:w-[min(74vw,640px)]"
          aria-hidden
        />
        <h1 className="font-times-now-light relative z-10 w-full text-center text-[clamp(24px,4.15vw,48px)] leading-[1.14] tracking-[-0.018em] text-black sm:leading-[1.12]">
          {resolvedHeading} {resolvedSubheading}
        </h1>
      </div>
    </section>
  );
}
