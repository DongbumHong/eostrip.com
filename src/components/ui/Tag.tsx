import { clsx } from "clsx";
import type { ReactNode } from "react";

type TagProps = {
  className?: string;
  children: ReactNode;
};

export default function Tag({ className, children }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md border border-slate-200 px-2 py-0.5 text-xs font-medium text-slate-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
