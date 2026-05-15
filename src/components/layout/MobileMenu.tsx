"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { site } from "@/data/site";

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
            "absolute right-0 top-0 flex h-full w-[78%] max-w-sm flex-col bg-paper shadow-2xl transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="모바일 내비게이션"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <span className="font-bold tracking-tight text-navy-700">EOS TRIP</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="메뉴 닫기"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-50"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <ul className="flex flex-1 flex-col gap-1 px-3 py-6">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg font-medium text-ink transition-colors hover:bg-sakura-50 hover:text-sakura-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-100 px-5 py-4 text-sm text-slate-500">
            <p className="font-medium text-navy-700">{site.contact.email}</p>
            <p className="mt-1">{site.contact.mobile}</p>
          </div>
        </nav>
      </div>
    </>
  );
}
