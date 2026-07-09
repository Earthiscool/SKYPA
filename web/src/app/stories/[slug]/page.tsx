import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getStory, stories } from "@/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { loadStory } from "@/sanity/loaders";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = (await loadStory(slug)) || getStory(slug);

  if (!story) return {};

  return createMetadata({
    title: story.title,
    description: story.summary,
    path: `/stories/${story.slug}`,
    image: story.image,
  });
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = (await loadStory(slug)) || getStory(slug);

  if (!story) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Stories", href: "/stories" },
          { name: story.title, href: `/stories/${story.slug}` },
        ])}
      />
      <article>
        <section className="bg-[#f4fbfa]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">
              {story.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
              {story.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#445f6b]">{story.summary}</p>
          </div>
        </section>
        <div className="relative mx-auto -mt-10 aspect-[16/8] max-w-6xl overflow-hidden rounded-md border border-[#153b4f]/10 bg-white shadow-2xl shadow-[#153b4f]/10">
          <Image src={story.image} alt={story.imageAlt} fill sizes="100vw" className="object-cover" priority />
        </div>
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-[#e5f6f3] px-3 py-2 text-sm font-black text-[#0f6f73]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid gap-6 text-lg leading-8 text-[#445f6b]">
              {story.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
