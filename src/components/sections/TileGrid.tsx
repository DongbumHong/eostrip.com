import { clsx } from "clsx";
import type { ReactNode } from "react";

type TileGridProps = {
  cols?: 2 | 3 | 4;
  className?: string;
  children: ReactNode;
};

const colsClass = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
} as const;

export default function TileGrid({
  cols = 3,
  className,
  children,
}: TileGridProps) {
  return (
    <div className={clsx("grid gap-5 md:gap-6", colsClass[cols], className)}>
      {children}
    </div>
  );
}
