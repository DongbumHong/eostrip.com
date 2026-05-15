import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type SpotlightProps = {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  href?: string;
  hrefLabel?: string;
  reverse?: boolean;
  tone?: "default" | "sakura" | "navy";
};

const toneStyles = {
  default: "bg-paper",
  sakura: "bg-sakura-50/50",
  navy: "bg-navy-50/60",
} as const;

export default function Spotlight({
  image,
  eyebrow,
  title,
  body,
  href,
  hrefLabel = "자세히 보기",
  reverse = false,
  tone = "default",
}: SpotlightProps) {
  return (
    <section className={clsx("py-12 md:py-16", toneStyles[tone])}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
        <div
          className={clsx(
            "grid items-center gap-8 md:gap-12 md:grid-cols-2",
            reverse && "md:[&>div:first-child]:order-2",
          )}
        >
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sakura-500">
                {eyebrow}
              </p>
            )}
            <h3 className="text-2xl font-bold tracking-tight text-navy-700 md:text-3xl">
              {title}
            </h3>
            {body && (
              <div className="prose-tight mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {body}
              </div>
            )}
            {href && (
              <Link
                href={href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sakura-600 transition-all hover:gap-2"
              >
                {hrefLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
