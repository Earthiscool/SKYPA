import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { headerNav, siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/button-link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/94 backdrop-blur-xl">
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[var(--radius-button)] focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--color-ink)]"
      >
        Skip to content
      </a>
      <div className="mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SKYPA Foundation home">
          <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-button)] border border-[var(--color-line)] bg-white">
            <Image
              src="/images/skypa-logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-black tracking-[-0.01em] text-[var(--color-ink)]">{siteConfig.shortName}</span>
            <span className="block text-xs font-bold tracking-[0.08em] text-[var(--color-muted)]">
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
                  className="focus-ring flex min-h-11 items-center gap-1 rounded-[var(--radius-button)] px-3 text-sm font-bold text-[var(--color-ink)] hover:bg-[var(--color-surface-tint)]"
                >
                  {item.label}
                  <ChevronDown aria-hidden="true" size={15} />
                </Link>
                <div className="invisible absolute left-0 top-full w-[330px] translate-y-2 rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-3 opacity-0 shadow-[var(--shadow-soft)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      href={child.href}
                      key={child.href}
                      className="focus-ring block rounded-[var(--radius-button)] p-3 hover:bg-[var(--color-surface-tint)]"
                    >
                      <span className="block text-sm font-black text-[var(--color-ink)]">{child.label}</span>
                      {child.description ? (
                        <span className="mt-1 block text-sm leading-5 text-[var(--color-muted)]">
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
                className="focus-ring flex min-h-11 items-center rounded-[var(--radius-button)] px-3 text-sm font-bold text-[var(--color-ink)] hover:bg-[var(--color-surface-tint)]"
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
          <summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-line)] text-[var(--color-ink)] marker:hidden">
            <Menu aria-hidden="true" size={22} />
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 top-14 w-[min(92vw,360px)] rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-3 shadow-[var(--shadow-soft)]">
            {headerNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring block rounded-[var(--radius-button)] px-3 py-3 text-sm font-black text-[var(--color-ink)] hover:bg-[var(--color-surface-tint)]"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-2 ml-3 border-l border-[var(--color-line)] pl-3">
                    {item.children.map((child) => (
                      <Link
                        href={child.href}
                        key={child.href}
                        className="focus-ring block rounded-[var(--radius-button)] px-3 py-2 text-sm font-semibold text-[var(--color-muted)] hover:bg-[var(--color-surface-tint)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-2 grid gap-2 border-t border-[var(--color-line)] pt-3">
              <ButtonLink label="Start a partnership" href="/contact" className="w-full" />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
