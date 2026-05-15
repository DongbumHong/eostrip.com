import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Compass,
  DoorClosed,
  MapPin,
  Sparkles,
  Sunrise,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TermsBlock from "@/components/sections/TermsBlock";
import PrivatePricingTable from "@/components/pricing/PrivatePricingTable";
import { tours, getTour } from "@/data/tours";
import { privateTerms } from "@/data/terms";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const tour = getTour(params.slug);
  if (!tour) return { title: "찾을 수 없는 페이지" };
  return {
    title: tour.title,
    description: tour.seo?.description ?? tour.summary,
    openGraph: {
      title: tour.title,
      description: tour.summary,
      images: [tour.hero.src],
    },
  };
}

export default function PrivateTourDetail({
  params,
}: {
  params: { slug: string };
}) {
  const tour = getTour(params.slug);
  if (!tour) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-sakura pt-8 md:pt-12">
        <Container className="pb-10 md:pb-16">
          <Link
            href="/private"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-sakura-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            프라이빗 투어 전체
          </Link>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
            <div>
              <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-sakura-50 px-3 py-1 text-sm font-medium text-sakura-700">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                {tour.region}
              </p>
              <h1 className="text-display font-bold tracking-tight text-navy-700">
                {tour.title}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
                {tour.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tour.duration && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-navy-700 shadow-card">
                    <Clock className="h-4 w-4 text-sakura-500" aria-hidden />
                    {tour.duration}
                  </span>
                )}
                {tour.startTime && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-navy-700 shadow-card">
                    <Sunrise className="h-4 w-4 text-sakura-500" aria-hidden />
                    {tour.startTime}
                  </span>
                )}
                {tour.minParticipants !== undefined && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-navy-700 shadow-card">
                    <Users className="h-4 w-4 text-sakura-500" aria-hidden />
                    {tour.minParticipants}인부터 출발
                  </span>
                )}                
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card md:aspect-[5/4]">
              <Image
                src={tour.hero.src}
                alt={tour.hero.alt}
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
        {tour.descriptionParagraphs && tour.descriptionParagraphs.length > 0 && (
          <section className="mb-12">
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700 md:text-3xl">
              <Sparkles className="h-6 w-6 text-sakura-500" aria-hidden />
              여행 소개
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
              {tour.descriptionParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        )}

        {tour.highlights && tour.highlights.length > 0 && (
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700">
              <Compass className="h-6 w-6 text-sakura-500" aria-hidden />
              투어 하이라이트
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {tour.highlights.map((h, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-slate-100 bg-paper p-4 shadow-card"
                >
                  <span className="text-sm font-medium text-navy-700">{h}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {tour.itinerary && tour.itinerary.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight text-navy-700 md:text-3xl">
              일정 안내
            </h2>
            <ol className="relative mt-8 space-y-4 border-l-2 border-sakura-100 pl-6 md:pl-8">
              {tour.itinerary.map((step, i) => (
                <li key={i} className="relative">
                  <span
                    className="absolute -left-[34px] flex h-6 w-6 items-center justify-center rounded-full bg-sakura-500 text-xs font-bold text-paper shadow-sakura md:-left-[38px]"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <p className="rounded-2xl bg-paper px-4 py-3 text-sm font-medium text-ink shadow-card md:text-base">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {tour.pricing && tour.pricing.rows.length > 0 && (
          <PrivatePricingTable pricing={tour.pricing} />
        )}

        <TermsBlock terms={privateTerms} variant="private" />

        <section className="mt-12 rounded-3xl bg-navy-700 p-8 text-paper md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                이 투어가 마음에 드시나요?
              </h2>
              <p className="mt-3 text-paper/80">
                일정·인원·예산에 맞춰 코스를 조정해 드립니다. 부담 없이 문의해 주세요.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/info#contact" variant="primary" size="lg">
                여행 문의하기
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                href="/private"
                variant="outline"
                size="lg"
                className="border-paper/30 !text-paper hover:bg-paper/10"
              >
                다른 코스 보기
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
