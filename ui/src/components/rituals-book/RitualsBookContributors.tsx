const headingClass =
  "font-site-nav text-[11px] font-normal uppercase tracking-[0.07em] text-black sm:text-[12px]";

const namesClass =
  "font-site-nav text-[9px] font-normal tracking-[0.02em] leading-[1.5] text-black sm:text-[10px] sm:leading-[1.48]";

const footnoteClass =
  "font-site-nav text-[8px] font-normal tracking-[0.01em] leading-[1.5] text-black sm:text-[9px] sm:leading-[1.48]";

type RitualsBookContributorsProps = {
  heading?: string;
  contributors: string;
  shippingNote: string;
  shippingEmail?: string;
};

export default function RitualsBookContributors({
  heading = "Contributors",
  contributors,
  shippingNote,
  shippingEmail = "hello@aquaregia.com",
}: RitualsBookContributorsProps) {
  return (
    <section
      className="mx-auto mt-[16px] flex w-full max-w-[min(100%,920px)] flex-col items-center text-center sm:mt-[20px] lg:mt-[24px]"
      aria-labelledby="rituals-book-contributors-heading"
    >
      <h2 id="rituals-book-contributors-heading" className={`${headingClass} m-0`}>
        {heading}
      </h2>
      <p className={`${namesClass} mt-[16px] mb-0 max-w-none sm:mt-[18px]`}>{contributors}</p>
      <p className={`${footnoteClass} mt-[24px] mb-0 max-w-[min(100%,520px)] sm:mt-[28px]`}>
        {shippingNote}{" "}
        <a href={`mailto:${shippingEmail}`} className="text-inherit no-underline">
          {shippingEmail}
        </a>
      </p>
    </section>
  );
}
