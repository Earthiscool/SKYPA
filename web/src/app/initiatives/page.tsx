import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { initiatives } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Initiatives",
  description:
    "Explore SKYPA Foundation initiatives for AI literacy access, schools, families, students, sponsors, volunteers, and communities.",
  path: "/initiatives",
});

export default function InitiativesPage() {
  return (
    <>
      <section className="bg-[#f4fbfa]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Initiatives</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
            A scalable map for AI literacy outreach.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#445f6b]">
            These initiative pages help SKYPA speak clearly to different audiences, programs, and
            community needs. Sanity can control this collection as the foundation grows.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {initiatives.map((initiative) => (
            <Link
              key={initiative.slug}
              href={`/initiatives/${initiative.slug}`}
              className="group rounded-md border border-[#153b4f]/10 bg-white p-6 shadow-sm shadow-[#153b4f]/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153b4f]/10"
            >
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#0f8a8f]">
                {initiative.focus}
              </p>
              <h2 className="mt-3 text-xl font-black leading-7 text-[#153b4f]">{initiative.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#57717d]">{initiative.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f8a8f] group-hover:text-[#153b4f]">
                Open initiative
                <ArrowRight aria-hidden="true" size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
