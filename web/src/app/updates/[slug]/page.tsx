import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { UpdatesSignup } from "@/components/updates-signup";
import { getUpdate, updates } from "@/content/site";
import { getPost } from "@/lib/cms";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { loadUpdate } from "@/sanity/loaders";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return updates.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const update = (await getPost(slug)) || (await loadUpdate(slug)) || getUpdate(slug);

  if (!update) return {};

  return createMetadata({
    title: update.title,
    description: update.summary,
    path: `/updates/${update.slug}`,
    image: update.image,
  });
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

export default async function UpdatePage({ params }: Props) {
  const { slug } = await params;
  const update = (await getPost(slug)) || (await loadUpdate(slug)) || getUpdate(slug);

  if (!update) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Updates", href: "/updates" },
          { name: update.title, href: `/updates/${update.slug}` },
        ])}
      />
      <article>
        <section className="bg-[#f4fbfa]">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#e5f6f3] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#0f6f73]">
                {update.category}
              </span>
              <span className="text-sm font-bold text-[#57717d]">
                {formatDate(update.publishedAt)}
              </span>
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
              {update.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#445f6b]">{update.summary}</p>
          </div>
        </section>
        <div className="relative mx-auto -mt-10 aspect-[16/8] max-w-6xl overflow-hidden rounded-md border border-[#153b4f]/10 bg-white shadow-2xl shadow-[#153b4f]/10">
          <Image
            src={update.image || "/images/skypa-hero-classroom.png"}
            alt={update.imageAlt || update.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <section className="section-pad bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
            <div className="grid gap-6 text-lg leading-8 text-[#445f6b]">
              {update.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <aside>
              <UpdatesSignup />
            </aside>
          </div>
        </section>
      </article>
    </>
  );
}
