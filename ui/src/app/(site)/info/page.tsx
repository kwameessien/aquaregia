import InfoPage from "@/components/pages/InfoPage";
import { client } from "@/sanity/client";

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

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const infoPage = await client.fetch<
    {
      infoIntro?: string;
      infoContact?: Array<{ label?: string; url?: string; openInNewTab?: boolean }>;
    } | null
  >(INFO_PAGE_QUERY, {}, options);

  return <InfoPage infoPage={infoPage ?? undefined} />;
}
