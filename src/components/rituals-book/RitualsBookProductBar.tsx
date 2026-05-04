const titleClass =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.12em] text-black sm:text-[12px]";

const introClass =
  "font-site-nav text-[9px] font-normal tracking-[0.04em] leading-[1.5] text-black sm:text-[10px]";

const blurbClass =
  "font-site-nav text-[9px] font-normal uppercase tracking-[0.08em] leading-[1.5] text-black sm:text-[10px] sm:tracking-[0.06em]";

const specsClass =
  "font-site-nav text-[8px] font-normal tracking-[0.02em] leading-[1.55] text-black sm:text-[9px] sm:leading-[1.5]";

const cartClass =
  "font-site-nav text-[11px] font-normal tracking-[0.12em] text-black no-underline decoration-black underline-offset-[3px] decoration-1 transition-[text-decoration-color] hover:underline sm:text-[12px] bg-transparent p-0 cursor-pointer border-0 text-left lg:text-right";

export default function RitualsBookProductBar() {
  return (
    <section className="w-full shrink-0 bg-white">
      <div className="px-[12px] py-[6px] sm:px-[16px] sm:py-[8px] lg:px-[20px] lg:py-[8px]">
        <div className="flex flex-col gap-[14px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-3 xl:gap-4">
          <div className="flex w-full shrink-0 flex-col gap-[12px] self-stretch sm:gap-[14px] lg:max-w-[min(100%,240px)] lg:min-h-0 lg:justify-between lg:gap-0">
            <h2 className={titleClass}>Rituals</h2>
            <span className="block w-full border border-black px-[12px] py-[6px] text-center font-site-nav text-[8px] font-normal uppercase tracking-[0.14em] text-neutral-600 sm:text-[9px]">
              Coming soon
            </span>
          </div>

          <div className={`${specsClass} flex shrink-0 flex-col gap-[10px] sm:gap-[12px] lg:max-w-[220px]`}>
            <p className="m-0">
              180 pages
              <br />
              Swiss bound, Smythe sewn
              <br />
              Die-cut gatefold covers
              <br />
              200 x 270 mm
            </p>
            <p className="m-0">
              ISBN 978 1-069245-0-0
              <br />© 2026
            </p>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-[10px] sm:gap-[12px] lg:max-w-[min(100%,340px)] xl:max-w-[380px]">
            <p className={`${introClass} m-0`}>Seven stories presented by AR PAPER.</p>
            <p className={`${blurbClass} m-0`}>
              A flood of light and a flash of colour inside your jacket pocket. Notes of a missing
              puzzle piece, a burning, a kiss and tanning leather. Then there&rsquo;s sweat beading on
              hot skin and the sound of melting ice in a plastic solo cup.
            </p>
          </div>

          <div className="flex shrink-0 justify-start lg:justify-end lg:self-start lg:pt-0">
            <button type="button" className={cartClass}>
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-black" aria-hidden />
    </section>
  );
}
