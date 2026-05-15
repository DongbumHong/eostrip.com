"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ReactElement,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

type HorizontalCarouselProps = {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  /** 자동 스크롤 활성화 */
  autoPlay?: boolean;
  /** 자동 스크롤 속도 (px / frame, 60fps 기준). 기본 1.0 */
  autoPlaySpeed?: number;
};

const MANUAL_PAUSE_MS = 5000;

function duplicateChildren(children: ReactNode): ReactNode[] {
  const arr = Children.toArray(children);
  const cloneWith = (suffix: string) =>
    arr.map((c, i) =>
      isValidElement(c)
        ? cloneElement(c as ReactElement, { key: `${suffix}-${i}` })
        : c,
    );
  return [...cloneWith("a"), ...cloneWith("b")];
}

export default function HorizontalCarousel({
  ariaLabel,
  children,
  className,
  autoPlay = false,
  autoPlaySpeed = 1.0,
}: HorizontalCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const isPausedRef = useRef(false);
  const manualPauseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotionRef = useRef(false);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (autoPlay) {
      // 무한 루프 모드: 화살표는 항상 활성
      setCanPrev(true);
      setCanNext(true);
      return;
    }
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, [autoPlay]);

  // prefers-reduced-motion 감지
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // 수동 모드: scroll listener
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    if (autoPlay) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      ro.disconnect();
    };
  }, [updateButtons, autoPlay]);

  // 자동 스크롤 (requestAnimationFrame + float accumulator)
  useEffect(() => {
    if (!autoPlay) return;
    const el = scrollerRef.current;
    if (!el) return;

    let rafId = 0;
    let accumulated = 0;
    const tick = () => {
      if (!isPausedRef.current && !reducedMotionRef.current && el) {
        accumulated += autoPlaySpeed;
        const px = Math.floor(accumulated);
        if (px > 0) {
          accumulated -= px;
          el.scrollLeft += px;
          // 절반(첫 사본 끝) 지나면 silent jump
          const half = el.scrollWidth / 2;
          if (half > 0 && el.scrollLeft >= half) {
            el.scrollLeft -= half;
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [autoPlay, autoPlaySpeed]);

  function pauseTemporarily(ms = MANUAL_PAUSE_MS) {
    if (!autoPlay) return;
    isPausedRef.current = true;
    if (manualPauseTimerRef.current) clearTimeout(manualPauseTimerRef.current);
    manualPauseTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, ms);
  }

  function scrollByPage(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
    pauseTemporarily();
  }

  function onMouseEnter() {
    if (autoPlay) isPausedRef.current = true;
  }
  function onMouseLeave() {
    if (autoPlay && !manualPauseTimerRef.current) isPausedRef.current = false;
    // 수동 일시정지 타이머가 살아 있으면 그쪽이 만료될 때 자동 재개됨
  }
  function onTouchStart() {
    if (autoPlay) pauseTemporarily(3000);
  }

  const renderedChildren = autoPlay ? duplicateChildren(children) : children;

  return (
    <div
      className={clsx("relative", className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        disabled={!canPrev}
        aria-label="이전"
        className={clsx(
          "absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-navy-700 shadow-cardHover transition-all sm:flex",
          "hover:bg-sakura-500 hover:text-paper",
          "disabled:cursor-not-allowed disabled:opacity-0",
        )}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>

      <button
        type="button"
        onClick={() => scrollByPage(1)}
        disabled={!canNext}
        aria-label="다음"
        className={clsx(
          "absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-paper text-navy-700 shadow-cardHover transition-all sm:flex",
          "hover:bg-sakura-500 hover:text-paper",
          "disabled:cursor-not-allowed disabled:opacity-0",
        )}
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>

      <div
        ref={scrollerRef}
        role="region"
        aria-label={ariaLabel}
        onTouchStart={onTouchStart}
        className={clsx(
          "-mx-4 flex gap-5 overflow-x-auto px-4 pb-3 pt-1 md:-mx-6 md:px-6",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          // autoPlay 시 snap 비활성, 수동 모드는 snap 유지
          autoPlay
            ? "scroll-auto"
            : "snap-x snap-mandatory scroll-smooth",
        )}
      >
        {renderedChildren}
      </div>
    </div>
  );
}
