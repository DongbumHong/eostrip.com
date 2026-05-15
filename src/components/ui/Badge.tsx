import { clsx } from "clsx";
import type { ReactNode } from "react";

type BadgeProps = {
  tone?: "sakura" | "navy" | "slate";
  className?: string;
  children: ReactNode;
};

const toneStyles = {
  sakura: "bg-sakura-50 text-sakura-700",
  navy: "bg-navy-50 text-navy-700",
  slate: "bg-slate-100 text-slate-700",
} as const;

export default function Badge({
  tone = "sakura",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
