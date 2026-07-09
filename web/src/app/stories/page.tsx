import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stories } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { loadStories } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Stories",
  description:
    "Read SKYPA Foundation stories about AI literacy, school partnerships, textbook access, and student-centered learning.",
  path: "/stories",
});

export default async function StoriesPage() {
  const storyList = (await loadStories()) || stories;

  return (
    <>
      <section className="bg-[#f4fbfa]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Stories</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
            Field notes from the AI literacy movement.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#445f6b]">
            Stories give schools, sponsors, families, and volunteers a clear sense of what SKYPA is
            building and why it matters.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {storyList.map((story) => (
            <Link
              href={`/stories/${story.slug}`}
              key={story.slug}
              className="group overflow-hidden rounded-md border border-[#153b4f]/10 bg-white shadow-sm shadow-[#153b4f]/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153b4f]/10"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0f8a8f]">
                  {story.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-black leading-8 text-[#153b4f]">{story.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{story.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f8a8f] group-hover:text-[#153b4f]">
                  Read story
                  <ArrowRight aria-hidden="true" size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
