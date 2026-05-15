import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import TileGrid from "@/components/sections/TileGrid";
import GalleryCard from "@/components/cards/GalleryCard";
import { galleryGolf, galleryHotel } from "@/data/gallery";

export const metadata: Metadata = {
  title: "갤러리",
  description:
    "에오스 트립이 안내하는 큐슈의 명문 골프장과 료칸·호텔 사진 갤러리. 골프장 17곳, 숙박 6곳을 확인하세요.",
};

export default function GalleryListPage() {
  return (
    <Container className="py-12 md:py-16">
      <SectionHeading
        eyebrow="Gallery"
        title="큐슈의 골프장과 료칸"
        lead="에오스 트립이 안내하는 큐슈 지역의 명문 골프장과 료칸·호텔을 사진으로 미리 만나보세요."
      />

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
          골프장
          <span className="ml-2 text-sm font-medium text-slate-500">
            {galleryGolf.length}곳
          </span>
        </h2>
        <TileGrid cols={3} className="mt-5">
          {galleryGolf.map((g) => (
            <GalleryCard key={g.slug} gallery={g} />
          ))}
        </TileGrid>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
          숙박
          <span className="ml-2 text-sm font-medium text-slate-500">
            {galleryHotel.length}곳
          </span>
        </h2>
        <TileGrid cols={3} className="mt-5">
          {galleryHotel.map((g) => (
            <GalleryCard key={g.slug} gallery={g} />
          ))}
        </TileGrid>
      </section>
    </Container>
  );
}
