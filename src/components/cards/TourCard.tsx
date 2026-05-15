import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Wallet } from "lucide-react";
import Tag from "@/components/ui/Tag";

type TourCardProps = {
  href: string;
  title: string;
  summary: string;
  image: { src: string; alt: string };
  tags?: string[];
  minParticipants?: number;
  startingPriceLabel?: string;
};

export default function TourCard({
  href,
  title,
  summary,
  image,
  tags,
  minParticipants,
  startingPriceLabel,
}: TourCardProps) {
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
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {tags && tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
        <h3 className="text-lg font-bold tracking-tight text-navy-700 md:text-xl">
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
          자세히 보기
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
