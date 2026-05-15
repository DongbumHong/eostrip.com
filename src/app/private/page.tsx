import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Banner from "@/components/sections/Banner";
import TileGrid from "@/components/sections/TileGrid";
import TourCard from "@/components/cards/TourCard";
import { tours } from "@/data/tours";
import {
  formatStartingPrice,
  getMinParticipants,
  getStartingPrice,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "프라이빗 투어",
  description:
    "큐슈 지역의 1:1 맞춤형 프라이빗 투어. 유후인, 아소, 카라츠, 모지코 등 한국어 가이드와 함께하는 일일 코스.",
};

export default function PrivateListPage() {
  return (
    <>
      <Banner
        variant="page"
        eyebrow="Private Tour"
        title="에오스와 함께하는 프라이빗 투어"
        subtitle="일본 큐슈는 다양한 자연 경관과 역사적 명소, 독특한 문화와 음식을 자랑합니다. 개인적인 경험을 원하는 여행자에게 완벽한 선택입니다."
        image={{
          src: "/main/images/main/private.jpg",
          alt: "프라이빗 투어 메인 이미지",
        }}
      />
      <Container className="py-12 md:py-16">
        <TileGrid cols={3}>
          {tours.map((t) => {
            const sp = getStartingPrice(t);
            return (
              <TourCard
                key={t.slug}
                href={`/private/${t.slug}`}
                title={t.title}
                summary={t.summary}
                image={t.hero}
                tags={[t.region, ...(t.duration ? [t.duration] : [])]}
                minParticipants={getMinParticipants(t)}
                startingPriceLabel={sp ? formatStartingPrice(sp) : "별도 견적"}
              />
            );
          })}
        </TileGrid>
      </Container>
    </>
  );
}
