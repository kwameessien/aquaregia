import StockistsPage from "@/components/pages/StockistsPage";
import { getClient } from "@/sanity/client";
import { draftMode } from "next/headers";

const STOCKISTS_PAGE_QUERY = `*[
  _type == "stockistsPage"
  && _id == "stockistsPage"
][0]{
  header,
  stockists[]{
    name,
    url
  }
}`;

export default async function Page() {
  const { isEnabled } = await draftMode();
  const shouldUseDrafts = isEnabled || process.env.NODE_ENV === "development";

  const stockistsPage = await getClient(shouldUseDrafts).fetch<
    { header?: string; stockists?: Array<{ name?: string; url?: string }> } | null
  >(
    STOCKISTS_PAGE_QUERY,
    {},
    shouldUseDrafts ? { cache: "no-store" } : { next: { revalidate: 30 } },
  );

  return <StockistsPage stockistsPage={stockistsPage ?? undefined} />;
}
