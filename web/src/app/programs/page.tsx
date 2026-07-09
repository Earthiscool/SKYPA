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
      <section className="bg-[var(--color-surface-tint)]">
        <div className="section-shell py-16 lg:py-24">
          <p className="section-kicker">Programs</p>
          <div className="mt-4 max-w-4xl">
            <h1 className="balance text-4xl font-black leading-tight tracking-[-0.025em] text-[var(--color-ink)] sm:text-5xl">
              AI literacy schools can use.
            </h1>
            <p className="pretty mt-5 max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)]">
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
        <div className="section-shell grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programList.map((program, index) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className={[
                "group flex min-h-[310px] flex-col rounded-[var(--radius-card)] p-6 transition duration-200 hover:-translate-y-1",
                index === 0
                  ? "bg-[var(--color-deep)] text-white md:col-span-2"
                  : "soft-card text-[var(--color-ink)]",
              ].join(" ")}
            >
              <IconBadge icon="school" />
              <p className={["mt-5 text-sm font-bold", index === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-teal)]"].join(" ")}>
                {program.eyebrow}
              </p>
              <h2 className="balance mt-3 text-2xl font-black leading-8 tracking-[-0.015em]">{program.title}</h2>
              <p className={["pretty mt-3 flex-1 text-sm leading-6", index === 0 ? "text-white/76" : "text-[var(--color-muted)]"].join(" ")}>
                {program.summary}
              </p>
              <div className={["mt-5 grid gap-2 text-xs font-bold", index === 0 ? "text-white/68" : "text-[var(--color-muted)]"].join(" ")}>
                <span>Audience: {program.audience}</span>
                <span>Format: {program.length}</span>
              </div>
              <span className={["mt-5 inline-flex items-center gap-2 text-sm font-black", index === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-teal)] group-hover:text-[var(--color-ink)]"].join(" ")}>
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
