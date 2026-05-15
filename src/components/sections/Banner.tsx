import Image from "next/image";
import { clsx } from "clsx";
import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

type CTA = { label: string; href: string };

type BannerProps = {
  image: { src: string; alt: string };
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  ctas?: CTA[];
  priority?: boolean;
  variant?: "home" | "page";
  /** "cover" 는 잘림 허용 + 채움, "contain" 은 잘림 없이 letterbox */
  imageFit?: "cover" | "contain";
  /** 컨테이너 비율: "default" = 4/3·5/4, "wide" = 16/9·2/1 (3:1 가로 로고용) */
  imageAspect?: "default" | "wide";
  /** contain 사용 시 letterbox 영역 배경 (Tailwind 클래스) */
  imageBg?: string;
};

export default function Banner({
  image,
  eyebrow,
  title,
  subtitle,
  ctas,
  priority = false,
  variant = "page",
  imageFit = "cover",
  imageAspect = "default",
  imageBg,
}: BannerProps) {
  const isHome = variant === "home";
  const aspectClass =
    imageAspect === "wide"
      ? "aspect-[16/9] md:aspect-[2/1]"
      : "aspect-[4/3] md:aspect-[5/4]";

  return (
    <section
      className={clsx(
        "relative overflow-hidden bg-gradient-sakura",
        isHome ? "pt-10 md:pt-16 lg:pt-20" : "pt-6 md:pt-10",
      )}
    >
      <Container className={clsx("pb-12", isHome ? "md:pb-20" : "md:pb-16")}>
        <div
          className={clsx(
            "grid items-center gap-8 md:gap-12",
            isHome ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-2",
          )}
        >
          <div className="order-2 md:order-1">
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-sakura-50 px-3 py-1 text-sm font-medium text-sakura-700">
                <span className="h-1.5 w-1.5 rounded-full bg-sakura-500" aria-hidden />
                {eyebrow}
              </p>
            )}
            <h1
              className={clsx(
                "font-bold tracking-tight text-navy-700",
                isHome
                  ? "text-[clamp(2.25rem,5vw+1rem,4.25rem)] leading-[1.1]"
                  : "text-display",
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                {subtitle}
              </p>
            )}
            {ctas && ctas.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    href={cta.href}
                    variant="primary"
                    size="lg"
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          <div className="order-1 md:order-2">
            <div
              className={clsx(
                "relative overflow-hidden rounded-3xl shadow-card",
                aspectClass,
                imageBg,
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={priority}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={imageFit === "contain" ? "object-contain" : "object-cover"}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
