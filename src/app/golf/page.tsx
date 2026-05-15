import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Banner from "@/components/sections/Banner";
import TileGrid from "@/components/sections/TileGrid";
import GolfCard from "@/components/cards/GolfCard";
import { golf } from "@/data/golf";
import {
  formatStartingPrice,
  getMinParticipants,
  getStartingPrice,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "골프백 투어",
  description:
    "큐슈의 명문 골프장과 고급 료칸이 결합된 골프백 투어. 후쿠오카, 사가, 나가사키, 우키하 등 다양한 코스를 안내합니다.",
};

export default function GolfListPage() {
  return (
    <>
      <Banner
        variant="page"
        eyebrow="Golf Tour"
        title="에오스와 함께하는 골프 전문 투어"
        subtitle="큐슈는 다양한 골프 코스와 고급 호텔·료칸이 결합된 골프 애호가들의 완벽한 휴양지입니다."
        image={{ src: "/main/images/main/golf.jpg", alt: "골프백 투어 메인 이미지" }}
      />
      <Container className="py-12 md:py-16">
        <TileGrid cols={3}>
          {golf.map((g) => {
            const sp = getStartingPrice(g);
            return (
              <GolfCard
                key={g.slug}
                href={`/golf/${g.slug}`}
                title={g.title}
                region={g.region}
                summary={g.summary}
                image={g.hero}
                courseCount={g.courses.length}
                minParticipants={getMinParticipants(g)}
                startingPriceLabel={sp ? formatStartingPrice(sp) : "별도 견적"}
              />
            );
          })}
        </TileGrid>
      </Container>
    </>
  );
}
