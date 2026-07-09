import Image from "next/image";
import { BookOpen, Building2, GraduationCap, HandHeart, ShieldCheck, Users } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Partners",
  description:
    "Partner with SKYPA Foundation through schools, companies, nonprofits, libraries, and community organizations.",
  path: "/partners",
  image: "/images/skypa-partnership-workshop.png",
});

export default function PartnersPage() {
  return (
    <>
      <section className="bg-[var(--color-surface-tint)]">
        <div className="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="section-kicker">Partners</p>
            <h1 className="balance mt-4 text-4xl font-black leading-tight tracking-[-0.025em] text-[var(--color-ink)] sm:text-5xl">
              Open the door to AI literacy.
            </h1>
            <p className="pretty mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
              SKYPA partners with schools, companies, nonprofits, libraries, and community groups
              to deliver programs, distribute textbooks, and support responsible AI readiness.
            </p>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white">
            <Image
              src="/images/skypa-partnership-workshop.png"
              alt="Students, teachers, and volunteers collaborating in a school workshop."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {[
              {
                icon: GraduationCap,
                title: "School partners",
                body: "Host workshops, pilots, student showcases, or textbook distribution.",
              },
              {
                icon: Building2,
                title: "Corporate partners",
                body: "Sponsor access, fund local cohorts, and support approved volunteer roles.",
              },
              {
                icon: HandHeart,
                title: "Community partners",
                body: "Bring AI literacy to libraries, youth programs, and family learning nights.",
              },
            ].map((item) => (
              <div key={item.title} className="soft-card p-6">
                <item.icon aria-hidden="true" className="text-[var(--color-coral)]" size={28} />
                <h2 className="mt-4 text-xl font-black tracking-[-0.01em] text-[var(--color-ink)]">{item.title}</h2>
                <p className="pretty mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
              </div>
            ))}
          </div>
          <LeadForm formType="school" title="Start a partnership inquiry" />
        </div>
      </section>
      <section className="section-pad bg-[var(--color-surface-tint)]">
        <div className="section-shell">
          <div className="max-w-3xl">
            <h2 className="balance text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
              Choose the kind of access you want to create.
            </h2>
            <p className="pretty mt-4 text-lg leading-8 text-[var(--color-muted)]">
              The best partnership starts with a specific audience and a realistic first step. SKYPA
              can help shape the format around school calendars, volunteer capacity, sponsorship
              interest, and student needs.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: "Textbook access",
                body: "Fund printed or classroom-ready AI literacy materials that students can keep, revisit, and share.",
              },
              {
                icon: Users,
                title: "Student workshops",
                body: "Bring clear, hands-on AI lessons to classrooms, clubs, assemblies, libraries, or youth groups.",
              },
              {
                icon: ShieldCheck,
                title: "Responsible use",
                body: "Support learning around privacy, misinformation, bias, attribution, academic integrity, and healthy tool boundaries.",
              },
              {
                icon: HandHeart,
                title: "Local coalition",
                body: "Connect schools, companies, parent groups, and community organizations around a shared education goal.",
              },
            ].map((item) => (
              <article key={item.title} className="soft-card p-6">
                <item.icon aria-hidden="true" className="text-[var(--color-coral)]" size={28} />
                <h3 className="mt-5 text-xl font-black tracking-[-0.01em] text-[var(--color-ink)]">{item.title}</h3>
                <p className="pretty mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">What happens next</p>
            <h2 className="balance mt-4 text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
              A partnership should be easy to understand before anyone commits.
            </h2>
          </div>
          <ol className="grid gap-4 md:grid-cols-2">
            {[
              ["Share the audience", "Tell SKYPA who you want to serve, including grade levels, location, and whether the setting is a school, company, nonprofit, library, or community group."],
              ["Name the goal", "Clarify whether you want a workshop, textbook distribution, sponsor pathway, volunteer activity, educator session, or family-facing event."],
              ["Pick a pilot size", "Start with a session or small cohort before expanding into a semester pilot, larger distribution effort, or recurring partnership."],
              ["Review outcomes", "Use feedback from students, educators, families, and partners to shape the next version of the program."],
            ].map(([title, body], index) => (
              <li key={title} className="soft-card grid grid-cols-[auto_1fr] gap-4 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-[var(--radius-button)] bg-[var(--color-deep)] text-sm font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black text-[var(--color-ink)]">{title}</h3>
                  <p className="pretty mt-2 text-sm leading-6 text-[var(--color-muted)]">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
