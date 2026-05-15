import { Users } from "lucide-react";
import type { GolfPricing, GolfPricingRow, GolfRateCol } from "@/data/types";

type Props = {
  pricing: GolfPricing;
  /** gallerySlug → 표시용 숙소 이름 */
  accommodationNames?: Record<string, string>;
};

const COL_LABEL: Record<GolfRateCol, string> = {
  monTueWed: "월·화·수",
  thuSun: "목·일",
  friSat: "금·토",
};

const COLS: GolfRateCol[] = ["monTueWed", "thuSun", "friSat"];

function formatJPY(value: number | undefined): string {
  return value === undefined ? "—" : value.toLocaleString("ja-JP");
}

function MatrixTable({ rows }: { rows: GolfPricingRow[] }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-paper shadow-card">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr className="bg-mist">
            <th className="px-4 py-3 text-left font-bold text-navy-700">일정</th>
            <th className="px-4 py-3 text-left font-bold text-navy-700">인원</th>
            {COLS.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-right font-bold text-navy-700"
              >
                {COL_LABEL[col]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-t border-slate-100 even:bg-mist/50"
            >
              <td className="px-4 py-3 font-medium text-navy-700">
                {r.duration}
              </td>
              <td className="px-4 py-3 text-ink">{r.groupSize}인</td>
              {COLS.map((col) => (
                <td
                  key={col}
                  className="whitespace-nowrap px-4 py-3 text-right text-ink"
                >
                  {r.prices[col] !== undefined ? (
                    <>
                      {formatJPY(r.prices[col])}
                      <span className="ml-0.5 text-xs text-slate-500">엔</span>
                    </>
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GolfPricingMatrix({
  pricing,
  accommodationNames,
}: Props) {
  return (
    <section className="mt-10">
      <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-navy-700 md:text-3xl">
        <Users className="h-6 w-6 text-sakura-500" aria-hidden />
        여행 가격 정보
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        출발 요일과 일정에 따라 1인당 요금이 달라집니다. (엔화 기준 · 1인당)
      </p>

      <div className="mt-5 space-y-8">
        {pricing.rows && <MatrixTable rows={pricing.rows} />}
        {pricing.byAccommodation?.map((acc) => (
          <div key={acc.gallerySlug}>
            <h3 className="mb-3 text-sm font-bold text-navy-700">
              {accommodationNames?.[acc.gallerySlug] ?? acc.gallerySlug}
            </h3>
            <MatrixTable rows={acc.rows} />
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs leading-relaxed text-slate-500">
        ※ 좁은 화면에서는 좌우로 스크롤하여 모든 요일별 요금을 확인할 수 있습니다.
        조식·석식 포함. 항공비·여행자 보험·골프 보험은 별도입니다.
      </p>
    </section>
  );
}
