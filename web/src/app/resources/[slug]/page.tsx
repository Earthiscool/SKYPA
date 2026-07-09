import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getResource, resources } from "@/content/site";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { loadResource } from "@/sanity/loaders";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const resource = (await loadResource(slug)) || getResource(slug);

  if (!resource) return {};

  return createMetadata({
    title: resource.title,
    description: resource.summary,
    path: `/resources/${resource.slug}`,
  });
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = (await loadResource(slug)) || getResource(slug);

  if (!resource) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: resource.title, href: `/resources/${resource.slug}` },
        ])}
      />
      <article>
        <section className="bg-[#f4fbfa]">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-[#e5f6f3] px-3 py-2 text-sm font-black text-[#0f6f73]">
                {resource.type}
              </span>
              <span className="rounded-md bg-[#fff2ee] px-3 py-2 text-sm font-black text-[#a34731]">
                {resource.audience}
              </span>
            </div>
            <h1 className="mt-5 text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
              {resource.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#445f6b]">{resource.summary}</p>
          </div>
        </section>
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-6 text-lg leading-8 text-[#445f6b]">
              {resource.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
