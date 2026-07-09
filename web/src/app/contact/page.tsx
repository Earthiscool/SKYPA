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
      <section className="section-pad bg-[#f4fbfa]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Contact</p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
              Tell SKYPA how you want to help or learn.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#445f6b]">
              Use this form for school partnerships, sponsorship interest, volunteer roles, textbook
              distribution, or general questions. Payment processing is intentionally not enabled yet;
              donation and sponsorship interest is collected through the form.
            </p>
            <div className="mt-8 grid gap-4 rounded-md border border-[#153b4f]/10 bg-white p-5">
              <div>
                <h2 className="text-base font-black text-[#153b4f]">Best details to include</h2>
                <p className="mt-2 text-sm leading-6 text-[#57717d]">
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">
              Contact guide
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b4f]">
              Pick the message that matches your goal.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
              <article key={item.title} className="rounded-md border border-[#153b4f]/10 bg-[#f8fbf7] p-6">
                <h3 className="text-xl font-black text-[#153b4f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
