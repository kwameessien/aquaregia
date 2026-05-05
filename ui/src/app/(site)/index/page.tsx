import IndexPage from "@/components/pages/IndexPage";
import { getClient } from "@/sanity/client";
import { draftMode } from "next/headers";

const INDEX_PAGE_QUERY = `*[
  _type == "indexPage"
  && _id == "indexPage"
][0]{
  projects[]{
    label,
    link
  }
}`;

export default async function Page() {
  const { isEnabled } = await draftMode();
  const shouldUseDrafts = isEnabled || process.env.NODE_ENV === "development";

  const indexPage = await getClient(shouldUseDrafts).fetch<
    { projects?: Array<{ label?: string; link?: string }> } | null
  >(
    INDEX_PAGE_QUERY,
    {},
    shouldUseDrafts ? { cache: "no-store" } : { next: { revalidate: 30 } },
  );

  return <IndexPage indexPage={indexPage ?? undefined} />;
}
