"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { ritualsGalleryImageUrls } from "@/lib/assets";

const btnClass =
  "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-neutral-500/30 text-white opacity-100 transition-[opacity,background-color] duration-200 hover:bg-neutral-500/45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:focus-visible:opacity-100 sm:h-11 sm:w-11";

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
  const imagePriority = index === 0 || src.endsWith(".gif");

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  useEffect(() => {
    if (n <= 1) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const intervalMs = 5000;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [n]);

  return (
    <div className="group relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
      {/* Full-bleed wrapper so prev/next sit on the viewport edges; image stays centered. */}
      <div className="relative mx-auto w-full max-w-[min(100%,920px)]">
        {/* Tall aspect + object-center created huge letterboxing above each slide; cap height and pin to top. */}
        <div className="relative h-[min(62dvh,720px)] w-full overflow-hidden bg-white sm:h-[min(68dvh,800px)]">
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 920px) 90vw, 920px"
            className="object-contain object-top"
            priority={imagePriority}
            unoptimized={src.endsWith(".gif")}
          />
        </div>
      </div>

      <button
        type="button"
        className={`${btnClass} left-[max(0.5rem,env(safe-area-inset-left))]`}
        aria-label="Previous image"
        onClick={goPrev}
      >
        <ChevronLeft className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
      </button>
      <button
        type="button"
        className={`${btnClass} right-[max(0.5rem,env(safe-area-inset-right))]`}
        aria-label="Next image"
        onClick={goNext}
      >
        <ChevronRight className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
      </button>
    </div>
  );
}