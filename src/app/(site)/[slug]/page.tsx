import Link from "next/link";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { PortableText, type SanityDocument } from "next-sanity";
import { notFound } from "next/navigation";

import SiteHeader from "@/components/site/SiteHeader";
import { client } from "@/sanity/client";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument | null>(
    POST_QUERY,
    await params,
    options,
  );

  if (!post) {
    notFound();
  }

  const title = typeof post.title === "string" ? post.title : "Untitled";

  const postImageUrl = post.image
    ? urlFor(post.image as SanityImageSource)?.width(550).height(310).url()
    : null;

  return (
    <>
      <SiteHeader />
      <main className="container mx-auto flex min-h-screen max-w-3xl flex-col gap-4 p-8">
        <Link href="/" className="hover:underline">
          ← Back to posts
        </Link>
        {postImageUrl ? (
          <img
            src={postImageUrl}
            alt={title}
            className="aspect-video rounded-xl"
            width={550}
            height={310}
          />
        ) : null}
        <h1 className="mb-8 text-4xl font-bold">{title}</h1>
        <div className="prose max-w-none">
          {typeof post.publishedAt === "string" ? (
            <p>
              Published: {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          ) : null}
          {Array.isArray(post.body) ? <PortableText value={post.body} /> : null}
        </div>
      </main>
    </>
  );
}
