import HomePage from "@/components/pages/HomePage";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

const HOME_PAGE_QUERY = `*[
  _type == "homePage"
  && _id == "homePage"
][0]{
  heroHeading,
  heroSubheading,
  orderLabel
}`;

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const homePage = await client.fetch<
    { heroHeading?: string; heroSubheading?: string; orderLabel?: string } | null
  >(HOME_PAGE_QUERY, {}, options);
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return <HomePage posts={posts} homePage={homePage ?? undefined} />;
}
