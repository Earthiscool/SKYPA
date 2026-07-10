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
    "Read SetuAI.org updates, announcements, events, AI textbook milestones, and program notes.",
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
      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)]">
        <div className="section-shell grid gap-8 py-16 lg:grid-cols-[1fr_420px] lg:py-24">
          <div>
            <p className="section-kicker">Updates</p>
            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,5.5rem)] font-light leading-none tracking-tight text-[var(--color-ink)]">
              New posts, events, and textbook milestones.
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg leading-8 text-[var(--color-muted)]">
              Follow SetuAI as the initiative grows school partnerships, distributes AI literacy
              resources, recruits volunteers, and shares program progress.
            </p>
          </div>
          <UpdatesSignup />
        </div>
      </section>

      <section className="section-pad bg-[var(--background)]">
        <div className="section-shell grid gap-px bg-[var(--color-line)] lg:grid-cols-3">
          {updateList.map((update) => (
            <Link
              href={`/updates/${update.slug}`}
              key={update.slug}
              className="group overflow-hidden bg-[var(--background)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div className="relative aspect-[4/3] bg-[var(--color-surface)]">
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
                  <span className="border border-[var(--color-coral)] bg-[var(--color-teal-soft)] px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-coral)]">
                    {update.category}
                  </span>
                  <span className="text-xs font-medium text-[var(--color-muted)]">
                    {formatDate(update.publishedAt)}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-normal leading-8 tracking-tight text-[var(--color-ink)]">{update.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{update.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-coral)] group-hover:text-[var(--color-ink)]">
                  Read Update
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
