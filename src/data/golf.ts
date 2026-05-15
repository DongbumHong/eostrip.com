import type { Golf } from "./types";

export const golf: Golf[] = [
  {
    slug: "fukuoka",
    title: "후쿠오카 시내 골프백 투어",
    region: "후쿠오카현 후쿠오카시",
    summary:
      "도시의 편리함과 자연이 잘 결합된 후쿠오카 시내에서, 골프와 시내 관광을 함께 즐길 수 있는 인기 패키지입니다.",
    descriptionParagraphs: [
      "도시의 편리함과 자연이 잘 결합된 곳으로, 골프를 즐기기에 이상적인 환경을 갖추고 있습니다.",
      "후쿠오카 시내와 그 주변에 위치한 고급 골프장들에서 골프를 즐긴 후, 후쿠오카의 매력적인 명소를 둘러보며 즐거운 여행을 만끽할 수 있습니다.",
    ],
    hero: {
      src: "/main/images/detail/golf/fukuoka.jpg",
      alt: "후쿠오카 시내 골프 코스",
    },
    accommodation: [{ name: "서튼 호텔 하카타시티", gallerySlug: "sutton-hakata" }],
    courses: [
      { name: "니조 컨트리클럽", gallerySlug: "nizo-contry" },
      { name: "치쿠시노 컨트리클럽", gallerySlug: "tikusino-contry" },
      { name: "카호 컨트리클럽", gallerySlug: "gaho-contry" },
      { name: "센트럴 골프클럽", gallerySlug: "central" },
    ],
    doorToDoor: true,
    depositPercent: 50,
    highlights: ["조식·석식 제공", "2일차 골프 라운딩 후 시내 관광"],
    pricingTable: {
      currency: "JPY",
      rows: [
        {
          duration: "2박3일",
          groupSize: 4,
          prices: { monTueWed: 95000, thuSun: 100000, friSat: 108000 },
        },
        {
          duration: "2박3일",
          groupSize: 8,
          prices: { monTueWed: 88000, thuSun: 86000, friSat: 93000 },
        },
      ],
    },
    notes: [
      "호텔은 현지 사정에 따라 동급의 호텔로 바뀔 수도 있습니다.",
      "골프장은 현지 사정에 따라 동급의 다른 골프장으로 바뀔 수도 있습니다.",
    ],
  },
  {
    slug: "kominka",
    title: "큐슈 고급 료칸 골프백 투어",
    region: "후쿠오카현 근교",
    summary:
      "후쿠오카를 중심으로 큐슈 지역의 프리미엄 골프장과 고급 료칸을 순회하는 럭셔리 투어입니다.",
    descriptionParagraphs: [
      "후쿠오카를 중심으로 큐슈 지역의 프리미엄 골프장을 순회하는 투어입니다.",
      "각 골프장은 전문적이고 도전적인 코스를 제공하며, 골프 여행객들이 최상의 골프 경험을 즐길 수 있도록 맞춤형 서비스를 제공합니다.",
      "이 투어는 특별한 골프 여행을 원하는 분들에게 적합하며, 럭셔리한 휴식과 여유로운 라운드를 동시에 즐길 수 있습니다.",
    ],
    hero: {
      src: "/main/images/detail/golf/kominka.jpg",
      alt: "고민카네리 료칸 외관",
    },
    accommodation: [
      { name: "고민카네리", gallerySlug: "kominka-neri" },
      { name: "토라노유", gallerySlug: "toranoyu" },
    ],
    courses: [
      { name: "JR우치노 컨트리클럽", gallerySlug: "jr-utino" },
      { name: "오고리 컨트리클럽", gallerySlug: "ogori" },
      { name: "아소이즈카 골프클럽", gallerySlug: "aso-izuka" },
      { name: "카라츠로얄 골프클럽", gallerySlug: "karatu-royal" },
      { name: "사가 컨트리클럽", gallerySlug: "saga-contry" },
      { name: "니조 컨트리클럽", gallerySlug: "nizo-contry" },
    ],
    doorToDoor: true,
    depositPercent: 50,
    highlights: ["조식·석식 제공", "럭셔리한 휴식과 여유로운 라운드"],
    pricingTable: {
      currency: "JPY",
      byAccommodation: [
        {
          gallerySlug: "kominka-neri",
          rows: [
            {
              duration: "2박3일",
              groupSize: 4,
              prices: { monTueWed: 170000, thuSun: 180000, friSat: 190000 },
            },
            {
              duration: "2박3일",
              groupSize: 8,
              prices: { monTueWed: 150000, thuSun: 160000, friSat: 170000 },
            },
            {
              duration: "3박4일",
              groupSize: 4,
              prices: { monTueWed: 230000, thuSun: 240000, friSat: 250000 },
            },
            {
              duration: "3박4일",
              groupSize: 8,
              prices: { monTueWed: 210000, thuSun: 220000, friSat: 230000 },
            },
          ],
        },
        {
          gallerySlug: "toranoyu",
          rows: [
            {
              duration: "2박3일",
              groupSize: 4,
              prices: { monTueWed: 130000, thuSun: 140000, friSat: 150000 },
            },
            {
              duration: "2박3일",
              groupSize: 8,
              prices: { monTueWed: 110000, thuSun: 120000, friSat: 130000 },
            },
            {
              duration: "3박4일",
              groupSize: 4,
              prices: { monTueWed: 190000, thuSun: 200000, friSat: 210000 },
            },
            {
              duration: "3박4일",
              groupSize: 8,
              prices: { monTueWed: 170000, thuSun: 180000, friSat: 190000 },
            },
          ],
        },
      ],
    },
    notes: [
      "호텔은 현지 사정에 따라 동급의 호텔로 바뀔 수도 있습니다.",
      "골프장은 현지 사정에 따라 동급의 다른 골프장으로 바뀔 수도 있습니다.",
    ],
  },
  {
    slug: "ukiha",
    title: "우키하 하나케시키 골프백 투어",
    region: "후쿠오카현 우키하",
    summary:
      "후쿠오카현 우키하시에 위치한 아름다운 골프 리조트로, 골프와 자연을 동시에 만끽할 수 있는 완벽한 여행지입니다.",
    descriptionParagraphs: [
      "일본 후쿠오카현 우키하시에 위치한 아름다운 골프 리조트로, 골프와 자연을 동시에 만끽할 수 있는 완벽한 여행지입니다.",
      "이곳은 그린과 자연 경관이 조화를 이루며, 골프를 즐기기에 최적의 조건을 제공합니다.",
    ],
    hero: {
      src: "/main/images/detail/golf/ukiha.jpg",
      alt: "우키하 골프장",
    },
    accommodation: [{ name: "우키하 하나케시키", gallerySlug: "ukihana" }],
    courses: [
      { name: "니조 컨트리클럽", gallerySlug: "nizo-contry" },
      { name: "우키하 컨트리클럽", gallerySlug: "ukiha-contry" },
      { name: "아마카세온천 컨트리클럽", gallerySlug: "amakase-contry" },
      { name: "센트럴 골프클럽", gallerySlug: "central" },
    ],
    doorToDoor: true,
    depositPercent: 50,
    highlights: [
      "조식·석식 제공",
      "그린과 자연 경관이 조화를 이루는 최적의 환경",
    ],
    pricingTable: {
      currency: "JPY",
      rows: [
        {
          duration: "2박3일",
          groupSize: 4,
          prices: { monTueWed: 97000, thuSun: 102000, friSat: 107000 },
        },
        {
          duration: "2박3일",
          groupSize: 8,
          prices: { monTueWed: 90000, thuSun: 95000, friSat: 100000 },
        },
        {
          duration: "3박4일",
          groupSize: 4,
          prices: { monTueWed: 125000, thuSun: 137000, friSat: 145000 },
        },
        {
          duration: "3박4일",
          groupSize: 8,
          prices: { monTueWed: 118500, thuSun: 130000, friSat: 138000 },
        },
      ],
    },
    notes: [
      "호텔은 현지 사정에 따라 동급의 호텔로 바뀔 수도 있습니다.",
      "골프장은 현지 사정에 따라 동급의 다른 골프장으로 바뀔 수도 있습니다.",
    ],
  },
  {
    slug: "saga",
    title: "사가 우레시노 골프백 투어",
    region: "사가현 우레시노",
    summary:
      "사가현 우레시노 지역에 위치한 골프 리조트로, 골프와 휴식을 동시에 즐길 수 있는 최고의 여행지입니다.",
    descriptionParagraphs: [
      "일본 사가현 우레시노 지역에 위치한 골프 리조트로, 골프와 휴식을 동시에 즐길 수 있는 최고의 여행지입니다.",
      "우레시노는 풍부한 자연 경관과 전통적인 일본 문화를 자랑하는 지역으로, 골프와 함께 다양한 체험을 원하는 여행객들에게 이상적인 장소입니다.",
    ],
    hero: {
      src: "/main/images/detail/golf/saga.png",
      alt: "사가 우레시노 골프 코스",
    },
    accommodation: [{ name: "리버파크 호텔", gallerySlug: "river-park" }],
    courses: [
      { name: "타케오우레시노 컨트리클럽", gallerySlug: "takeoyureshino-contry" },
      { name: "텐잔 컨트리클럽", gallerySlug: "tenzan-contry" },
      { name: "위드인 골프클럽", gallerySlug: "within" },
    ],
    doorToDoor: true,
    depositPercent: 50,
    highlights: ["조식·석식 제공", "풍부한 자연 경관과 전통적인 일본 문화"],
    pricingTable: {
      currency: "JPY",
      rows: [
        {
          duration: "2박3일",
          groupSize: 4,
          prices: { monTueWed: 84000, thuSun: 92000, friSat: 99000 },
        },
        {
          duration: "2박3일",
          groupSize: 8,
          prices: { monTueWed: 75000, thuSun: 82000, friSat: 89000 },
        },
        {
          duration: "3박4일",
          groupSize: 4,
          prices: { monTueWed: 102000, thuSun: 116000, friSat: 124600 },
        },
        {
          duration: "3박4일",
          groupSize: 8,
          prices: { monTueWed: 92500, thuSun: 106200, friSat: 114600 },
        },
      ],
    },
    notes: [
      "호텔은 현지 사정에 따라 동급의 호텔로 바뀔 수도 있습니다.",
      "골프장은 현지 사정에 따라 동급의 다른 골프장으로 바뀔 수도 있습니다.",
    ],
  },
  {
    slug: "nagasaki",
    title: "나가사키 유미하리노오카 골프백 투어",
    region: "나가사키현 나가사키",
    summary:
      "나가사키현의 환상적인 골프 리조트로, 멋진 자연 경관과 함께 골프를 즐길 수 있는 독특한 경험을 제공합니다.",
    descriptionParagraphs: [
      "일본 나가사키현에 위치한 환상적인 골프 리조트로, 멋진 자연 경관과 함께 골프를 즐길 수 있는 독특한 경험을 제공합니다.",
      "이곳은 아름다운 해안선과 산들로 둘러싸인 탁월한 위치에 있어, 골프와 휴식을 동시에 즐길 수 있는 완벽한 여행지입니다.",
    ],
    hero: {
      src: "/main/images/detail/golf/nagasaki.jpg",
      alt: "나가사키 유미하리노오카 골프장",
    },
    accommodation: [{ name: "유미하리노오카 호텔", gallerySlug: "yumihari" }],
    courses: [
      { name: "하우스텐보스 컨트리클럽", gallerySlug: "huistenbosch-contry" },
      { name: "사세보 국제 컨트리클럽", gallerySlug: "sasebo-contry" },
      { name: "나가사키파크 컨트리클럽", gallerySlug: "nagasaki-park" },
      { name: "텐잔 컨트리클럽", gallerySlug: "tenzan-contry" },
      { name: "타케오우레시노 컨트리클럽", gallerySlug: "takeoyureshino-contry" },
    ],
    doorToDoor: true,
    depositPercent: 50,
    highlights: ["조식·석식 제공", "아름다운 해안선과 산들로 둘러싸인 위치"],
    pricingTable: {
      currency: "JPY",
      rows: [
        {
          duration: "2박3일",
          groupSize: 4,
          prices: { monTueWed: 109200, thuSun: 115200, friSat: 125200 },
        },
        {
          duration: "2박3일",
          groupSize: 8,
          prices: { monTueWed: 87450, thuSun: 90450, friSat: 103450 },
        },
        {
          duration: "3박4일",
          groupSize: 4,
          prices: { monTueWed: 148800, thuSun: 156800, friSat: 162800 },
        },
        {
          duration: "3박4일",
          groupSize: 8,
          prices: { monTueWed: 119300, thuSun: 127300, friSat: 133300 },
        },
      ],
    },
    notes: [
      "호텔은 현지 사정에 따라 동급의 호텔로 바뀔 수도 있습니다.",
      "골프장은 현지 사정에 따라 동급의 다른 골프장으로 바뀔 수도 있습니다.",
    ],
  },
];

export function getGolf(slug: string): Golf | undefined {
  return golf.find((g) => g.slug === slug);
}
