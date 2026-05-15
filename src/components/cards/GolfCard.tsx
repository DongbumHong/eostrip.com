import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Users, Wallet } from "lucide-react";

type GolfCardProps = {
  href: string;
  title: string;
  region: string;
  summary: string;
  image: { src: string; alt: string };
  courseCount?: number;
  minParticipants?: number;
  startingPriceLabel?: string;
};

export default function GolfCard({
  href,
  title,
  region,
  summary,
  image,
  courseCount,
  minParticipants,
  startingPriceLabel,
}: GolfCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-paper shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {courseCount !== undefined && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-paper/90 px-2.5 py-1 text-xs font-bold text-navy-700 shadow-card">
            {courseCount}개 코스 선택
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="flex items-center gap-1 text-xs font-medium text-sakura-600">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {region}
        </p>
        <h3 className="mt-1.5 text-lg font-bold tracking-tight text-navy-700 md:text-xl">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {summary}
        </p>

        {(minParticipants !== undefined || startingPriceLabel) && (
          <dl className="mt-4 grid gap-1.5 border-t border-slate-100 pt-4 text-sm">
            {minParticipants !== undefined && (
              <div className="flex items-center justify-between gap-2">
                <dt className="flex items-center gap-1.5 text-slate-500">
                  <Users className="h-3.5 w-3.5" aria-hidden />
                  출발 인원
                </dt>
                <dd className="font-medium text-navy-700">
                  {minParticipants}인부터
                </dd>
              </div>
            )}
            {startingPriceLabel && (
              <div className="flex items-center justify-between gap-2">
                <dt className="flex items-center gap-1.5 text-slate-500">
                  <Wallet className="h-3.5 w-3.5" aria-hidden />
                  시작가
                </dt>
                <dd className="font-bold text-sakura-600">
                  {startingPriceLabel}
                </dd>
              </div>
            )}
          </dl>
        )}

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sakura-600 transition-all group-hover:gap-2">
          상세 일정 보기
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
