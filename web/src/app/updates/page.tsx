import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UpdatesSignup } from "@/components/updates-signup";
import { updates } from "@/content/site";
import { getPublishedPosts } from "@/lib/cms";
import { createMetadata } from "@/lib/seo";
import { loadUpdates } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Updates",
  description:
    "Read SKYPA Foundation updates, announcements, events, AI textbook milestones, and program notes.",
  path: "/updates",
});

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default async function UpdatesPage() {
  const updateList = (await getPublishedPosts()) || (await loadUpdates()) || updates;

  return (
    <>
      <section className="bg-[#f4fbfa]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Updates</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
              New posts, events, and textbook milestones.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#445f6b]">
              Follow SKYPA as the foundation grows school partnerships, distributes AI literacy
              resources, recruits volunteers, and shares program progress.
            </p>
          </div>
          <UpdatesSignup />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {updateList.map((update) => (
            <Link
              href={`/updates/${update.slug}`}
              key={update.slug}
              className="group overflow-hidden rounded-md border border-[#153b4f]/10 bg-white shadow-sm shadow-[#153b4f]/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153b4f]/10"
            >
              <div className="relative aspect-[4/3] bg-[#e5f6f3]">
                <Image
                  src={update.image || "/images/skypa-hero-classroom.png"}
                  alt={update.imageAlt || update.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#e5f6f3] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0f6f73]">
                    {update.category}
                  </span>
                  <span className="text-xs font-bold text-[#57717d]">
                    {formatDate(update.publishedAt)}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-black leading-8 text-[#153b4f]">{update.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{update.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f8a8f] group-hover:text-[#153b4f]">
                  Read update
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
