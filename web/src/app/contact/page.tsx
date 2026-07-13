import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact SetuAI about an early school, education nonprofit, sponsorship, volunteer, textbook, or general conversation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="section-pad bg-[var(--color-surface)]">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Contact</p>
            <h1 className="balance mt-5 text-[clamp(3rem,7vw,5.5rem)] font-light leading-none tracking-tight text-[var(--color-ink)]">
              Start a conversation.
            </h1>
            <p className="pretty mt-5 text-lg leading-8 text-[var(--color-ink-soft)]">
              SetuAI is in formation. Use this form to share a school or community context, prospective sponsorship interest, future volunteer interest, textbook questions, or a general question. A submission opens a discovery conversation; it does not confirm a workshop, a donation, or a student-facing activity.
            </p>
            <div className="soft-card mt-8 grid gap-4 p-5">
              <div>
                <h2 className="text-base font-medium text-[var(--color-ink)]">Best details to include</h2>
                <p className="pretty mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  School or organization name, grade levels, location, timing, access needs, existing guidance, and what you hope to explore. Do not submit student records, payment details, or sensitive personal information.
                </p>
              </div>
            </div>
          </div>
          <LeadForm formType="contact" title="Send SetuAI a message" />
        </div>
      </section>
      <section className="section-pad bg-[var(--background)]">
        <div className="section-shell">
          <div className="max-w-3xl">
            <h2 className="balance text-4xl font-light leading-tight tracking-tight text-[var(--color-ink)]">
              Pick the message that matches your goal.
            </h2>
          </div>
          <div className="mt-10 grid gap-px bg-[var(--color-line)] md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "School inquiry",
                body: "Mention grade levels, timing, location, existing guidance, and the questions you want a future collaboration to address.",
              },
              {
                title: "Sponsor inquiry",
                body: "Mention the kind of future support you are considering. This site does not process donations or make tax-receipt promises.",
              },
              {
                title: "Volunteer inquiry",
                body: "Mention your skills, availability, location, languages, and whether you are interested in future reviewed roles. No role is confirmed through this form.",
              },
              {
                title: "General question",
                body: "Ask what you need to know. SetuAI can record the question and respond as the organization establishes its public information.",
              },
            ].map((item) => (
              <article key={item.title} className="bg-[var(--background)] p-6">
                <h3 className="text-xl font-normal tracking-tight text-[var(--color-ink)]">{item.title}</h3>
                <p className="pretty mt-3 text-sm leading-6 text-[var(--color-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
