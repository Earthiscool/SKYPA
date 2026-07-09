import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, GraduationCap, HandHeart } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { IconBadge } from "@/components/icon-badge";
import { JsonLd } from "@/components/json-ld";
import { homePillars, impactStats, siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = createMetadata({
  title: "AI Literacy for Kids",
  description: siteConfig.description,
  path: "/",
  image: "/images/skypa-hero-classroom.png",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: siteConfig.name,
          url: absoluteUrl("/"),
          description: siteConfig.description,
        }}
      />

      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#102f3f] text-white">
        <Image
          src="/images/skypa-hero-classroom.png"
          alt="Students learning AI literacy with a teacher in a bright classroom."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,47,63,0.96)_0%,rgba(16,47,63,0.84)_38%,rgba(16,47,63,0.32)_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-md bg-white/12 px-3 py-2 text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">
              AI literacy for every curious student
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
              SKYPA Foundation
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              We help children understand, question, and use AI responsibly through school
              partnerships, hands-on workshops, and a student-friendly AI textbook initiative.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink label="Partner with SKYPA" href="/contact" variant="light" />
              <ButtonLink label="Explore programs" href="/programs" variant="secondary" />
            </div>
          </div>
          <div className="mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="rounded-md border border-white/16 bg-white/12 p-4 backdrop-blur-md">
                <p className="text-3xl font-black text-[#f7c948]">{stat.value}</p>
                <p className="mt-1 text-sm font-black text-white">{stat.label}</p>
                <p className="mt-2 text-xs leading-5 text-white/70">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Why SKYPA</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b4f] sm:text-5xl">
              AI is becoming a basic literacy. Students deserve a clear way in.
            </h2>
          </div>
          <div className="grid content-start gap-5 text-lg leading-8 text-[#445f6b]">
            <p>
              SKYPA Foundation turns AI from a confusing buzzword into something students can
              understand, discuss, and use with judgment. The site is built for outreach:
              school partnerships, sponsor interest, volunteers, textbook updates, and program
              storytelling.
            </p>
            <p>
              The work is practical by design: workshops, educator support, a growing textbook,
              and community partnerships that help AI literacy reach children who might otherwise
              be left behind.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#f8fbf7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">
                Program pillars
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b4f]">
                Built for learning, trust, and action.
              </h2>
            </div>
            <ButtonLink label="View all programs" href="/programs" variant="secondary" />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homePillars.map((pillar) => (
              <Link
                key={pillar.title}
                href={pillar.href || "/programs"}
                className="group flex min-h-[280px] flex-col rounded-md border border-[#153b4f]/10 bg-white p-6 shadow-sm shadow-[#153b4f]/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#153b4f]/10"
              >
                <IconBadge icon={pillar.icon} />
                <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#0f8a8f]">
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-black leading-7 text-[#153b4f]">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#57717d]">{pillar.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f8a8f] group-hover:text-[#153b4f]">
                  Learn more
                  <ArrowRight aria-hidden="true" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#102f3f] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="relative min-h-[420px] overflow-hidden rounded-md">
            <Image
              src="/images/skypa-ai-textbook.png"
              alt="AI literacy textbook and classroom workbook materials."
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">
              Current initiative
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              A textbook students can hold, revisit, and share.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              SKYPA is developing an AI literacy textbook for kids, designed for distribution
              through schools and local partners. Sponsors can help turn the material into
              printed access.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink label="Explore the textbook" href="/textbook" variant="light" />
              <ButtonLink label="Sponsor copies" href="/donate" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "For schools",
                body: "Run workshops, pilots, teacher sessions, or textbook distribution.",
                href: "/schools",
              },
              {
                icon: Building2,
                title: "For companies",
                body: "Sponsor access, support a school cohort, or organize volunteer help.",
                href: "/corporate-partners",
              },
              {
                icon: HandHeart,
                title: "For volunteers",
                body: "Help with facilitation, curriculum, outreach, and operations.",
                href: "/volunteer",
              },
              {
                icon: BookOpen,
                title: "For families",
                body: "Understand what students are learning and how to support them.",
                href: "/parents",
              },
            ].map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className="rounded-md border border-[#153b4f]/10 p-6 transition hover:border-[#0f8a8f]/40 hover:bg-[#f8fbf7]"
              >
                <item.icon aria-hidden="true" className="text-[#f26d4f]" size={28} />
                <h3 className="mt-5 text-xl font-black text-[#153b4f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
