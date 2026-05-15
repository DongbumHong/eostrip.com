import { clsx } from "clsx";
import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
};

export default function Container({
  as: Tag = "div",
  id,
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={clsx("mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8", className)}
    >
      {children}
    </Tag>
  );
}
