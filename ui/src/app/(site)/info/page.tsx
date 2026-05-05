import InfoPage from "@/components/pages/InfoPage";
import { getClient } from "@/sanity/client";
import { draftMode } from "next/headers";

const INFO_PAGE_QUERY = `*[
  _type == "infoPage"
  && _id == "infoPage"
][0]{
  infoIntro,
  infoContact[]{
    label,
    url,
    openInNewTab
  }
}`;

export default async function Page() {
  const { isEnabled } = await draftMode();
  const shouldUseDrafts = isEnabled || process.env.NODE_ENV === "development";

  const infoPage = await getClient(shouldUseDrafts).fetch<
    {
      infoIntro?: string;
      infoContact?: Array<{ label?: string; url?: string; openInNewTab?: boolean }>;
    } | null
  >(
    INFO_PAGE_QUERY,
    {},
    shouldUseDrafts ? { cache: "no-store" } : { next: { revalidate: 30 } },
  );

  return <InfoPage infoPage={infoPage ?? undefined} />;
}
