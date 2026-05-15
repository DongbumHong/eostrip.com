import type { Tour, Golf, GolfPricingRow } from "./types";

export type StartingPrice = { value: number; currency: "KRW" | "JPY" };

function flattenGolfRows(rows: GolfPricingRow[]): number[] {
  return rows.flatMap((r) =>
    Object.values(r.prices).filter((v): v is number => typeof v === "number"),
  );
}

function isGolf(item: Tour | Golf): item is Golf {
  return "pricingTable" in item || "courses" in item;
}

export function getStartingPrice(item: Tour | Golf): StartingPrice | null {
  if (isGolf(item)) {
    if (!item.pricingTable) return null;
    const all: number[] = [];
    if (item.pricingTable.rows)
      all.push(...flattenGolfRows(item.pricingTable.rows));
    if (item.pricingTable.byAccommodation) {
      for (const acc of item.pricingTable.byAccommodation) {
        all.push(...flattenGolfRows(acc.rows));
      }
    }
    if (all.length === 0) return null;
    return { value: Math.min(...all), currency: "JPY" };
  }

  // Tour
  if (item.pricing?.rows.length) {
    return {
      value: Math.min(...item.pricing.rows.map((r) => r.price)),
      currency: "KRW",
    };
  }
  return null;
}

export function formatStartingPrice(p: StartingPrice): string {
  if (p.currency === "KRW") {
    return `${p.value.toLocaleString("ko-KR")}원~`;
  }
  return `${p.value.toLocaleString("ja-JP")}엔~`;
}

export function getMinParticipants(item: Tour | Golf): number {
  if (isGolf(item)) return 4;
  if (typeof item.minParticipants === "number") return item.minParticipants;
  return 2;
}
