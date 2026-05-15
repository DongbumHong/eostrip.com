import type {
  Gallery,
  ImageRef,
  GolfFacilities,
  LodgingFacilities,
} from "./types";

// slug 와 실제 이미지 디렉토리 이름이 다른 경우 mapping.
const dirOverride: Record<string, string> = {
  "nizo-contry": "nazo-contry",
};

function buildImages(
  slug: string,
  kind: "golf" | "hotel",
  count: number,
  ext: "png" | "jpg" = "png",
  title?: string,
): { cover: ImageRef; images: ImageRef[] } {
  const dir = dirOverride[slug] ?? slug;
  const base = `/gallery/images/fulls/${kind}/${dir}`;
  const images: ImageRef[] = Array.from({ length: count }, (_, i) => ({
    src: `${base}/${String(i + 1).padStart(2, "0")}.${ext}`,
    alt: `${title ?? slug} 사진 ${i + 1}`,
  }));
  return { cover: images[0], images };
}

type RawGallery = {
  slug: string;
  title: string;
  category: "골프장" | "숙박";
  summary: string;
  descriptionParagraphs?: string[];
  imageCount: number;
  ext?: "png" | "jpg";
  website?: string;
  notes?: string[];
  driveFrom?: { city: string; minutes: number };
  golf?: GolfFacilities;
  lodging?: LodgingFacilities;
};

const COMMON_GOLF_FACILITIES: GolfFacilities = {
  clubhouse: true,
  restaurant: true,
  proShop: true,
};

const rawGalleries: RawGallery[] = [
  // ─── 골프장 (17) ──────────────────────────────────────────────────
  {
    slug: "amakase-contry",
    title: "아마카세온천 컨트리클럽 (天瀬温泉カントリークラブ)",
    category: "골프장",
    summary:
      "후쿠오카현에 위치한 골프장과 온천이 결합된 특별한 시설로, 산과 강으로 둘러싸인 경관 속에서 라운드를 즐길 수 있습니다.",
    descriptionParagraphs: [
      "다양한 난이도의 코스, 산과 강으로 둘러싸인 경관 속에서 라운드 후에는 온천으로 휴식을 취할 수 있는 특별한 골프장입니다.",
    ],
    imageCount: 6,
    notes: ["클럽하우스, 레스토랑, 프로샵, 골프 레슨 서비스 운영"],
    driveFrom: { city: "후쿠오카", minutes: 90 },
    golf: { ...COMMON_GOLF_FACILITIES, lessons: true },
  },
  {
    slug: "aso-izuka",
    title: "아소이즈카 골프클럽 (阿蘇飯塚ゴルフ倶楽部)",
    category: "골프장",
    summary:
      "후쿠오카현에 위치한 고급 골프장으로, 아소 산의 아름다운 자연 경관을 배경으로 골프를 즐길 수 있습니다.",
    descriptionParagraphs: [
      "전략적 설계와 자연 경관이 잘 어우러진 레이아웃으로, 골퍼들에게 도전과 휴식을 동시에 선사합니다.",
    ],
    imageCount: 7,
    notes: ["후쿠오카 시내에서 차로 약 1시간 30분"],
    driveFrom: { city: "후쿠오카", minutes: 90 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "central",
    title: "센트럴 골프클럽 (セントラルゴルフクラブ)",
    category: "골프장",
    summary:
      "후쿠오카 근교의 고급 골프장으로, 아름다운 자연 경관과 도전적인 골프 코스가 결합된 매력적인 장소입니다.",
    imageCount: 6,
    notes: ["후쿠오카시에서 차로 약 50분"],
    driveFrom: { city: "후쿠오카", minutes: 50 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "gaho-contry",
    title: "카호 컨트리클럽 (かほゴルフクラブ)",
    category: "골프장",
    summary:
      "후쿠오카 근교의 고급 골프장으로, 자연 경관과 도전적인 코스가 결합된 매력적인 골프장입니다.",
    imageCount: 6,
    notes: ["후쿠오카시에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "huistenbosch-contry",
    title: "하우스텐보스 컨트리클럽 (ハウステンボスカントリークラブ)",
    category: "골프장",
    summary:
      "사세보에 위치한 유명 골프장으로, 하우스텐보스 리조트와 가까워 골프와 레저를 동시에 즐길 수 있습니다.",
    imageCount: 4,
    notes: ["후쿠오카 또는 나가사키에서 차로 약 1시간"],
    driveFrom: { city: "나가사키", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "jr-utino",
    title: "JR우치노 컨트리클럽 (JR内野カントリークラブ)",
    category: "골프장",
    summary:
      "후쿠오카 근교의 고급 골프장으로, 편리한 접근성과 도전적인 코스가 특징입니다.",
    imageCount: 8,
    notes: ["후쿠오카 시내에서 30분 이내"],
    driveFrom: { city: "후쿠오카", minutes: 30 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "karatu-royal",
    title: "카라츠로얄 골프클럽 (唐津ロイヤルゴルフ倶楽部)",
    category: "골프장",
    summary:
      "후쿠오카현 카라츠시에 위치한 고급 골프장으로, 아름다운 자연 경관과 도전적인 코스를 제공합니다.",
    imageCount: 5,
    notes: ["후쿠오카 시내에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "nagasaki-park",
    title: "나가사키파크 컨트리클럽 (長崎パークカントリ倶楽部)",
    category: "골프장",
    summary:
      "나가사키의 고급 골프장으로, 아름다운 자연과 도전적인 코스로 골퍼들에게 사랑받는 명소입니다.",
    imageCount: 6,
    notes: ["후쿠오카 시내에서 차로 약 1시간"],
    driveFrom: { city: "나가사키", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "nizo-contry",
    title: "니조 컨트리클럽 (二丈カントリークラブ)",
    category: "골프장",
    summary:
      "후쿠오카 근교의 유명 골프장. 18홀 전부 바다가 보이는 해변 골프장으로 뛰어난 경관과 함께하는 라운딩이 가능합니다.",
    descriptionParagraphs: [
      "18홀 전부 바다가 보이는 해변 골프장으로서, 뛰어난 경관과 함께하는 라운딩이 가능합니다. 탁월한 자연 환경과 다양한 난이도의 코스를 갖추고 있습니다.",
    ],
    imageCount: 5,
    notes: ["후쿠오카시에서 차로 약 50분"],
    driveFrom: { city: "후쿠오카", minutes: 50 },
    golf: { ...COMMON_GOLF_FACILITIES, holes: 18 },
  },
  {
    slug: "ogori",
    title: "오고리 컨트리클럽 (小郡カンツリー俱楽部)",
    category: "골프장",
    summary:
      "후쿠오카에서 가까운 고급 골프장으로, 아름다운 자연과 도전적인 코스를 제공합니다.",
    descriptionParagraphs: [
      "산과 숲으로 둘러싸인 코스로, 다양한 장애물과 변화무쌍한 페어웨이가 골퍼의 전략적 사고를 자극합니다.",
    ],
    imageCount: 8,
    notes: ["후쿠오카 시내에서 차로 약 30분"],
    driveFrom: { city: "후쿠오카", minutes: 30 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "saga-contry",
    title: "사가 컨트리클럽 (佐賀カントリー倶楽部)",
    category: "골프장",
    summary:
      "큐슈 사가현에 위치한 고급 골프장으로, 아름다운 자연 경관과 도전적인 코스를 제공합니다.",
    descriptionParagraphs: [
      "전국적인 인지도를 가진 유명 골프장으로, 사가현 지역의 자연 환경을 최대한 살린 설계가 특징입니다.",
    ],
    imageCount: 4,
    notes: ["사가 시 근처, 후쿠오카에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "sasebo-contry",
    title: "사세보 국제 컨트리클럽 (佐世保国際カントリークラブ)",
    category: "골프장",
    summary:
      "사세보의 고급 골프장으로, 일본 내에서도 명문으로 손꼽히는 곳입니다.",
    imageCount: 6,
    notes: ["후쿠오카 또는 나가사키에서 차로 약 1~1.5시간"],
    driveFrom: { city: "나가사키", minutes: 75 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "takeoyureshino-contry",
    title: "타케오우레시노 컨트리클럽 (武夫・嬉野カントリークラブ)",
    category: "골프장",
    summary:
      "후쿠오카현 타케오시에 위치한 골프장으로, 우레시노 온천과 인접해 골프와 온천을 동시에 즐길 수 있습니다.",
    imageCount: 6,
    notes: ["후쿠오카 시내에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "tenzan-contry",
    title: "텐잔 컨트리클럽 (天山カントリークラブ)",
    category: "골프장",
    summary:
      "후쿠오카현에 위치한 골프장으로, 자연과의 조화를 중요시하는 멋진 코스를 자랑합니다.",
    imageCount: 6,
    notes: ["후쿠오카 시내에서 약 1시간 30분"],
    driveFrom: { city: "후쿠오카", minutes: 90 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "tikusino-contry",
    title: "치쿠시노 컨트리클럽 (筑紫野カントリークラブ)",
    category: "골프장",
    summary:
      "후쿠오카 근교의 명문 골프장으로, 일본 골프 애호가들 사이에서 유명한 코스입니다.",
    descriptionParagraphs: [
      "도전적인 장애물과 변화무쌍한 코스 설계로, 일본 골프 애호가들에게 명문 골프장으로 인정받고 있습니다.",
    ],
    imageCount: 6,
    notes: ["후쿠오카시에서 차로 약 30분"],
    driveFrom: { city: "후쿠오카", minutes: 30 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "ukiha-contry",
    title: "우키하 컨트리클럽 (浮羽カントリークラブ)",
    category: "골프장",
    summary:
      "후쿠오카현 우키하시에 위치한 골프장으로, 자연 경관을 즐기며 라운드할 수 있는 매력적인 장소입니다.",
    imageCount: 6,
    notes: ["후쿠오카 시내에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  {
    slug: "within",
    title: "위드인 골프클럽 (WITHIN ゴルフ倶楽部)",
    category: "골프장",
    summary:
      "후쿠오카현에 위치한 골프장으로, 편안한 라운드와 탁월한 코스 관리로 유명합니다.",
    descriptionParagraphs: [
      "잘 설계된 골프 코스와 매우 잘 관리된 페어웨이가 특징으로, 편안한 라운드를 원하는 골퍼에게 추천하는 골프장입니다.",
    ],
    imageCount: 5,
    notes: ["후쿠오카시에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    golf: COMMON_GOLF_FACILITIES,
  },
  // ─── 숙박 (6) ────────────────────────────────────────────────────
  {
    slug: "kominka-neri",
    title: "고민카네리 (古民家練り)",
    category: "숙박",
    summary:
      "후쿠오카 근교에 위치한 일본 옛 민가 스타일의 이색 료칸. 독립된 별채에서 앤티크하고 고풍스러운 분위기를 체험할 수 있습니다.",
    descriptionParagraphs: [
      "일본의 옛 민가 스타일의 이색적인 컨셉으로, 독립된 별채의 앤티크하고 고풍스러운 전통적인 분위기를 함께 체험할 수 있는 고급 료칸입니다.",
      "6개의 독립된 별채 스타일로, 나만의 별장에서 머무는 듯한 프라이빗한 시간을 보낼 수 있습니다.",
    ],
    imageCount: 3,
    notes: ["6개의 독립된 별채 스타일", "후쿠오카 시내에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    lodging: {
      roomTypes: ["일본식 별채"],
      onsen: true,
      mealsIncluded: ["조식", "석식"],
    },
  },
  {
    slug: "river-park",
    title: "리버파크 호텔 (リバーパーク)",
    category: "숙박",
    summary:
      "후쿠오카에 위치한 편안한 숙박 시설로, 비즈니스 여행객과 관광객 모두에게 인기 있는 호텔입니다.",
    descriptionParagraphs: [
      "강가 전망의 객실에서 조용한 휴식을 즐길 수 있는 호텔로, 우레시노 골프 투어의 베이스 캠프로 적합합니다.",
    ],
    imageCount: 3,
    notes: ["강가 전망의 객실", "후쿠오카 시내에서 차로 약 2시간"],
    driveFrom: { city: "후쿠오카", minutes: 120 },
    lodging: {
      roomTypes: ["서양식"],
      mealsIncluded: ["조식", "석식"],
    },
  },
  {
    slug: "sutton-hakata",
    title: "서튼 호텔 하카타시티 (Sutton Hotel Hakata City)",
    category: "숙박",
    summary:
      "후쿠오카 시내 중심지 하카타에 위치한 모던하고 세련된 호텔로, 매우 편리한 위치를 자랑합니다.",
    descriptionParagraphs: [
      "후쿠오카 시내에 위치한 모던하고 세련된 호텔로, 후쿠오카의 중심지인 하카타 지역에 자리 잡고 있어 매우 편리한 위치를 자랑합니다.",
      "편안한 숙박과 고급스러운 서비스를 제공하며, 관광이나 비즈니스 여행에 모두 적합한 시설과 서비스를 갖추고 있습니다.",
    ],
    imageCount: 5,
    website: "https://www.suttonhotel.co.jp/",
    notes: ["후쿠오카 하카타구, 하카타역 인근"],
    driveFrom: { city: "후쿠오카", minutes: 5 },
    lodging: {
      roomTypes: ["모던 서양식"],
      mealsIncluded: ["조식"],
    },
  },
  {
    slug: "toranoyu",
    title: "토라노유 (虎の湯)",
    category: "숙박",
    summary:
      "후쿠오카현 와카미야 지역에 위치한 료칸으로, 자연과 온천의 조화로 힐링과 휴식에 최적인 장소입니다.",
    descriptionParagraphs: [
      "후쿠오카현 와카미야 지역에 위치한 료칸으로, 자연과 온천의 조화가 아름다워 힐링과 휴식을 원하는 관광객에게 최적의 장소입니다.",
      "객실 내에 도기 또는 히노키 타입의 온천욕장을 갖추고 있어, 프라이빗한 온천 경험을 제공합니다.",
    ],
    imageCount: 6,
    ext: "jpg",
    notes: ["후쿠오카 시내에서 차로 약 1시간"],
    driveFrom: { city: "후쿠오카", minutes: 60 },
    lodging: {
      roomTypes: ["일본식"],
      onsen: true,
      inRoomOnsen: { type: "도기 또는 히노키" },
      mealsIncluded: ["조식", "석식"],
    },
  },
  {
    slug: "ukihana",
    title: "우키하 하나케시키 (うきは花景色)",
    category: "숙박",
    summary:
      "후쿠오카현 우키하시에 위치한 온천 숙박 시설로, 일본 전통 온천을 즐길 수 있는 장소입니다.",
    descriptionParagraphs: [
      "후쿠오카 현 우키하 시에 위치한 유명한 온천 지역의 숙박 시설로, 자연 속에서 온천과 전통 문화를 경험하며 편안한 시간을 보내고 싶은 분들에게 훌륭한 선택이 될 것입니다.",
      "일본식 객실(다다미와 이불)에서 산과 강으로 둘러싸인 자연 경관을 즐길 수 있습니다.",
    ],
    imageCount: 6,
    notes: ["후쿠오카 시내에서 차로 약 2시간"],
    driveFrom: { city: "후쿠오카", minutes: 120 },
    lodging: {
      roomTypes: ["일본식 (다다미)"],
      onsen: true,
      mealsIncluded: ["조식", "석식"],
    },
  },
  {
    slug: "yumihari",
    title: "유미하리노오카 호텔 (弓張丘ホテル)",
    category: "숙박",
    summary:
      "나가사키에 위치한 고급 온천 리조트로, 멋진 자연 경관과 편안한 시설을 자랑합니다.",
    descriptionParagraphs: [
      "나가사키에 위치한 고급 온천 리조트로, 멋진 자연 경관과 편안한 시설을 자랑하는 숙박 시설입니다.",
    ],
    imageCount: 3,
    notes: ["나가사키 시에서 차로 약 20분"],
    driveFrom: { city: "나가사키", minutes: 20 },
    lodging: {
      roomTypes: ["일본식", "서양식"],
      onsen: true,
      mealsIncluded: ["조식", "석식"],
    },
  },
];

export const gallery: Gallery[] = rawGalleries.map((raw) => {
  const kind = raw.category === "골프장" ? "golf" : "hotel";
  const { cover, images } = buildImages(
    raw.slug,
    kind,
    raw.imageCount,
    raw.ext ?? "png",
    raw.title,
  );
  return {
    slug: raw.slug,
    title: raw.title,
    category: raw.category,
    summary: raw.summary,
    descriptionParagraphs: raw.descriptionParagraphs,
    cover,
    images,
    website: raw.website,
    notes: raw.notes,
    driveFrom: raw.driveFrom,
    golf: raw.golf,
    lodging: raw.lodging,
  };
});

export function getGallery(slug: string): Gallery | undefined {
  return gallery.find((g) => g.slug === slug);
}

export const galleryGolf = gallery.filter((g) => g.category === "골프장");
export const galleryHotel = gallery.filter((g) => g.category === "숙박");
