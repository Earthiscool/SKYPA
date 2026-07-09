import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Cta } from "@/content/site";
import { cx } from "@/lib/utils";

type ButtonLinkProps = Cta & {
  className?: string;
};

export function ButtonLink({
  label,
  href,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "primary" &&
          "bg-[#f26d4f] text-white shadow-sm shadow-[#f26d4f]/25 hover:bg-[#d95c41] focus:ring-[#f26d4f]",
        variant === "secondary" &&
          "border border-[#153b4f]/20 bg-white text-[#153b4f] hover:border-[#153b4f]/40 hover:bg-[#f7fbfa] focus:ring-[#1b9aaa]",
        variant === "light" &&
          "border border-white/30 bg-white text-[#153b4f] hover:bg-[#f7fbfa] focus:ring-white",
        className,
      )}
    >
      {label}
      <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} />
    </Link>
  );
}
