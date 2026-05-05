import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import RitualsHero from "@/components/home/RitualsHero";
import RitualsPreorderCta from "@/components/home/RitualsPreorderCta";
import SiteHeader from "@/components/site/SiteHeader";

type HomePageProps = {
  posts: SanityDocument[];
  homePage?: {
    heroHeading?: string;
    heroSubheading?: string;
    orderLabel?: string;
  };
};

function getSlugCurrent(post: SanityDocument): string | undefined {
  const slug = post.slug;
  if (slug && typeof slug === "object" && slug !== null && "current" in slug) {
    const current = (slug as { current?: string }).current;
    return typeof current === "string" ? current : undefined;
  }
  return undefined;
}

function formatPostDate(iso: unknown) {
  if (typeof iso !== "string") return null;
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return null;
  }
}

export default function HomePage({ posts, homePage }: HomePageProps) {
  return (
    <main className="flex min-h-[100dvh] min-h-screen flex-col bg-white">
      <SiteHeader />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 w-full max-w-full flex-1 flex-col justify-center pt-[min(48px,8vh)] sm:pt-[min(64px,9vh)] lg:pt-[min(72px,10vh)]">
          <RitualsHero
            heroHeading={homePage?.heroHeading}
            heroSubheading={homePage?.heroSubheading}
          />
        </div>
        <div className="mt-[60px] w-full max-w-full shrink-0 px-[20px] pb-[24px] sm:mt-20 sm:px-[32px] sm:pb-[32px] lg:mt-28 xl:mt-36 2xl:mt-44">
          <RitualsPreorderCta label={homePage?.orderLabel} />
        </div>
        {posts.length > 0 ? (
          <section
            className="border-t border-neutral-200 px-[20px] py-12 sm:px-[32px] sm:py-16"
            aria-labelledby="sanity-posts-heading"
          >
            <div className="mx-auto max-w-2xl">
              <h2
                id="sanity-posts-heading"
                className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500"
              >
                From the journal
              </h2>
              <ul className="mt-6 space-y-4">
                {posts.map((post) => {
                  const slug = getSlugCurrent(post);
                  const dateLabel = formatPostDate(post.publishedAt);
                  const title =
                    typeof post.title === "string" ? post.title : "Untitled";

                  return (
                    <li
                      key={post._id}
                      className="border-b border-neutral-100 pb-4 last:border-b-0 last:pb-0"
                    >
                      {slug ? (
                        <Link
                          href={`/${slug}`}
                          className="block transition-opacity hover:opacity-80"
                        >
                          <p className="text-base font-medium text-neutral-900">{title}</p>
                          {dateLabel ? (
                            <p className="mt-1 text-sm text-neutral-500">{dateLabel}</p>
                          ) : null}
                        </Link>
                      ) : (
                        <>
                          <p className="text-base font-medium text-neutral-900">{title}</p>
                          {dateLabel ? (
                            <p className="mt-1 text-sm text-neutral-500">{dateLabel}</p>
                          ) : null}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
