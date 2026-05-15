import {
  AlertCircle,
  CheckCircle2,
  Info,
  ShieldX,
  Wallet,
  XCircle,
} from "lucide-react";
import type { Terms } from "@/data/types";

type TermsBlockProps = {
  terms: Terms;
  title?: string;
  variant?: "private" | "golf";
};

export default function TermsBlock({
  terms,
  title = "이용 안내",
  variant = "private",
}: TermsBlockProps) {
  return (
    <section className="mt-12 rounded-3xl bg-mist p-6 md:p-10">
      <header className="mb-6 flex items-center gap-2">
        <Info className="h-5 w-5 text-sakura-500" aria-hidden />
        <h2 className="text-xl font-bold tracking-tight text-navy-700 md:text-2xl">
          {title}
        </h2>
        <span className="ml-2 rounded-full bg-paper px-2.5 py-0.5 text-xs font-medium text-slate-500">
          {variant === "golf" ? "골프 투어 공통" : "프라이빗 투어 공통"}
        </span>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {/* 포함 내용 */}
        <div className="rounded-2xl bg-paper p-5 shadow-card md:p-6">
          <h3 className="flex items-center gap-2 text-sm font-bold text-navy-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden />
            포함 내용
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
            {terms.included.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-1 flex-none rounded-full bg-emerald-500"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 불포함 내용 */}
        <div className="rounded-2xl bg-paper p-5 shadow-card md:p-6">
          <h3 className="flex items-center gap-2 text-sm font-bold text-navy-700">
            <ShieldX className="h-4 w-4 text-sakura-600" aria-hidden />
            불포함 내용
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
            {terms.excluded.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-1 flex-none rounded-full bg-sakura-500"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 안내 사항 */}
      {terms.notes.length > 0 && (
        <div className="mt-5 rounded-2xl bg-paper p-5 shadow-card md:p-6">
          <h3 className="flex items-center gap-2 text-sm font-bold text-navy-700">
            <AlertCircle className="h-4 w-4 text-navy-600" aria-hidden />
            이용 시 안내 사항
          </h3>
          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
            {terms.notes.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className="mt-2 h-1 w-1 flex-none rounded-full bg-navy-500"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 취소·환불 규정 */}
      <div className="mt-5 rounded-2xl bg-paper p-5 shadow-card md:p-6">
        <h3 className="flex items-center gap-2 text-sm font-bold text-navy-700">
          <XCircle className="h-4 w-4 text-sakura-600" aria-hidden />
          취소·환불 규정
        </h3>
        <ul className="mt-3 grid gap-2 text-sm">
          {terms.cancellation.map((c, i) => (
            <li
              key={i}
              className="flex items-center justify-between gap-3 rounded-xl bg-mist px-4 py-3"
            >
              <span className="text-slate-700">{c.window}</span>
              <span
                className={
                  c.refundPercent === 0
                    ? "font-bold text-sakura-600"
                    : "font-bold text-navy-700"
                }
              >
                {c.refundPercent === 0 ? "환불 불가" : `${c.refundPercent}% 환불`}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          ※ 여행일은 현지 시각 기준입니다.
        </p>
      </div>

      {/* 계약금 */}
      {terms.deposit && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-sakura-50 p-5 md:p-6">
          <Wallet
            className="mt-0.5 h-5 w-5 flex-none text-sakura-600"
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-sakura-700">
            {terms.deposit}
          </p>
        </div>
      )}
    </section>
  );
}
