"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { ritualsGalleryImageUrls } from "@/lib/assets";

const btnClass =
  "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-neutral-500/30 text-white transition-colors hover:bg-neutral-500/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:h-11 sm:w-11";

function ChevronLeft({ className }: { className?: string }) {
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
        d="M14 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
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
        d="M10 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function RitualsBookGallery() {
  const [index, setIndex] = useState(0);
  const n = ritualsGalleryImageUrls.length;
  const src = ritualsGalleryImageUrls[index]!;

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,920px)]">
      {/* Tall aspect + object-center created huge letterboxing above each slide; cap height and pin to top. */}
      <div className="relative h-[min(62dvh,720px)] w-full overflow-hidden bg-white sm:h-[min(68dvh,800px)]">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 920px) 90vw, 920px"
          className="object-contain object-top"
          priority={index === 0}
          unoptimized={src.endsWith(".gif")}
        />
      </div>

      <button
        type="button"
        className={`${btnClass} left-2 sm:left-3`}
        aria-label="Previous image"
        onClick={goPrev}
      >
        <ChevronLeft className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
      </button>
      <button
        type="button"
        className={`${btnClass} right-2 sm:right-3`}
        aria-label="Next image"
        onClick={goNext}
      >
        <ChevronRight className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
      </button>
    </div>
  );
}
