import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Car,
  ExternalLink,
  Flag,
  Hotel,
  MapPin,
  Sparkles,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Lightbox from "@/components/media/Lightbox";
import { gallery, getGallery } from "@/data/gallery";
import type { GolfFacilities, LodgingFacilities } from "@/data/types";

export function generateStaticParams() {
  return gallery.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const g = getGallery(params.slug);
  if (!g) return { title: "찾을 수 없는 페이지" };
  return {
    title: g.title,
    description: g.seo?.description ?? g.summary,
    openGraph: {
      title: g.title,
      description: g.summary,
      images: [g.cover.src],
    },
  };
}

function GolfFacilitiesBlock({ data }: { data: GolfFacilities }) {
  const items: { label: string; value: string }[] = [];
  if (data.holes) items.push({ label: "홀 수", value: `${data.holes}홀` });
  if (data.par) items.push({ label: "파", value: `${data.par}` });
  if (data.yardage)
    items.push({ label: "야디지", value: `${data.yardage} yards` });
  if (data.difficulty)
    items.push({ label: "난이도", value: data.difficulty });
  const features = [
    data.clubhouse && "클럽하우스",
    data.restaurant && "레스토랑",
    data.proShop && "프로샵",
    data.lessons && "골프 레슨",
  ].filter(Boolean) as string[];

  if (items.length === 0 && features.length === 0) return null;

  return (
    <section className="rounded-3xl border border-slate-100 bg-paper p-6 shadow-card md:p-8">
      <h2 className="flex items-center gap-2 text-base font-bold text-navy-700">
        <Flag className="h-5 w-5 text-sakura-500" aria-hidden />
        코스 정보
      </h2>
      {items.length > 0 && (
        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm md:grid-cols-4">
          {items.map((it) => (
            <div key={it.label}>
              <dt className="text-xs text-slate-500">{it.label}</dt>
              <dd className="mt-0.5 font-bold text-navy-700">{it.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {features.length > 0 && (
        <div className="mt-5">
          <p className="text-xs text-slate-500">시설</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {features.map((f) => (
              <li
                key={f}
                className="inline-flex items-center rounded-full bg-mist px-3 py-1 text-xs font-medium text-navy-700"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

function LodgingFacilitiesBlock({ data }: { data: LodgingFacilities }) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-paper p-6 shadow-card md:p-8">
      <h2 className="flex items-center gap-2 text-base font-bold text-navy-700">
        <Hotel className="h-5 w-5 text-sakura-500" aria-hidden />
        숙소 정보
      </h2>
      <dl className="mt-5 space-y-4 text-sm">
        {data.roomTypes && data.roomTypes.length > 0 && (
          <div>
            <dt className="text-xs text-slate-500">객실 타입</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {data.roomTypes.map((rt) => (
                <span
                  key={rt}
                  className="inline-flex items-center rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                >
                  {rt}
                </span>
              ))}
            </dd>
          </div>
        )}
        {data.onsen && (
          <div className="flex items-start gap-2">
            <Waves className="mt-0.5 h-4 w-4 flex-none text-sakura-500" aria-hidden />
            <div>
              <p className="font-bold text-navy-700">온천 이용 가능</p>
              {data.inRoomOnsen?.type && (
                <p className="mt-0.5 text-xs text-slate-600">
                  객실 내 온천: {data.inRoomOnsen.type}
                </p>
              )}
            </div>
          </div>
        )}
        {data.mealsIncluded && data.mealsIncluded.length > 0 && (
          <div className="flex items-start gap-2">
            <UtensilsCrossed
              className="mt-0.5 h-4 w-4 flex-none text-sakura-500"
              aria-hidden
            />
            <div>
              <p className="font-bold text-navy-700">
                {data.mealsIncluded.join(" · ")} 포함
              </p>
            </div>
          </div>
        )}
      </dl>
    </section>
  );
}

export default function GalleryDetail({
  params,
}: {
  params: { slug: string };
}) {
  const g = getGallery(params.slug);
  if (!g) notFound();

  return (
    <Container className="py-10 md:py-14">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-sakura-600"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        갤러리 전체
      </Link>

      <header className="mt-6">
        <Badge tone={g.category === "골프장" ? "navy" : "sakura"}>
          {g.category}
        </Badge>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-700 md:text-4xl">
          {g.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          {g.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {g.driveFrom && (
            <span className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1 text-slate-600">
              <Car className="h-3 w-3 text-sakura-500" aria-hidden />
              {g.driveFrom.city}에서 차로 약 {g.driveFrom.minutes}분
            </span>
          )}
          {g.notes?.map((n, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1 text-slate-600"
            >
              <MapPin className="h-3 w-3 text-sakura-500" aria-hidden />
              {n}
            </span>
          ))}
        </div>

        {g.website && (
          <a
            href={g.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sakura-600 hover:underline"
          >
            공식 웹사이트
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        )}
      </header>

      {g.descriptionParagraphs && g.descriptionParagraphs.length > 0 && (
        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
            <Sparkles className="h-5 w-5 text-sakura-500" aria-hidden />
            소개
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
            {g.descriptionParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {(g.golf || g.lodging) && (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {g.golf && <GolfFacilitiesBlock data={g.golf} />}
          {g.lodging && <LodgingFacilitiesBlock data={g.lodging} />}
        </div>
      )}

      <Lightbox images={g.images} />

      <section className="mt-12 rounded-3xl bg-navy-700 p-8 text-paper md:p-10">
        <div className="grid items-center gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-xl font-bold md:text-2xl">
              이 {g.category === "골프장" ? "골프장" : "숙소"}이 포함된 패키지가
              궁금하시다면
            </h2>
            <p className="mt-2 text-sm text-paper/80 md:text-base">
              에오스 트립에 문의하시면 일정·요금을 안내해 드립니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button href="/info#contact" variant="primary" size="md">
              문의하기
            </Button>
            <Button
              href={g.category === "골프장" ? "/golf" : "/private"}
              variant="outline"
              size="md"
              className="border-paper/30 !text-paper hover:bg-paper/10"
            >
              관련 투어 보기
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
