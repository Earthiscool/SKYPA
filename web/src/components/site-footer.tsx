import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { footerColumns, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-deep)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.25fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="SKYPA Foundation home">
            <span className="grid h-14 w-14 place-items-center rounded-[var(--radius-button)] border border-white/20 bg-white">
              <Image
                src="/images/skypa-logo.png"
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </span>
            <span>
              <span className="block text-xl font-black tracking-[-0.01em]">{siteConfig.name}</span>
              <span className="block text-sm font-semibold text-white/70">{siteConfig.tagline}</span>
            </span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/72">{siteConfig.description}</p>
          <div className="mt-6 grid gap-3 text-sm text-white/72">
            <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" size={16} />
              {siteConfig.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin aria-hidden="true" size={16} />
              Serving schools and communities through local partnerships
            </span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-sm font-black text-[var(--color-gold)]">
                {column.title}
              </h2>
              <ul className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm font-semibold text-white/72 hover:text-white" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-5 text-xs font-semibold text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} SKYPA Foundation. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
