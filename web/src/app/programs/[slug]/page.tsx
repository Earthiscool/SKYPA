import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { PageSections } from "@/components/page-sections";
import { getProgram, programs } from "@/content/site";
import { getProgramEntry } from "@/lib/cms";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { loadProgram } from "@/sanity/loaders";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const baseProgram = (await loadProgram(slug)) || getProgram(slug);
  const cmsProgram = await getProgramEntry(slug);
  const program = baseProgram && cmsProgram?.status === "published" ? { ...baseProgram, ...cmsProgram } : baseProgram;

  if (!program) return {};

  return createMetadata({
    title: program.title,
    description: program.description,
    path: `/programs/${program.slug}`,
    image: program.image,
  });
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const baseProgram = (await loadProgram(slug)) || getProgram(slug);
  const cmsProgram = await getProgramEntry(slug);
  const program = baseProgram && cmsProgram?.status === "published" ? { ...baseProgram, ...cmsProgram } : baseProgram;

  if (!program) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", href: "/" },
          { name: "Programs", href: "/programs" },
          { name: program.title, href: `/programs/${program.slug}` },
        ])}
      />
      <PageHero page={program} />
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <aside className="rounded-md border border-[#153b4f]/10 bg-[#f8fbf7] p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0f8a8f]">
              Program snapshot
            </p>
            <dl className="mt-5 grid gap-5">
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#57717d]">
                  Audience
                </dt>
                <dd className="mt-1 text-base font-black text-[#153b4f]">{program.audience}</dd>
              </div>
              <div>
                <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#57717d]">
                  Length
                </dt>
                <dd className="mt-1 text-base font-black text-[#153b4f]">{program.length}</dd>
              </div>
            </dl>
          </aside>

          <div>
            <h2 className="text-3xl font-black leading-tight text-[#153b4f]">Learning outcomes</h2>
            <div className="mt-6 grid gap-3">
              {program.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="grid grid-cols-[auto_1fr] gap-3 rounded-md border border-[#153b4f]/10 p-4"
                >
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 text-[#0f8a8f]" size={20} />
                  <p className="text-sm font-bold leading-6 text-[#445f6b]">{outcome}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-10 text-3xl font-black leading-tight text-[#153b4f]">Modules</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {program.modules.map((module) => (
                <span
                  key={module}
                  className="rounded-md bg-[#e5f6f3] px-3 py-2 text-sm font-black text-[#0f6f73]"
                >
                  {module}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PageSections sections={program.sections} />
    </>
  );
}
