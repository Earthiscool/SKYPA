import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { headerNav, siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#153b4f]/10 bg-white/92 backdrop-blur-xl">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-[#153b4f]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SKYPA Foundation home">
          <span className="grid h-12 w-12 place-items-center rounded-md border border-[#153b4f]/12 bg-white shadow-sm shadow-[#153b4f]/10">
            <Image
              src="/images/skypa-logo.png"
              alt=""
              width={42}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black text-[#153b4f]">{siteConfig.shortName}</span>
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-[#57717d]">
              Foundation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {headerNav.map((item) =>
            item.children ? (
              <div className="group relative" key={item.label}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center gap-1 rounded-md px-3 text-sm font-bold text-[#153b4f] hover:bg-[#edf8f7]"
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" size={15} />
                </Link>
                <div className="invisible absolute left-0 top-full w-[330px] translate-y-2 rounded-md border border-[#153b4f]/10 bg-white p-3 opacity-0 shadow-xl shadow-[#153b4f]/12 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      href={child.href}
                      key={child.href}
                      className="block rounded-md p-3 hover:bg-[#f4fbfa]"
                    >
                      <span className="block text-sm font-black text-[#153b4f]">{child.label}</span>
                      {child.description ? (
                        <span className="mt-1 block text-sm leading-5 text-[#57717d]">
                          {child.description}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center rounded-md px-3 text-sm font-bold text-[#153b4f] hover:bg-[#edf8f7]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink label="Start a partnership" href="/contact" />
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-[#153b4f]/15 text-[#153b4f] marker:hidden">
            <Menu aria-hidden="true" size={22} />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(92vw,360px)] rounded-md border border-[#153b4f]/10 bg-white p-3 shadow-xl shadow-[#153b4f]/15">
            {headerNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-sm font-black text-[#153b4f] hover:bg-[#edf8f7]"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-2 ml-3 border-l border-[#153b4f]/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        href={child.href}
                        key={child.href}
                        className="block rounded-md px-3 py-2 text-sm font-semibold text-[#57717d] hover:bg-[#f4fbfa]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-2 grid gap-2 border-t border-[#153b4f]/10 pt-3">
              <ButtonLink label="Start a partnership" href="/contact" className="w-full" />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
