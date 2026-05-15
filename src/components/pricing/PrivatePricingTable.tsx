import { Users } from "lucide-react";
import type { PrivatePricing } from "@/data/types";

type Props = {
  pricing: PrivatePricing;
  title?: string;
};

function formatKRW(value: number) {
  return value.toLocaleString("ko-KR");
}

export default function PrivatePricingTable({
  pricing,
  title = "여행 가격 정보",
}: Props) {
  const rows = [...pricing.rows].sort((a, b) => a.groupSize - b.groupSize);
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700 md:text-3xl">
        <Users className="h-6 w-6 text-sakura-500" aria-hidden />
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        출발 인원에 따라 1인당 요금이 달라집니다. (원화 기준 · 1인당)
      </p>

      {/* 데스크탑: 그리드 테이블 */}
      <div className="mt-5 hidden overflow-hidden rounded-3xl border border-slate-100 bg-paper shadow-card md:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-mist">
              <th className="px-5 py-3 text-left font-bold text-navy-700">
                출발 인원
              </th>
              <th className="px-5 py-3 text-right font-bold text-navy-700">
                1인 요금
              </th>
              <th className="px-5 py-3 text-left font-bold text-navy-700">
                출발 인원
              </th>
              <th className="px-5 py-3 text-right font-bold text-navy-700">
                1인 요금
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(rows.length / 2) }).map((_, i) => {
              const left = rows[i * 2];
              const right = rows[i * 2 + 1];
              return (
                <tr
                  key={i}
                  className="border-t border-slate-100 even:bg-mist/50"
                >
                  <td className="px-5 py-3 font-medium text-ink">
                    {left.groupSize}인
                  </td>
                  <td className="px-5 py-3 text-right text-ink">
                    {formatKRW(left.price)}원
                  </td>
                  {right ? (
                    <>
                      <td className="px-5 py-3 font-medium text-ink">
                        {right.groupSize}인
                      </td>
                      <td className="px-5 py-3 text-right text-ink">
                        {formatKRW(right.price)}원
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-5 py-3" />
                      <td className="px-5 py-3" />
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 모바일: 카드 리스트 */}
      <ul className="mt-5 grid gap-2 md:hidden">
        {rows.map((r) => (
          <li
            key={r.groupSize}
            className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-paper px-5 py-3 shadow-sm"
          >
            <span className="font-medium text-navy-700">{r.groupSize}인</span>
            <span className="text-ink">{formatKRW(r.price)}원</span>
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs leading-relaxed text-slate-500">
        ※ 표는 1인당 요금이며, 현지 입장료·식대는 별도입니다.
      </p>
    </section>
  );
}
