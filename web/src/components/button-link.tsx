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
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-button)] px-5 py-3 text-sm font-black transition duration-200 active:translate-y-px",
        variant === "primary" &&
          "bg-[var(--color-coral)] text-white hover:bg-[var(--color-coral-deep)]",
        variant === "secondary" &&
          "border border-[var(--color-line)] bg-white text-[var(--color-ink)] hover:border-[var(--color-teal)] hover:bg-[var(--color-surface-tint)]",
        variant === "light" &&
          "bg-white text-[var(--color-ink)] hover:bg-[var(--color-surface-tint)]",
        className,
      )}
    >
      {label}
      <ArrowRight aria-hidden="true" size={16} strokeWidth={2.4} />
    </Link>
  );
}
