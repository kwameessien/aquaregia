import RitualsBookPage, {
  type RitualsBookContent,
} from "@/components/pages/RitualsBookPage";
import { getClient } from "@/sanity/client";
import { draftMode } from "next/headers";

const PRODUCT_QUERY = `*[
  _type == "product"
  && slug.current == $slug
][0]{
  sectionTitle,
  purchaseLabel,
  purchaseLink,
  specs,
  isbnCopyright,
  intro,
  blurb,
  cartLabel,
  contributorsHeading,
  contributors,
  shippingNote,
  shippingEmail,
  footerBackLinkLabel,
  footerBackLinkHref,
  "headerLogoUrl": headerLogo.asset->url,
  "galleryImages": gallery[]{
    "url": asset->url,
    alt
  }
}`;

export default async function Page() {
  const { isEnabled } = await draftMode();
  const shouldUseDrafts = isEnabled || process.env.NODE_ENV === "development";
  const content = await getClient(shouldUseDrafts).fetch<RitualsBookContent | null>(
    PRODUCT_QUERY,
    { slug: "rituals-book" },
    shouldUseDrafts ? { cache: "no-store" } : { next: { revalidate: 30 } },
  );

  return <RitualsBookPage content={content ?? undefined} />;
}
