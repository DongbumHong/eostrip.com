"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { clsx } from "clsx";
import type { ImageRef } from "@/data/types";

type LightboxProps = {
  images: ImageRef[];
};

export default function Lightbox({ images }: LightboxProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const open = useCallback((i: number) => setActiveIdx(i), []);
  const close = useCallback(() => setActiveIdx(null), []);
  const next = useCallback(() => {
    setActiveIdx((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);
  const prev = useCallback(() => {
    setActiveIdx((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  }, [images.length]);

  // 키보드 + 스크롤 잠금
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIdx, close, next, prev]);

  // 활성 썸네일을 스트립 중앙으로 스크롤
  useEffect(() => {
    if (activeIdx === null) return;
    const el = thumbsRef.current?.querySelector<HTMLElement>(
      `[data-thumb-idx="${activeIdx}"]`,
    );
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [activeIdx]);

  return (
    <>
      {/* 그리드 */}
      <section className="mt-10 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => open(i)}
            aria-label={`${img.alt} 크게 보기`}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist shadow-card transition-shadow hover:shadow-cardHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sakura-500 focus-visible:ring-offset-2"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </section>

      {/* 모달 */}
      {activeIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="갤러리 이미지 뷰어"
          className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={(e) => {
            // 배경 클릭 시 닫기
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* 상단 바: 카운터 + 닫기 */}
          <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4">
            <span className="rounded-full bg-paper/10 px-3 py-1 text-sm font-medium text-paper">
              {activeIdx + 1} / {images.length}
            </span>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={close}
              aria-label="닫기"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-paper/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sakura-500"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          {/* 메인 이미지 */}
          <div
            className="relative flex flex-1 items-center justify-center px-4 md:px-12"
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <div className="relative h-full max-h-[75vh] w-full max-w-6xl">
              <Image
                key={activeIdx}
                src={images[activeIdx].src}
                alt={images[activeIdx].alt}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>

            {/* 좌우 화살표 */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="이전 사진"
                  className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-sakura-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sakura-500 md:left-6 md:h-14 md:w-14"
                >
                  <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="다음 사진"
                  className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors hover:bg-sakura-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sakura-500 md:right-6 md:h-14 md:w-14"
                >
                  <ChevronRight className="h-6 w-6 md:h-7 md:w-7" aria-hidden />
                </button>
              </>
            )}
          </div>

          {/* 하단 썸네일 스트립 */}
          {images.length > 1 && (
            <div
              ref={thumbsRef}
              className="flex gap-2 overflow-x-auto px-4 py-4 md:gap-3 md:px-6 md:py-5 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-paper/30"
            >
              {images.map((img, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={i}
                    type="button"
                    data-thumb-idx={i}
                    onClick={() => open(i)}
                    aria-label={`${i + 1}번 사진 보기`}
                    aria-current={isActive}
                    className={clsx(
                      "relative h-14 w-20 flex-none overflow-hidden rounded-md bg-paper/10 transition-all md:h-16 md:w-24",
                      isActive
                        ? "opacity-100 ring-2 ring-sakura-500 ring-offset-2 ring-offset-black"
                        : "opacity-60 hover:opacity-100",
                    )}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
}
