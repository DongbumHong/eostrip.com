export type NavLink = { label: string; href: string };

export type SocialLink = {
  name: string;
  href: string;
  icon: "instagram" | "youtube" | "kakao";
  ariaLabel: string;
};

export const site = {
  brand: {
    name: "EOS TRIP",
    nameKo: "에오스 트립",
    tagline: "큐슈 여행 전문",
    description: "큐슈의 맛과 멋, 즐거움이 가득한 추억 만들기.",
    url: "https://eostrip.com",
  },
  contact: {
    email: "fukuoka@eostrip.com",
    tel: "+81-92-285-2430",
    mobile: "+81-90-3327-9397",
    ceo: "지정훈",
    address: {
      postal: "812-0013",
      linesKO: ["후쿠오카시 하카타구 하카타에키히가시", "3-9-7-503호"],
      linesJP: ["福岡市博多区博多駅東", "3-9-7-503号"],
      /** @deprecated 호환용 — linesKO 또는 linesJP 사용 */
      lines: ["福岡市博多区博多駅東", "3-9-7-503号"],
      city: "Fukuoka",
    },
  },
  nav: [
    { label: "HOME", href: "/" },
    { label: "프라이빗 투어", href: "/private" },
    { label: "골프백 투어", href: "/golf" },
    { label: "에오스 트립", href: "/info" },
    { label: "여행 문의", href: "/info#contact" },
  ] as NavLink[],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/eos_trip/",
      icon: "instagram",
      ariaLabel: "에오스 트립 인스타그램",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@에오스트립",
      icon: "youtube",
      ariaLabel: "에오스 트립 유튜브 채널",
    },
    {
      name: "KakaoTalk",
      href: "https://pf.kakao.com/_rHxfxln/",
      icon: "kakao",
      ariaLabel: "에오스 트립 카카오톡 채널",
    },
  ] as SocialLink[],
} as const;
