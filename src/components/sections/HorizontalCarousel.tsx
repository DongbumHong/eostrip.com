"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

type HorizontalCarouselProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  /** 자동 스크롤 활성화 */
  autoPlay?: boolean;
  /** 자동 스크롤 속도 (px per frame, 60fps 기준). 기본 1.0 (≈60 px/s, 물 흐르듯) */
  autoPlaySpeed?: number;
};

const GAP_PX = 20;
const EDGE_EPS = 8;
const MANUAL_PAUSE_MS = 5000;

export default function HorizontalCarousel({
  ariaLabel,
  children,
  className,
  autoPlay = false,
  autoPlaySpeed = 1.0,
}: HorizontalCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const userPausedRef = useRef(false);
  const pauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const directionRef = useRef<1 | -1>(1); // 1: 우→좌 흐름(scrollLeft↑), -1: 좌→우 흐름

  function getCardWidth(el: HTMLElement) {
    const first = el.firstElementChild as HTMLElement | null;
    if (first && first.offsetWidth > 0) return first.offsetWidth + GAP_PX;
    return Math.max(240, el.clientWidth * 0.7);
  }

  function pauseAutoTemporarily(ms = MANUAL_PAUSE_MS) {
    if (!autoPlay) return;
    userPausedRef.current = true;
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      userPausedRef.current = false;
      pauseTimerRef.current = null;
    }, ms);
  }

  function shiftByCard(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const w = getCardWidth(el);
    const maxScroll = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= EDGE_EPS;
    const atEnd = el.scrollLeft >= maxScroll - EDGE_EPS;

    if (dir === 1 && atEnd) {
      // 오른쪽 끝에서 → 처음으로 wrap
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && atStart) {
      // 왼쪽 끝에서 → 마지막으로 wrap
      el.scrollTo({ left: maxScroll, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * w, behavior: "smooth" });
    }
    pauseAutoTemporarily();
  }

  // 연속 자동 스크롤: RAF + scrollLeft accumulator (snap 없음)
  useEffect(() => {
    if (!autoPlay) return;
    const el = scrollerRef.current;
    if (!el) return;

    let raf = 0;
    let acc = 0;

    const tick = () => {
      if (!userPausedRef.current && el) {
        acc += autoPlaySpeed;
        const px = Math.floor(acc);
        if (px > 0) {
          acc -= px;
          const maxScroll = el.scrollWidth - el.clientWidth;
          if (maxScroll > 0) {
            const next = el.scrollLeft + directionRef.current * px;
            if (next >= maxScroll) {
              // 오른쪽 끝(7번) 도달 → 왼쪽으로 방향 전환
              el.scrollLeft = maxScroll;
              directionRef.current = -1;
            } else if (next <= 0) {
              // 왼쪽 끝(1번) 도달 → 오른쪽으로 방향 전환
              el.scrollLeft = 0;
              directionRef.current = 1;
            } else {
              el.scrollLeft = next;
            }
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoPlay, autoPlaySpeed]);

  function onMouseEnter() {
    if (autoPlay) userPausedRef.current = true;
  }
  function onMouseLeave() {
    if (autoPlay && !pauseTimerRef.current) userPausedRef.current = false;
  }
  function onTouchStart() {
    if (autoPlay) pauseAutoTemporarily(3000);
  }

  return (
    <div
      className={clsx("relative", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        onClick={() => shiftByCard(-1)}
        aria-label="이전"
        className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper/70 text-navy-700 shadow-cardHover backdrop-blur-sm transition-all sm:flex hover:bg-sakura-500 hover:text-paper hover:bg-opacity-100"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => shiftByCard(1)}
        aria-label="다음"
        className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-paper/70 text-navy-700 shadow-cardHover backdrop-blur-sm transition-all sm:flex hover:bg-sakura-500 hover:text-paper hover:bg-opacity-100"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>
      <div
        ref={scrollerRef}
        role="region"
        aria-label={ariaLabel}
        onTouchStart={onTouchStart}
        className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-3 pt-1 md:-mx-6 md:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}
