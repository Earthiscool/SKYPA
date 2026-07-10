"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Chatbot } from "@/components/chatbot";
import { LanguageProvider } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteMotion } from "@/components/site-motion";
import { fallbackSiteContent, type EditableSiteContent } from "@/content/editable-site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [content, setContent] = useState<EditableSiteContent>(fallbackSiteContent);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/site-content")
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (!cancelled && payload?.content) setContent(payload.content);
      })
      .catch(() => null);

    return () => {
      cancelled = true;
    };
  }, []);

  if (isAdmin) {
    return <main id="main">{children}</main>;
  }

  return (
    <LanguageProvider>
      <div className="relative flex min-h-screen flex-col">
        <SiteMotion />
        <SiteHeader content={content} />
        <main id="main" className="relative z-10 flex-1">
          {children}
        </main>
        <div className="relative z-10">
          <SiteFooter content={content} />
        </div>
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}
