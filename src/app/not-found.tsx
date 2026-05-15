import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-20 text-center md:py-32">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-sakura-500">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-700 md:text-5xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 text-base text-slate-600 md:text-lg">
        주소를 다시 확인해 주시거나, 아래 버튼으로 이동해 주세요.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary" size="lg">
          홈으로 가기
        </Button>
        <Button href="/info#contact" variant="outline" size="lg">
          문의하기
        </Button>
      </div>
    </Container>
  );
}
