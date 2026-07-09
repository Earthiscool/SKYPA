import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import type { SitePage } from "@/content/site";

export function PageHero({ page }: { page: SitePage }) {
  return (
    <section className="relative overflow-hidden bg-[#f4fbfa]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:py-24">
        <div className="flex max-w-3xl flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f8a8f]">{page.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black leading-[1.02] text-[#153b4f] sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#445f6b]">{page.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {page.cta ? <ButtonLink {...page.cta} /> : null}
            {page.secondaryCta ? <ButtonLink {...page.secondaryCta} /> : null}
          </div>
        </div>
        {page.image ? (
          <div className="relative min-h-[320px] overflow-hidden rounded-md border border-[#153b4f]/10 bg-white shadow-2xl shadow-[#153b4f]/10">
            <Image
              src={page.image}
              alt={page.imageAlt || ""}
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="grid min-h-[320px] grid-cols-2 gap-3">
            <div className="rounded-md bg-[#153b4f] p-5 text-white">
              <p className="text-sm font-bold text-white/70">Education</p>
              <p className="mt-16 text-4xl font-black">AI literacy</p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-md bg-[#f7c948] p-5 text-[#153b4f]">
                <p className="text-3xl font-black">Access</p>
              </div>
              <div className="rounded-md bg-[#f26d4f] p-5 text-white">
                <p className="text-3xl font-black">Action</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
