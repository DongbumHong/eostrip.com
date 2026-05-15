export type ImageRef = { src: string; alt: string };

export type SEO = {
  title?: string;
  description?: string;
};

// ─── Pricing ────────────────────────────────────────────────────────────

export type PrivatePricingRow = { groupSize: number; price: number /* KRW */ };
export type PrivatePricing = {
  currency: "KRW";
  rows: PrivatePricingRow[];
};

export type GolfRateCol = "monTueWed" | "thuSun" | "friSat";
export type GolfDuration = "2박3일" | "3박4일";
export type GolfPricingRow = {
  duration: GolfDuration;
  groupSize: number;
  prices: Partial<Record<GolfRateCol, number /* JPY */>>;
};
export type GolfPricing = {
  currency: "JPY";
  /** Single matrix when one accommodation, or use byAccommodation. */
  rows?: GolfPricingRow[];
  /** When accommodation choice changes pricing (e.g. kominka). */
  byAccommodation?: { gallerySlug: string; rows: GolfPricingRow[] }[];
};

// ─── Tour (private) ─────────────────────────────────────────────────────

export type Tour = {
  slug: string;
  title: string;
  region: string;
  summary: string;
  hero: ImageRef;
  duration?: string;
  highlights?: string[];
  itinerary?: string[];
  notes?: string[];
  spots?: { name: string; gallerySlug?: string }[];
  descriptionParagraphs?: string[];
  startTime?: string;
  minParticipants?: number;
  doorToDoor?: boolean;
  pricing?: PrivatePricing;
  depositPercent?: number;
  seo?: SEO;
};

// ─── Golf ───────────────────────────────────────────────────────────────

export type Golf = {
  slug: string;
  title: string;
  region: string;
  summary: string;
  hero: ImageRef;
  accommodation: { name: string; gallerySlug: string }[];
  courses: { name: string; gallerySlug: string }[];
  highlights?: string[];
  notes?: string[];
  /** @deprecated — use pricingTable for structured pricing. */
  pricing?: string[];
  pricingTable?: GolfPricing;
  descriptionParagraphs?: string[];
  doorToDoor?: boolean;
  depositPercent?: number;
  seo?: SEO;
};

// ─── Gallery ────────────────────────────────────────────────────────────

export type GalleryCategory = "골프장" | "숙박";

export type GolfFacilities = {
  holes?: number;
  par?: number;
  yardage?: number;
  clubhouse?: boolean;
  restaurant?: boolean;
  proShop?: boolean;
  lessons?: boolean;
  difficulty?: string;
};

export type LodgingFacilities = {
  roomTypes?: string[];
  onsen?: boolean;
  inRoomOnsen?: { type?: string };
  mealsIncluded?: ("조식" | "석식")[];
};

export type Gallery = {
  slug: string;
  title: string;
  category: GalleryCategory;
  summary: string;
  cover: ImageRef;
  images: ImageRef[];
  website?: string;
  notes?: string[];
  descriptionParagraphs?: string[];
  driveFrom?: { city: string; minutes: number };
  golf?: GolfFacilities;
  lodging?: LodgingFacilities;
  seo?: SEO;
};

// ─── Terms (shared) ─────────────────────────────────────────────────────

export type Terms = {
  included: string[];
  excluded: string[];
  notes: string[];
  cancellation: { window: string; refundPercent: number }[];
  deposit?: string;
};
