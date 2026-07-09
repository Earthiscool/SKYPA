import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  HandHeart,
  Lightbulb,
  School,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { JsonLd } from "@/components/json-ld";
import { impactStats, siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = createMetadata({
  title: "AI Literacy for Kids",
  description: siteConfig.description,
  path: "/",
  image: "/images/skypa-hero-classroom.png",
});

type AudiencePath = {
  title: string;
  body: string;
  href: string;
  icon: LucideIcon;
};

const learningModel: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Explain the systems around them",
    body: "Students learn simple mental models for prompts, training data, outputs, bias, privacy, and human judgment.",
    icon: Lightbulb,
  },
  {
    title: "Practice with responsible tools",
    body: "Workshops turn AI into supervised activities: compare answers, cite sources, revise prompts, and reflect.",
    icon: Sparkles,
  },
  {
    title: "Carry the learning home",
    body: "Textbook pages and classroom-ready materials give students something durable to revisit after the session.",
    icon: BookOpen,
  },
];

const audiencePaths: AudiencePath[] = [
  {
    title: "Schools",
    body: "Bring SKYPA into assemblies, classroom workshops, textbook pilots, and teacher support sessions.",
    href: "/schools",
    icon: School,
  },
  {
    title: "Companies",
    body: "Sponsor textbook access, fund a school cohort, or organize skilled volunteers around a clear education goal.",
    href: "/corporate-partners",
    icon: Building2,
  },
  {
    title: "Volunteers",
    body: "Help with facilitation, curriculum feedback, outreach, logistics, and student-friendly learning materials.",
    href: "/volunteer",
    icon: HandHeart,
  },
  {
    title: "Families",
    body: "Understand what students are learning and how to talk about safety, creativity, and AI at home.",
    href: "/parents",
    icon: Users,
  },
];

const pilotSteps = [
  "Discovery call with school leaders",
  "Workshop or textbook pilot design",
  "Student session with guided activities",
  "Reflection, resources, and next steps",
];

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

      <section className="relative min-h-[min(820px,calc(88dvh-76px))] overflow-hidden bg-[var(--color-deep)] text-white">
        <Image
          src="/images/skypa-hero-classroom.png"
          alt="Students learning AI literacy with a teacher in a bright classroom."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.25_0.06_218/0.96)_0%,oklch(0.25_0.06_218/0.82)_42%,oklch(0.25_0.06_218/0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,oklch(0.985_0.006_195))]" />
        <div className="relative mx-auto flex min-h-[min(820px,calc(88dvh-76px))] w-full max-w-7xl flex-col justify-center px-5 py-12 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-kicker text-[var(--color-gold)]">AI literacy for every curious student</p>
            <h1 className="balance mt-5 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.025em] sm:text-6xl">
              SKYPA Foundation
            </h1>
            <p className="pretty mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
              School-ready AI literacy lessons, partnerships, and textbook access for students learning to use technology with judgment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink label="Partner with SKYPA" href="/contact" variant="light" />
              <ButtonLink label="Explore programs" href="/programs" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--background)] py-8">
        <div className="section-shell">
          <dl className="grid overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white md:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.label} className="border-b border-[var(--color-line)] p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                <dt className="text-sm font-bold text-[var(--color-ink-soft)]">{stat.label}</dt>
                <dd className="mt-2 text-4xl font-black tracking-[-0.025em] text-[var(--color-deep)]">
                  {stat.value}
                </dd>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{stat.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section-pad bg-[var(--background)]">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="section-kicker">Why this work matters</p>
            <h2 className="balance mt-4 text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)] sm:text-5xl">
              AI is becoming part of childhood. Students need a trusted way in.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-[var(--color-muted)]">
            <div className="soft-card p-6 sm:p-8">
              <p className="pretty text-xl font-semibold leading-9 text-[var(--color-ink)]">
                SKYPA turns AI from a confusing buzzword into something students can name,
                question, and use responsibly.
              </p>
            </div>
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

      <section className="section-pad bg-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <h2 className="balance text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)] sm:text-5xl">
              A learning model built for classrooms, not hype cycles.
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-[var(--color-muted)]">
              Every SKYPA program is designed to lower the barrier: clear language,
              adult-supported practice, and materials a school can actually use.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-line)] lg:grid-cols-3">
            {learningModel.map((item) => (
              <article key={item.title} className="bg-white p-7 sm:p-8">
                <item.icon aria-hidden="true" className="text-[var(--color-coral)]" size={30} strokeWidth={2.1} />
                <h3 className="mt-8 text-2xl font-black leading-8 tracking-[-0.015em] text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="pretty mt-4 text-base leading-7 text-[var(--color-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-deep)] text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-[var(--radius-card)] sm:min-h-[500px]">
            <Image
              src="/images/skypa-ai-textbook.png"
              alt="AI literacy textbook and classroom workbook materials."
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-[var(--radius-card)] bg-white p-5 text-[var(--color-ink)] shadow-[var(--shadow-soft)] sm:inset-x-8 sm:bottom-8">
              <p className="text-sm font-bold text-[var(--color-muted)]">Current initiative</p>
              <p className="mt-1 text-xl font-black tracking-[-0.015em]">Textbook access students can keep in hand.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="section-kicker text-[var(--color-gold)]">Textbook initiative</p>
            <h2 className="balance mt-4 text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              A textbook students can hold, revisit, and share.
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-white/76">
              SKYPA is developing an AI literacy textbook for kids, designed for distribution
              through schools and local partners. Sponsors can help turn the material into
              printed access.
            </p>
            <div className="mt-8 grid gap-3">
              {["AI basics in student language", "Prompt practice and creative projects", "Safety, bias, privacy, and human judgment"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 aria-hidden="true" className="mt-1 text-[var(--color-gold)]" size={20} />
                  <span className="text-base font-semibold text-white/88">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink label="Explore the textbook" href="/textbook" variant="light" />
              <ButtonLink label="Sponsor copies" href="/donate" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--color-surface-tint)]">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="balance text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)] sm:text-5xl">
                Clear next steps for every kind of partner.
              </h2>
            </div>
            <p className="pretty text-lg leading-8 text-[var(--color-muted)]">
              SKYPA is an outreach engine as much as an education program. The site should help
              a school, sponsor, volunteer, or family immediately understand where they fit.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {audiencePaths.map((item, index) => (
              <Link
                href={item.href}
                key={item.title}
                className={[
                  "group flex min-h-[230px] flex-col rounded-[var(--radius-card)] p-6 transition duration-200 hover:-translate-y-1",
                  index === 0
                    ? "bg-[var(--color-deep)] text-white lg:col-span-2 lg:row-span-2 lg:min-h-[430px] lg:p-8"
                    : "bg-white text-[var(--color-ink)]",
                ].join(" ")}
              >
                <item.icon
                  aria-hidden="true"
                  className={index === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-coral)]"}
                  size={index === 0 ? 36 : 28}
                  strokeWidth={2.1}
                />
                <h3 className="mt-6 text-2xl font-black tracking-[-0.015em]">{item.title}</h3>
                <p className={["pretty mt-4 flex-1 text-base leading-7", index === 0 ? "text-white/76" : "text-[var(--color-muted)]"].join(" ")}>
                  {item.body}
                </p>
                <span className={["mt-7 inline-flex items-center gap-2 text-sm font-black", index === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-teal)]"].join(" ")}>
                  Learn more
                  <ArrowRight aria-hidden="true" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="section-kicker">School partnership path</p>
            <h2 className="balance mt-4 text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)] sm:text-5xl">
              From first conversation to classroom delivery.
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-[var(--color-muted)]">
              The process is intentionally simple so administrators can move from interest to a
              pilot without guessing what SKYPA needs from them.
            </p>
          </div>
          <ol className="grid gap-4">
            {pilotSteps.map((step, index) => (
              <li key={step} className="soft-card grid grid-cols-[auto_1fr] items-center gap-5 p-5">
                <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-button)] bg-[var(--color-teal-soft)] text-sm font-black text-[var(--color-deep)]">
                  {index + 1}
                </span>
                <span className="text-lg font-black tracking-[-0.01em] text-[var(--color-ink)]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[var(--color-coral)] py-16 text-white">
        <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="balance text-4xl font-black leading-tight tracking-[-0.02em] sm:text-5xl">
              Help more students meet AI with confidence, not confusion.
            </h2>
            <p className="pretty mt-5 text-lg leading-8 text-white/86">
              Start a school partnership, sponsor textbook access, or bring volunteer support to the next SKYPA initiative.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink label="Start a partnership" href="/contact" variant="light" />
            <ButtonLink label="Get involved" href="/get-involved" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}
