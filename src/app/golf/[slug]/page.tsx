import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  DoorClosed,
  Flag,
  Hotel,
  Info,
  MapPin,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import TermsBlock from "@/components/sections/TermsBlock";
import GolfPricingMatrix from "@/components/pricing/GolfPricingMatrix";
import { golf, getGolf } from "@/data/golf";
import { getGallery } from "@/data/gallery";
import { golfTerms } from "@/data/terms";

export function generateStaticParams() {
  return golf.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const g = getGolf(params.slug);
  if (!g) return { title: "찾을 수 없는 페이지" };
  return {
    title: g.title,
    description: g.seo?.description ?? g.summary,
    openGraph: {
      title: g.title,
      description: g.summary,
      images: [g.hero.src],
    },
  };
}

export default function GolfDetail({ params }: { params: { slug: string } }) {
  const g = getGolf(params.slug);
  if (!g) notFound();

  const accommodationNames = Object.fromEntries(
    g.accommodation.map((a) => [a.gallerySlug, a.name]),
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-sakura pt-8 md:pt-12">
        <Container className="pb-10 md:pb-16">
          <Link
            href="/golf"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-sakura-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            골프백 투어 전체
          </Link>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
            <div>
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-sm font-medium text-navy-700">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {g.region}
              </p>
              <h1 className="text-display font-bold tracking-tight text-navy-700">
                {g.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                {g.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge tone="sakura">{g.courses.length}개 코스 선택</Badge>
                <Badge tone="navy">{g.accommodation.length}개 숙소</Badge>
                {g.doorToDoor && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-paper px-3 py-1 text-xs font-medium text-navy-700 shadow-card">
                    <DoorClosed className="h-3.5 w-3.5 text-sakura-500" aria-hidden />
                    Door To Door
                  </span>
                )}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card md:aspect-[5/4]">
              <Image
                src={g.hero.src}
                alt={g.hero.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        {g.descriptionParagraphs && g.descriptionParagraphs.length > 0 && (
          <section className="mb-12">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700 md:text-3xl">
              <Sparkles className="h-6 w-6 text-sakura-500" aria-hidden />
              여행 소개
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
              {g.descriptionParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        )}

        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-12">
            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700">
                <Hotel className="h-6 w-6 text-sakura-500" aria-hidden />
                숙박
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {g.accommodation.map((a) => {
                  const gal = getGallery(a.gallerySlug);
                  return (
                    <li key={a.gallerySlug}>
                      <Link
                        href={`/gallery/${a.gallerySlug}`}
                        className="flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-paper p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
                      >
                        <div className="min-w-0">
                          <span className="block text-sm font-medium text-navy-700">
                            {a.name}
                          </span>
                          {gal?.driveFrom && (
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {gal.driveFrom.city}에서 차로 약{" "}
                              {gal.driveFrom.minutes}분
                            </span>
                          )}
                        </div>
                        <ArrowRight
                          className="h-4 w-4 flex-none text-sakura-600"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700">
                <Flag className="h-6 w-6 text-sakura-500" aria-hidden />
                선택 가능 골프장 옵션
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {g.courses.map((c) => {
                  const gal = getGallery(c.gallerySlug);
                  return (
                    <li key={c.gallerySlug}>
                      <Link
                        href={`/gallery/${c.gallerySlug}`}
                        className="flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-paper p-4 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
                      >
                        <div className="min-w-0">
                          <span className="block text-sm font-medium text-navy-700">
                            {c.name}
                          </span>
                          {gal?.driveFrom && (
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {gal.driveFrom.city}에서 차로 약{" "}
                              {gal.driveFrom.minutes}분
                            </span>
                          )}
                        </div>
                        <ArrowRight
                          className="h-4 w-4 flex-none text-sakura-600"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            {g.highlights && g.highlights.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-navy-700">
                  포함 사항
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                  {g.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sakura-500"
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6">
            {g.notes && g.notes.length > 0 && (
              <section className="rounded-3xl border border-slate-100 bg-mist p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-navy-700">
                  <Info className="h-5 w-5 text-sakura-500" aria-hidden />
                  코스 안내
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
                  {g.notes.map((n, i) => (
                    <li key={i}>· {n}</li>
                  ))}
                </ul>
              </section>
            )}

            <Button
              href="/info#contact"
              variant="primary"
              size="lg"
              className="w-full"
            >
              여행 문의하기
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </aside>
        </div>

        {g.pricingTable && (
          <GolfPricingMatrix
            pricing={g.pricingTable}
            accommodationNames={accommodationNames}
          />
        )}

        <TermsBlock terms={golfTerms} variant="golf" />
      </Container>
    </>
  );
}
