import { ArrowRight, Compass, Flag, Sparkles } from "lucide-react";
import Container from "@/components/layout/Container";
import Banner from "@/components/sections/Banner";
import SectionHeading from "@/components/sections/SectionHeading";
import TileGrid from "@/components/sections/TileGrid";
import HorizontalCarousel from "@/components/sections/HorizontalCarousel";
import TourCard from "@/components/cards/TourCard";
import GolfCard from "@/components/cards/GolfCard";
import Button from "@/components/ui/Button";
import { tours } from "@/data/tours";
import { golf } from "@/data/golf";
import {
  formatStartingPrice,
  getMinParticipants,
  getStartingPrice,
} from "@/data/pricing";

const highlights = [
  {
    icon: Compass,
    title: "프라이빗 가이드",
    body: "한국어 가이드와 함께하는 1:1 맞춤 일정. 일행 단위로만 진행됩니다.",
  },
  {
    icon: Flag,
    title: "현지 직영",
    body: "후쿠오카에 본사를 둔 현지 운영. 료칸·골프장과 직접 협력합니다.",
  },
  {
    icon: Sparkles,
    title: "테마 여행",
    body: "온천·골프·미식·자연 등 취향에 맞춰 큐슈 곳곳을 조합합니다.",
  },
];

const CARD_WIDTH =
  "flex-none basis-[78%] snap-start sm:basis-[46%] md:basis-[32%] lg:basis-[28%]";

export default function HomePage() {
  return (
    <>
      <Banner
        variant="home"
        eyebrow="큐슈 여행 전문"
        title={
          <>
            큐슈여행의 모든것,
            <br />
            <span className="text-sakura-500">에오스 전문투어</span>
          </>
        }
        subtitle="큐슈지역의 맛과 멋, 그리고 즐거움이 가득한 추억 만들기. 바로 지금 시작됩니다."
        image={{ src: "/main/images/main/main.jpg", alt: "큐슈 여행 메인 이미지" }}
        priority
        ctas={[
          { label: "프라이빗 투어", href: "/private" },
          { label: "골프백 투어", href: "/golf" },
        ]}
      />

      <section className="py-12 md:py-20">
        <Container>
          <TileGrid cols={3}>
            {highlights.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-100 bg-paper p-6 shadow-card md:p-8"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sakura-50 text-sakura-500">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy-700">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              </div>
            ))}
          </TileGrid>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-paper to-sakura-50/40 py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Private Tour"
              title="에오스와 함께하는 프라이빗 투어"
              lead="일본 남서부의 매력적인 자연 경관과 역사적인 명소, 독특한 문화와 음식을 자랑하는 큐슈. 개인적인 경험을 원하는 여행자에게 완벽한 선택입니다."
            />
            <Button href="/private" variant="ghost" size="md" className="flex-none">
              전체보기
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>

          <HorizontalCarousel
            ariaLabel="프라이빗 투어 전체 보기"
            className="mt-10 md:mt-14"
            autoPlay
          >
            {tours.map((tour) => {
              const sp = getStartingPrice(tour);
              return (
                <div key={tour.slug} className={CARD_WIDTH}>
                  <TourCard
                    href={`/private/${tour.slug}`}
                    title={tour.title}
                    summary={tour.summary}
                    image={tour.hero}
                    tags={[tour.region]}
                    minParticipants={getMinParticipants(tour)}
                    startingPriceLabel={sp ? formatStartingPrice(sp) : "별도 견적"}
                  />
                </div>
              );
            })}
          </HorizontalCarousel>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Golf Tour"
              title="에오스와 함께하는 골프 전문 투어"
              lead="큐슈는 다양한 골프 코스와 고급 호텔, 료칸이 결합된 골프 애호가들의 완벽한 휴양지입니다."
            />
            <Button href="/golf" variant="ghost" size="md" className="flex-none">
              전체보기
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>

          <HorizontalCarousel
            ariaLabel="골프백 투어 전체 보기"
            className="mt-10 md:mt-14"
            autoPlay
          >
            {golf.map((g) => {
              const sp = getStartingPrice(g);
              return (
                <div key={g.slug} className={CARD_WIDTH}>
                  <GolfCard
                    href={`/golf/${g.slug}`}
                    title={g.title}
                    region={g.region}
                    summary={g.summary}
                    image={g.hero}
                    courseCount={g.courses.length}
                    minParticipants={getMinParticipants(g)}
                    startingPriceLabel={sp ? formatStartingPrice(sp) : "별도 견적"}
                  />
                </div>
              );
            })}
          </HorizontalCarousel>
        </Container>
      </section>

    </>
  );
}
