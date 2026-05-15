# eostrip.com

큐슈(九州) 여행 전문 — EOS TRIP 공식 웹사이트.

Next.js 14 (App Router) + TypeScript + Tailwind CSS 로 빌드된 정적 사이트입니다.
프라이빗 투어, 골프백 투어, 갤러리, 회사 소개, 여행 문의 페이지를 제공합니다.

## 개발 시작

```bash
npm install
npm run dev
# http://localhost:3000
```

## 빌드 & 배포

```bash
npm run build
npm run start
```

## 환경 변수

`.env.local` 파일을 만들고 아래 키를 채워주세요 (EmailJS 메일 발송용).

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

EmailJS 대시보드 → Allowed Origins 에 배포 도메인을 등록해야 합니다.

## 콘텐츠 편집

페이지 본문은 `src/data/` 의 TypeScript 데이터 파일을 수정하면 갱신됩니다.

- `src/data/site.ts` — 회사 정보, SNS, 메뉴
- `src/data/tours.ts` — 프라이빗 투어 9개
- `src/data/golf.ts` — 골프 투어 7개
- `src/data/gallery.ts` — 갤러리 23개
- `src/data/info.ts` — 회사 소개 페이지

## 디렉토리 구조

```
src/
├─ app/              # App Router 라우트
├─ components/       # 재사용 컴포넌트 (layout/sections/cards/forms/ui)
└─ data/             # 콘텐츠 데이터
public/
├─ images/           # 이미지 자산 (브랜드/투어/갤러리)
└─ favicon.ico
```

## 알려진 콘텐츠 부채

- 이미지 `alt` 텍스트는 데이터 파일에 한국어로 작성되어야 합니다 (접근성 + SEO).
