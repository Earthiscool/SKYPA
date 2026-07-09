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
      <section className="bg-[#102f3f] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">Get involved</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight sm:text-6xl">
            Help make AI literacy available before students are left behind.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
            SKYPA needs schools, sponsors, volunteers, educators, families, and community partners
            to build an access-first AI literacy movement.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {paths.map((path) => (
              <Link
                href={path.href}
                key={path.title}
                className="rounded-md border border-[#153b4f]/10 p-6 transition hover:border-[#0f8a8f]/40 hover:bg-[#f8fbf7]"
              >
                <path.icon aria-hidden="true" className="text-[#f26d4f]" size={28} />
                <h2 className="mt-5 text-xl font-black text-[#153b4f]">{path.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{path.body}</p>
              </Link>
            ))}
          </div>
          <LeadForm formType="contact" compact title="Find your best role" />
        </div>
      </section>
      <section className="section-pad bg-[#f8fbf7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">
              Ways to help
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b4f]">
              Different people can contribute in different ways.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#57717d]">
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
              <article key={item.title} className="rounded-md border border-[#153b4f]/10 bg-white p-6">
                <h3 className="text-xl font-black text-[#153b4f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Fit check</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b4f]">
            What to include when you reach out.
          </h2>
          <div className="mt-8 divide-y divide-[#153b4f]/10 rounded-md border border-[#153b4f]/10">
            {[
              ["For school partnerships", "Share grade levels, number of students, schedule constraints, location, existing AI policies, and whether you want a workshop, assembly, pilot, or textbook connection."],
              ["For volunteering", "Share your skills, age or role if relevant, availability, location, languages, and whether you prefer student-facing or operations support."],
              ["For sponsorship", "Share whether you want to support textbooks, a school cohort, workshop materials, educator training, or general growth."],
              ["For general questions", "Share the audience you care about and what you are trying to understand. SKYPA can help route you to the right next step."],
            ].map(([question, answer]) => (
              <details key={question} className="group p-6">
                <summary className="cursor-pointer list-none text-base font-black text-[#153b4f] marker:hidden">
                  {question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
