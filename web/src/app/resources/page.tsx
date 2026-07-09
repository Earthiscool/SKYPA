import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { resources } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { loadResources } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "AI literacy guides, checklists, worksheets, and briefs for students, parents, educators, schools, and sponsors.",
  path: "/resources",
});

export default async function ResourcesPage() {
  const resourceList = (await loadResources()) || resources;

  return (
    <>
      <section className="bg-[#f4fbfa]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Resources</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
            Practical AI literacy materials for every audience.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#445f6b]">
            This library can be fully managed in Sanity as SKYPA publishes guides, worksheets,
            activities, sponsorship briefs, and textbook updates.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {resourceList.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group flex min-h-[260px] flex-col rounded-md border border-[#153b4f]/10 bg-white p-6 shadow-sm shadow-[#153b4f]/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153b4f]/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#fff4cf] text-[#a26a00]">
                <FileText aria-hidden="true" size={22} />
              </span>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-md bg-[#e5f6f3] px-3 py-1.5 text-xs font-black text-[#0f6f73]">
                  {resource.type}
                </span>
                <span className="rounded-md bg-[#fff2ee] px-3 py-1.5 text-xs font-black text-[#a34731]">
                  {resource.minutes}
                </span>
              </div>
              <h2 className="mt-4 text-xl font-black leading-7 text-[#153b4f]">{resource.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#57717d]">{resource.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f8a8f] group-hover:text-[#153b4f]">
                Open resource
                <ArrowRight aria-hidden="true" size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
