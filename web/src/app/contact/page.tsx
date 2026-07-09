import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact SKYPA Foundation about school partnerships, AI literacy workshops, textbook sponsorship, volunteering, or general questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-[var(--color-surface-tint)]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Contact</p>
            <h1 className="balance mt-4 text-4xl font-black leading-tight tracking-[-0.025em] text-[var(--color-ink)] sm:text-5xl">
              Contact SKYPA.
            </h1>
            <p className="pretty mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
              Use this form for school partnerships, sponsorship interest, volunteer roles, textbook
              distribution, or general questions. Payment processing is intentionally not enabled yet;
              donation and sponsorship interest is collected through the form.
            </p>
            <div className="soft-card mt-8 grid gap-4 p-5">
              <div>
                <h2 className="text-base font-black text-[var(--color-ink)]">Best details to include</h2>
                <p className="pretty mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  School or organization name, grade levels, location, timeline, budget or sponsor
                  interest, and what kind of AI literacy support you need.
                </p>
              </div>
            </div>
          </div>
          <LeadForm formType="contact" title="Send SKYPA a message" />
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="section-shell">
          <div className="max-w-3xl">
            <h2 className="balance text-4xl font-black leading-tight tracking-[-0.02em] text-[var(--color-ink)]">
              Pick the message that matches your goal.
            </h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "School inquiry",
                body: "Mention grade levels, number of students, timing, location, and whether you want a workshop, assembly, pilot, or textbook distribution.",
              },
              {
                title: "Sponsor inquiry",
                body: "Mention whether you are interested in textbooks, school pilots, workshop materials, volunteer programs, or general operating support.",
              },
              {
                title: "Volunteer inquiry",
                body: "Mention your skills, availability, location, languages, and whether you prefer student-facing support or behind-the-scenes work.",
              },
              {
                title: "General question",
                body: "Ask what you need to know. SKYPA can route the conversation to programs, resources, partnerships, or updates.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-white p-6">
                <h3 className="text-xl font-black tracking-[-0.01em] text-[var(--color-ink)]">{item.title}</h3>
                <p className="pretty mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
