import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import type { Gallery } from "@/data/types";

type GalleryCardProps = {
  gallery: Gallery;
};

export default function GalleryCard({ gallery }: GalleryCardProps) {
  return (
    <Link
      href={`/gallery/${gallery.slug}`}
      className="group block overflow-hidden rounded-3xl border border-slate-100 bg-paper shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={gallery.cover.src}
          alt={gallery.cover.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge tone={gallery.category === "골프장" ? "navy" : "sakura"}>
            {gallery.category}
          </Badge>
        </div>
      </div>
      <div className="p-4 md:p-5">
        <h3 className="line-clamp-1 text-base font-bold tracking-tight text-navy-700 md:text-lg">
          {gallery.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {gallery.summary}
        </p>
      </div>
    </Link>
  );
}
