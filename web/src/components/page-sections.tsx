import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { IconBadge } from "@/components/icon-badge";
import type { PageSection } from "@/content/site";

export function PageSections({ sections }: { sections: PageSection[] }) {
  return (
    <div className="bg-white">
      {sections.map((section, index) => {
        if (section.type === "text") {
          return (
            <section className="section-pad" key={`${section.type}-${index}`}>
              <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
                {section.eyebrow ? <Eyebrow>{section.eyebrow}</Eyebrow> : null}
                <h2 className="text-3xl font-black leading-tight text-[#153b4f] sm:text-4xl">
                  {section.title}
                </h2>
                <div className="mt-6 grid gap-5 text-lg leading-8 text-[#445f6b]">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.cta ? <ButtonLink {...section.cta} className="mt-8" /> : null}
              </div>
            </section>
          );
        }

        if (section.type === "cards") {
          return (
            <section className="section-pad bg-[#f8fbf7]" key={`${section.type}-${index}`}>
              <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {section.cards.map((card) => (
                    <article
                      key={card.title}
                      className="flex min-h-[230px] flex-col rounded-md border border-[#153b4f]/10 bg-white p-6 shadow-sm shadow-[#153b4f]/5"
                    >
                      <IconBadge icon={card.icon} />
                      {card.eyebrow ? (
                        <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-[#0f8a8f]">
                          {card.eyebrow}
                        </p>
                      ) : null}
                      <h3 className="mt-4 text-xl font-black leading-7 text-[#153b4f]">{card.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-[#57717d]">{card.body}</p>
                      {card.href ? (
                        <Link
                          href={card.href}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f8a8f] hover:text-[#153b4f]"
                        >
                          Learn more
                          <ArrowRight aria-hidden="true" size={15} />
                        </Link>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        if (section.type === "steps") {
          return (
            <section className="section-pad" key={`${section.type}-${index}`}>
              <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
                <SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />
                <ol className="mt-10 grid gap-4 md:grid-cols-2">
                  {section.steps.map((step, stepIndex) => (
                    <li
                      key={step.title}
                      className="grid grid-cols-[auto_1fr] gap-5 rounded-md border border-[#153b4f]/10 bg-white p-6"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-md bg-[#153b4f] text-sm font-black text-white">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-lg font-black text-[#153b4f]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#57717d]">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          );
        }

        if (section.type === "image") {
          return (
            <section className="section-pad bg-[#102f3f] text-white" key={`${section.type}-${index}`}>
              <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div className="relative min-h-[360px] overflow-hidden rounded-md">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  {section.eyebrow ? (
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f7c948]">
                      {section.eyebrow}
                    </p>
                  ) : null}
                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{section.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-white/75">{section.body}</p>
                  {section.cta ? <ButtonLink {...section.cta} variant="light" className="mt-8 w-fit" /> : null}
                </div>
              </div>
            </section>
          );
        }

        if (section.type === "faq") {
          return (
            <section className="section-pad bg-[#f8fbf7]" key={`${section.type}-${index}`}>
              <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
                <SectionIntro eyebrow={section.eyebrow} title={section.title} />
                <div className="mt-8 divide-y divide-[#153b4f]/10 rounded-md border border-[#153b4f]/10 bg-white">
                  {section.faqs.map((faq) => (
                    <details key={faq.question} className="group p-6">
                      <summary className="cursor-pointer list-none text-base font-black text-[#153b4f] marker:hidden">
                        {faq.question}
                      </summary>
                      <p className="mt-3 text-sm leading-6 text-[#57717d]">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        return (
          <section className="section-pad bg-[#f26d4f] text-white" key={`${section.type}-${index}`}>
            <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
              {section.eyebrow ? (
                <p className="text-sm font-black uppercase tracking-[0.18em] text-white/80">
                  {section.eyebrow}
                </p>
              ) : null}
              <h2 className="text-3xl font-black leading-tight sm:text-5xl">{section.title}</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/82">{section.body}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {section.ctas.map((cta) => (
                  <ButtonLink
                    key={cta.href}
                    {...cta}
                    variant={cta.variant === "secondary" ? "secondary" : "light"}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-black leading-tight text-[#153b4f] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 text-lg leading-8 text-[#57717d]">{body}</p> : null}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">{children}</p>;
}
