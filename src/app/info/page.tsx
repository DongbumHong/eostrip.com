import type { Metadata } from "next";
import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  User,
  Youtube,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Banner from "@/components/sections/Banner";
import SectionHeading from "@/components/sections/SectionHeading";
import KakaoChannelCard from "@/components/forms/KakaoChannelCard";
import { site } from "@/data/site";
import { info } from "@/data/info";

export const metadata: Metadata = {
  title: "에오스 트립",
  description:
    "후쿠오카 현지에서 30년, 큐슈 여행 전문 에오스 트립의 회사 소개와 여행 문의 페이지.",
};

const socialIconMap = {
  instagram: Instagram,
  youtube: Youtube,
  kakao: MessageCircle,
} as const;

export default function InfoPage() {
  return (
    <>
      <Banner
        variant="page"
        eyebrow={info.hero.eyebrow}
        title={info.hero.title}
        subtitle={info.hero.subtitle}
        image={{
          src: "/main/images/main/eos.png",
          alt: "에오스 트립 브랜드 이미지",
        }}
        imageFit="contain"
        imageAspect="wide"
        imageBg="bg-paper"
      />

      <Container id="info" className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <section>
            <SectionHeading
              eyebrow="About"
              title="현지 30년의 노하우로 만드는 큐슈 여행"
            />
            <div className="prose-tight mt-6 space-y-4 text-base leading-relaxed text-slate-700 md:text-lg">
              {info.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl border border-slate-100 bg-mist p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-base font-bold text-navy-700">
              <Sparkles className="h-5 w-5 text-sakura-500" aria-hidden />
              에오스 트립의 강점
            </h3>
            <ul className="mt-5 space-y-4">
              {info.features.map((f, i) => (
                <li
                  key={i}
                  className="rounded-2xl bg-paper p-4 shadow-card md:p-5"
                >
                  <p className="text-sm font-bold text-navy-700 md:text-base">
                    {f.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-10 rounded-3xl bg-paper p-6 ring-1 ring-slate-100 md:p-8">
          <p className="text-sm leading-relaxed text-slate-500">
            {info.company.notice}
          </p>
        </div>

        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700 md:text-3xl">
            <MapPin className="h-6 w-6 text-sakura-500" aria-hidden />
            오시는 길
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.6fr_1fr]">
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-card">
              <iframe
                src={info.map.embed}
                title={info.map.title}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="aspect-[4/3] w-full md:aspect-[16/10]"
              />
            </div>
            <div className="space-y-5 rounded-3xl border border-slate-100 bg-mist p-6 md:p-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  주소 (한국어)
                </p>
                <p className="mt-1 font-medium leading-relaxed text-navy-700">
                  〒{site.contact.address.postal}
                  <br />
                  {site.contact.address.linesKO.join(" ")}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  住所 (日本語)
                </p>
                <p className="mt-1 font-medium leading-relaxed text-navy-700">
                  {info.addressJP.postal}
                  <br />
                  {info.addressJP.line1}
                  <br />
                  {info.addressJP.line2}
                </p>
              </div>
              <a
                href={info.map.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sakura-600 hover:underline"
              >
                Google 지도에서 열기
                <MapPin className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </section>
      </Container>

      <section id="contact" className="bg-mist py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="큐슈 여행, 무엇이든 물어보세요"
                lead="채팅·전화 상담 가능. 일정부터 견적까지, 큐슈 현지에서 직접 안내해 드립니다."
              />
              <ul className="mt-8 space-y-4 text-sm md:text-base">
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-sakura-50 text-sakura-500">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      이메일
                    </p>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="font-medium text-navy-700 hover:text-sakura-600"
                    >
                      {site.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-sakura-50 text-sakura-500">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      전화
                    </p>
                    <p className="font-medium text-navy-700">
                      TEL {site.contact.tel}
                      <br />
                      MOBILE {site.contact.mobile}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-sakura-50 text-sakura-500">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      주소
                    </p>
                    <p className="font-medium leading-relaxed text-navy-700">
                      〒{site.contact.address.postal}
                      <br />
                      {site.contact.address.linesKO.join(" ")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-sakura-50 text-sakura-500">
                    <User className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      대표이사
                    </p>
                    <p className="font-medium text-navy-700">
                      {site.contact.ceo}
                    </p>
                  </div>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    소셜 미디어
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {site.social.map((s) => {
                      const Icon = socialIconMap[s.icon];
                      return (
                        <li key={s.name}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.ariaLabel}
                            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-paper text-navy-700 shadow-card transition-all hover:-translate-y-0.5 hover:bg-sakura-500 hover:text-paper hover:shadow-sakura"
                          >
                            <Icon className="h-7 w-7" aria-hidden />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              </ul>
            </div>
            <KakaoChannelCard />
          </div>
        </Container>
      </section>
    </>
  );
}
