import Link from "next/link";
import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "soft";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };
type ButtonAsLink = CommonProps & {
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-sakura-500 text-paper hover:bg-sakura-600 shadow-sakura hover:shadow-cardHover",
  ghost: "bg-transparent text-navy-700 hover:bg-navy-50",
  outline:
    "border border-navy-600 bg-transparent text-navy-700 hover:bg-navy-50",
  soft:
    "bg-sakura-600 text-paper hover:bg-sakura-700 shadow-sakura hover:shadow-cardHover",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
  } = props;

  const cls = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    const isExternal = href.startsWith("http") || target === "_blank";
    return (
      <Link
        href={href}
        target={target}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={cls}
      >
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as ButtonAsButton;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
