import Link from "next/link";

const titleClass =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.07em] text-black sm:text-[12px]";

const introClass =
  "font-site-nav text-[9px] font-normal tracking-[0.03em] leading-[1.5] text-black sm:text-[10px]";

const blurbClass =
  "font-site-nav text-[9px] font-normal uppercase tracking-[0.055em] leading-[1.5] text-black sm:text-[10px] sm:tracking-[0.05em]";

const specsClass =
  "font-site-nav text-[8px] font-normal tracking-[0.01em] leading-[1.55] text-black sm:text-[9px] sm:leading-[1.5]";

const cartClass =
  "font-site-nav text-[11px] font-normal tracking-[0.07em] text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline sm:text-[12px] bg-transparent p-0 cursor-pointer border-0 text-left lg:text-right";

const purchaseBadgeClass =
  "block w-full border border-black px-[12px] py-[6px] text-center font-site-nav text-[8px] font-normal uppercase tracking-[0.07em] text-neutral-600 no-underline transition-[color,background-color] duration-200 ease-out hover:bg-black hover:text-white sm:text-[9px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

type RitualsBookProductBarProps = {
  sectionTitle?: string;
  purchaseLabel?: string;
  purchaseLink?: string;
  specs?: string;
  isbnCopyright?: string;
  intro?: string;
  blurb?: string;
  cartLabel?: string;
};

export default function RitualsBookProductBar({
  sectionTitle = "Rituals",
  purchaseLabel = "Add to cart",
  purchaseLink = "/stockists",
  specs = "180 pages\nSwiss bound, Smythe sewn\nDie-cut gatefold covers\n200 x 270 mm",
  isbnCopyright = "ISBN 978 1-069245-0-0\n© 2026",
  intro = "Seven stories presented by AR PAPER.",
  blurb = "A flood of light and a flash of colour inside your jacket pocket. Notes of a missing puzzle piece, a burning, a kiss and tanning leather. Then there’s sweat beading on hot skin and the sound of melting ice in a plastic solo cup.",
  cartLabel = "Cart",
}: RitualsBookProductBarProps) {
  const specsLines = specs.split("\n").filter(Boolean);
  const isbnLines = isbnCopyright.split("\n").filter(Boolean);

  return (
    <section className="w-full shrink-0 bg-white">
      <div className="px-[12px] py-[8px] sm:px-[16px] sm:py-[10px] lg:px-[20px] lg:py-[10px]">
        <div className="flex flex-col gap-[14px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-3 xl:gap-4">
          <div className="flex w-full shrink-0 flex-col gap-[12px] self-stretch sm:gap-[14px] lg:max-w-[min(100%,240px)] lg:min-h-0 lg:justify-between lg:gap-0">
            <h2 className={titleClass}>{sectionTitle}</h2>
            <Link href={purchaseLink} className={purchaseBadgeClass}>
              {purchaseLabel}
            </Link>
          </div>

          <div className={`${specsClass} flex shrink-0 flex-col gap-[10px] sm:gap-[12px] lg:max-w-[220px]`}>
            <p className="m-0">
              {specsLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
            <p className="m-0">
              {isbnLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-[10px] sm:gap-[12px] lg:max-w-[min(100%,340px)] xl:max-w-[380px]">
            <p className={`${introClass} m-0`}>{intro}</p>
            <p className={`${blurbClass} m-0`}>{blurb}</p>
          </div>

          <div className="flex shrink-0 justify-start lg:justify-end lg:self-start lg:pt-0">
            <button type="button" className={cartClass}>
              {cartLabel}
            </button>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
    </section>
  );
}
