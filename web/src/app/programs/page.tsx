import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { IconBadge } from "@/components/icon-badge";
import { programs } from "@/content/site";
import { getPrograms as getCmsPrograms } from "@/lib/cms";
import { createMetadata } from "@/lib/seo";
import { loadPrograms } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Programs",
  description:
    "Explore SKYPA Foundation's AI literacy programs for schools, students, teachers, sponsors, and community partners.",
  path: "/programs",
});

export default async function ProgramsPage() {
  const cmsPrograms = (await getCmsPrograms()).filter((program) => program.status === "published");
  const programList =
    cmsPrograms.map((program) => ({
      ...programs.find((fallback) => fallback.slug === program.slug),
      ...program,
    })) ||
    (await loadPrograms()) ||
    programs;

  return (
    <>
      <section className="bg-[#f4fbfa]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Programs</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
              AI literacy programs schools can actually use.
            </h1>
            <p className="text-lg leading-8 text-[#445f6b]">
              SKYPA programs are designed for flexible school schedules, student curiosity,
              responsible AI use, and practical next steps for families and partners.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink label="Start a school inquiry" href="/contact" />
            <ButtonLink label="View textbook initiative" href="/textbook" variant="secondary" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {programList.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className="group flex min-h-[330px] flex-col rounded-md border border-[#153b4f]/10 bg-white p-6 shadow-sm shadow-[#153b4f]/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153b4f]/10"
            >
              <IconBadge icon="school" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#0f8a8f]">
                {program.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-black leading-8 text-[#153b4f]">{program.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#57717d]">{program.summary}</p>
              <div className="mt-5 grid gap-2 text-xs font-bold text-[#57717d]">
                <span>Audience: {program.audience}</span>
                <span>Format: {program.length}</span>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f8a8f] group-hover:text-[#153b4f]">
                Open program
                <ArrowRight aria-hidden="true" size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
