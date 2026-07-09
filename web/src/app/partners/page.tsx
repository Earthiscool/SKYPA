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
      <section className="bg-[#f4fbfa]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">Partners</p>
            <h1 className="mt-4 text-5xl font-black leading-tight text-[#153b4f] sm:text-6xl">
              Schools and companies can open the door to AI literacy.
            </h1>
            <p className="mt-5 text-lg leading-8 text-[#445f6b]">
              SKYPA partners with schools, companies, nonprofits, libraries, and community groups
              to deliver programs, distribute textbooks, and support responsible AI readiness.
            </p>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-md border border-[#153b4f]/10 bg-white shadow-2xl shadow-[#153b4f]/10">
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
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
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
              <div key={item.title} className="rounded-md border border-[#153b4f]/10 p-6">
                <item.icon aria-hidden="true" className="text-[#f26d4f]" size={28} />
                <h2 className="mt-4 text-xl font-black text-[#153b4f]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#57717d]">{item.body}</p>
              </div>
            ))}
          </div>
          <LeadForm formType="school" title="Start a partnership inquiry" />
        </div>
      </section>
      <section className="section-pad bg-[#f8fbf7]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">
              Partnership menu
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b4f]">
              Choose the kind of access you want to create.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#57717d]">
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
              <article key={item.title} className="rounded-md border border-[#153b4f]/10 bg-white p-6">
                <item.icon aria-hidden="true" className="text-[#f26d4f]" size={28} />
                <h3 className="mt-5 text-xl font-black text-[#153b4f]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#57717d]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">
              What happens next
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#153b4f]">
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
              <li key={title} className="grid grid-cols-[auto_1fr] gap-4 rounded-md border border-[#153b4f]/10 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-[#153b4f] text-sm font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black text-[#153b4f]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#57717d]">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
