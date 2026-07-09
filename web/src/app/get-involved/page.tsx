import Link from "next/link";
import { Building2, GraduationCap, HandHeart, HeartHandshake } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Get Involved",
  description:
    "Get involved with SKYPA Foundation as a school partner, volunteer, sponsor, corporate partner, or community host.",
  path: "/get-involved",
});

export default function GetInvolvedPage() {
  const paths = [
    {
      title: "School partner",
      body: "Bring AI literacy workshops, teacher support, or textbook pilots to students.",
      href: "/schools",
      icon: GraduationCap,
    },
    {
      title: "Volunteer",
      body: "Support workshops, curriculum review, student activities, and outreach.",
      href: "/volunteer",
      icon: HandHeart,
    },
    {
      title: "Sponsor",
      body: "Fund textbook distribution, school pilots, workshop materials, or growth operations.",
      href: "/donate",
      icon: HeartHandshake,
    },
    {
      title: "Corporate partner",
      body: "Create a company-backed pathway for equitable AI education.",
      href: "/corporate-partners",
      icon: Building2,
    },
  ];

  return (
    <>
      <section className="bg-[var(--color-deep)] text-white">
        <div className="section-shell py-16 lg:py-24">
          <p className="section-kicker text-[var(--color-gold)]">Get involved</p>
          <h1 className="balance mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.025em] sm:text-5xl">
            Help students meet AI with confidence.
          </h1>
          <p className="pretty mt-5 max-w-3xl text-lg leading-8 text-white/76">
            SKYPA needs schools, sponsors, volunteers, educators, families, and community partners
            to build an access-first AI literacy movement.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {paths.map((path) => (
              <Link
                href={path.href}
                key={path.title}
                className="soft-card p-6 transition duration-200 hover:-translate-y-1 hover:bg-[var(--color-surface-tint)]"
              >
                <path.icon aria-hidden="true" className="text-[var(--color-coral)]" size={28} />
                <h2 className="mt-5 text-xl font-black tracking-[-0.01em] text-[var(--color-ink)]">{path.title}</h2>
                <p className="pretty mt-3 text-sm leading-6 text-[var(--color-muted)]">{path.body}</p>
              </Link>
            ))}
          </div>
          <LeadForm formType="contact" compact title="Find your best role" />
        </div>
      </section>
      <section className="section-pad bg-[var(--color-surface-tint)]">
        <div className="section-shell">
          <div className="max-w-3xl">
            <h2 className="balance text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
              Different people can contribute in different ways.
            </h2>
            <p className="pretty mt-4 text-lg leading-8 text-[var(--color-muted)]">
              SKYPA needs both visible and behind-the-scenes support. A useful contribution can be
              a school introduction, a workshop role, curriculum feedback, sponsorship, logistics
              help, design support, or simply helping the right educator hear about the work.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "People who know schools",
                body: "Introduce SKYPA to teachers, principals, counselors, PTAs, enrichment coordinators, or youth-serving organizations.",
              },
              {
                title: "People who like teaching",
                body: "Help students work through activities, ask better questions, and feel comfortable discussing responsible AI use.",
              },
              {
                title: "People who can fund access",
                body: "Sponsor textbook printing, classroom materials, workshop logistics, student cohorts, or community distribution.",
              },
            ].map((item) => (
              <article key={item.title} className="soft-card p-6">
                <h3 className="text-xl font-black tracking-[-0.01em] text-[var(--color-ink)]">{item.title}</h3>
                <p className="pretty mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <p className="section-kicker">Fit check</p>
          <h2 className="balance mt-4 text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
            What to include when you reach out.
          </h2>
          <div className="mt-8 divide-y divide-[var(--color-line)] rounded-[var(--radius-card)] border border-[var(--color-line)]">
            {[
              ["For school partnerships", "Share grade levels, number of students, schedule constraints, location, existing AI policies, and whether you want a workshop, assembly, pilot, or textbook connection."],
              ["For volunteering", "Share your skills, age or role if relevant, availability, location, languages, and whether you prefer student-facing or operations support."],
              ["For sponsorship", "Share whether you want to support textbooks, a school cohort, workshop materials, educator training, or general growth."],
              ["For general questions", "Share the audience you care about and what you are trying to understand. SKYPA can help route you to the right next step."],
            ].map(([question, answer]) => (
              <details key={question} className="group p-6">
                <summary className="cursor-pointer list-none text-base font-black text-[var(--color-ink)] marker:hidden">
                  {question}
                </summary>
                <p className="pretty mt-3 text-sm leading-6 text-[var(--color-muted)]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
