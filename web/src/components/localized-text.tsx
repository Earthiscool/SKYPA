"use client";

import { useLanguage } from "@/components/language-provider";
import { translatePhrase } from "@/lib/i18n";

type LocalizedTextProps = {
  en: string;
  hi?: string;
};

export function LocalizedText({ en, hi }: LocalizedTextProps) {
  const { locale } = useLanguage();

  return <>{locale === "hi" ? hi || translatePhrase(en, "hi") : en}</>;
}
