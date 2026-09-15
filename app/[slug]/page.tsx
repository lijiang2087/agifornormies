import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Picture } from "@/components/picture";
import { SiteHeader } from "@/components/site-header";
import { getTopic, getTopicIndex, topics } from "@/lib/topics";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.label} — AGI for Normies`,
    description: topic.note,
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const index = getTopicIndex(slug);
  const next = topics[index + 1];

  return (
    <main className="bg-paper text-ink">
      <SiteHeader />
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12">
        <Picture
          className="aspect-[4/3] w-full"
          src={topic.image}
          alt={topic.imageAlt ?? ""}
        />
        <p className="mt-8 text-sm text-quiet">
          {String(index + 1).padStart(2, "0")} of {topics.length}
        </p>
        <h1 className="mt-2 font-heading text-5xl sm:text-6xl">{topic.label}</h1>
        <div className="mt-8 space-y-5 text-[17px] leading-8 text-quiet">
          {topic.analogy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {topic.questions.map((item) => (
          <section
            key={item.question}
            className="mt-14 border-t border-ink/8 pt-14"
          >
            <h2 className="font-heading text-3xl sm:text-4xl">
              {item.question}
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-ink">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/" className="text-quiet underline-offset-4 hover:underline">
            The chain
          </Link>
          {next ? (
            <Link href={`/${next.slug}`} className="text-ink underline-offset-4 hover:underline">
              Next: {next.label}
            </Link>
          ) : null}
        </div>
      </article>
    </main>
  );
}
