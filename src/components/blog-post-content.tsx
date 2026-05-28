"use client";

import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import { mdxComponents } from "@/mdx-components";

interface SimplePost {
  title: string;
  slug: string;
}

export default function BlogPostContent({
  title,
  publishedAt,
  mdx,
  previousPost,
  nextPost,
}: {
  title: string;
  publishedAt: string;
  mdx: string;
  previousPost: SimplePost | null;
  nextPost: SimplePost | null;
}) {
  const { lang, t } = useLanguage();

  const formatDateLocale = (dateStr: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(dateStr).toLocaleDateString(
        lang === "fr" ? "fr-FR" : "en-US",
        options
      );
    } catch {
      return dateStr;
    }
  };

  return (
    <>
      <div className="flex justify-start gap-4 items-center">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 mb-6 group"
          aria-label={lang === "fr" ? "Retour au Blog" : "Back to Blog"}
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          {lang === "fr" ? "Retour au Blog" : "Back to Blog"}
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="title font-semibold text-3xl md:text-4xl tracking-tighter leading-tight">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {formatDateLocale(publishedAt)}
        </p>
      </div>
      <div className="my-6 flex w-full items-center">
        <div
          className="flex-1 h-px bg-border"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        />
      </div>
      <article className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        <MDXContent code={mdx} components={mdxComponents} />
      </article>

      <nav className="mt-12 pt-8 max-w-2xl">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <ChevronLeft className="size-3" />
                {t("previous")}
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {previousPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-right"
            >
              <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">
                {t("next")}
                <ChevronRight className="size-3" />
              </span>
              <span className="text-sm font-medium group-hover:text-foreground transition-colors whitespace-normal wrap-break-word">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div className="hidden sm:block flex-1" />
          )}
        </div>
      </nav>
    </>
  );
}
