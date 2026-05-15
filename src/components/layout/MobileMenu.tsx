"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { site } from "@/data/site";

function SakuraSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <g fill="currentColor">
        {[0, 72, 144, 216, 288].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 50 50)`}>
            {/* 노치(notch)가 있는 꽃잎 — 끝이 살짝 갈라진 사쿠라 모양 */}
            <path d="M50 8 C 60 18, 66 28, 60 40 C 56 46, 52 48, 50 48 C 48 48, 44 46, 40 40 C 34 28, 40 18, 50 8 Z M50 8 C 49 14, 49 18, 50 20 C 51 18, 51 14, 50 8 Z" />
          </g>
        ))}
      </g>
      <circle cx="50" cy="50" r="5" fill="white" />
      <circle cx="50" cy="50" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-50 md:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden />
      </button>

      <div
        className={clsx(
          "fixed inset-0 z-50 transition-opacity md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <nav
          className={clsx(
            "absolute inset-y-0 right-0 flex min-h-screen w-[78%] max-w-sm flex-col overflow-hidden bg-gradient-to-b from-sakura-200 via-sakura-100 to-sakura-50 shadow-2xl ring-1 ring-sakura-200 transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="모바일 내비게이션"
        >
          {/* 장식용 사쿠라 무늬 — 콘텐츠 뒤로 가게 z-0, 클릭 차단 X */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <SakuraSvg className="absolute -left-6 -top-4 h-24 w-24 rotate-[18deg] text-sakura-300/45" />
            <SakuraSvg className="absolute right-3 top-20 h-16 w-16 -rotate-12 text-sakura-400/30" />
            <SakuraSvg className="absolute -right-8 top-44 h-28 w-28 rotate-[35deg] text-sakura-300/35" />
            <SakuraSvg className="absolute left-2 top-1/2 h-12 w-12 rotate-[8deg] text-sakura-400/25" />
            <SakuraSvg className="absolute -left-4 bottom-32 h-20 w-20 -rotate-[24deg] text-sakura-300/40" />
            <SakuraSvg className="absolute right-6 bottom-16 h-14 w-14 rotate-[60deg] text-sakura-400/30" />
            <SakuraSvg className="absolute -bottom-6 -right-4 h-24 w-24 -rotate-[18deg] text-sakura-300/40" />
            <SakuraSvg className="absolute left-1/3 top-1/3 h-9 w-9 rotate-[120deg] text-sakura-400/20" />
          </div>

          <div className="relative z-10 flex items-center justify-between border-b border-sakura-300/40 px-5 py-4">
            <span className="inline-flex items-baseline gap-2 font-bold tracking-tight">
              <span className="text-navy-700">EOS</span>
              <span className="text-sakura-500">TRIP</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="메뉴 닫기"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-paper/70"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <ul className="relative z-10 flex flex-1 flex-col gap-2 px-3 py-6">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl bg-paper/90 px-4 py-3.5 text-lg font-bold text-navy-700 shadow-md ring-1 ring-sakura-200/50 transition-all hover:bg-sakura-500 hover:text-paper hover:shadow-sakura hover:ring-sakura-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative z-10 border-t border-sakura-300/40 bg-paper/75 px-5 py-4 text-sm text-slate-600 backdrop-blur-sm">
            <p className="font-medium text-navy-700">{site.contact.email}</p>
            <p className="mt-1">{site.contact.mobile}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
