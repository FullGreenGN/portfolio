import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostContent from "@/components/blog-post-content";

function getSortedPosts() {
  return [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path.replace(/\.mdx$/, "") === slug);

  if (!post) {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${slug}`,
      ...(image && {
        images: [
          {
            url: `${DATA.url}${image}`,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && {
        images: [`${DATA.url}${image}`],
      }),
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const sortedPosts = getSortedPosts();
  const currentIndex = sortedPosts.findIndex(
    (p) => p._meta.path.replace(/\.mdx$/, "") === slug
  );
  const post = sortedPosts[currentIndex];

  if (!post) {
    notFound();
  }

  const previousPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;

  const getSlug = (post: (typeof sortedPosts)[0]) =>
    post._meta.path.replace(/\.mdx$/, "");

  const previousSimple = previousPost
    ? { title: previousPost.title, slug: getSlug(previousPost) }
    : null;
  const nextSimple = nextPost
    ? { title: nextPost.title, slug: getSlug(nextPost) }
    : null;

  const jsonLdContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    description: post.summary,
    image: post.image
      ? `${DATA.url}${post.image}`
      : `${DATA.url}/blog/${slug}/opengraph-image`,
    url: `${DATA.url}/blog/${slug}`,
    author: {
      "@type": "Person",
      name: DATA.name,
    },
  }).replace(/</g, "\\u003c");

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdContent,
        }}
      />
      <BlogPostContent
        title={post.title}
        publishedAt={post.publishedAt}
        mdx={post.mdx}
        previousPost={previousSimple}
        nextPost={nextSimple}
      />
    </section>
  );
}
