import Link from "next/link";

export default function KakaoChannelCard() {
  return (
    <Link
      href="https://pf.kakao.com/_rHxfxln/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="에오스 트립 카카오톡 채널 열기"
      className="group flex flex-col items-center justify-center gap-5 rounded-3xl bg-[#FEE500] p-10 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover md:p-12"
    >
      {/* 검정 말풍선 + "Ch" */}
      <div className="relative inline-flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
        <svg
          viewBox="0 0 96 96"
          aria-hidden
          className="absolute inset-0 h-full w-full"
        >
          {/* 둥근 사각 말풍선 본체 */}
          <rect x="6" y="6" width="84" height="62" rx="20" fill="#181818" />
          {/* 말풍선 꼬리 */}
          <path d="M38 64 L46 86 L60 64 Z" fill="#181818" />
        </svg>
        <span className="relative -mt-3 text-3xl font-bold tracking-tight text-paper md:text-4xl">
          Ch
        </span>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <p className="text-2xl font-bold tracking-tight text-[#181818] md:text-3xl">
          카카오톡 채널
        </p>
        <p className="text-sm font-medium text-[#181818]/70 md:text-base">
          @에오스트립
        </p>
      </div>

      <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#181818] px-5 py-2.5 text-sm font-bold text-[#FEE500] transition-transform group-hover:scale-105 md:text-base">
        채널 추가하기
      </span>
    </Link>
  );
}
