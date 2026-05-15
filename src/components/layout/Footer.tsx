import Link from "next/link";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  User,
} from "lucide-react";
import Container from "./Container";
import { site } from "@/data/site";

export const iconMap = {
  instagram: Instagram,
  youtube: Youtube,
  kakao: MessageCircle,
} as const;

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-mist">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-flex items-baseline gap-2 text-2xl font-bold tracking-tight"
            >
              <span className="text-navy-700">EOS</span>
              <span className="text-sakura-500">TRIP</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {site.brand.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-navy-700">연락처</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-sakura-500" aria-hidden />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="hover:text-sakura-600"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-sakura-500" aria-hidden />
                <span>
                  TEL {site.contact.tel}
                  <br />
                  MOBILE {site.contact.mobile}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-sakura-500" aria-hidden />
                <span>
                  〒{site.contact.address.postal}
                  <br />
                  {site.contact.address.linesKO.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <User className="mt-0.5 h-4 w-4 flex-none text-sakura-500" aria-hidden />
                <span>대표이사 {site.contact.ceo}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-navy-700">소셜 미디어</h3>
            <ul className="mt-4 flex gap-3">
              {site.social.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.ariaLabel}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper text-navy-700 shadow-card transition-all hover:-translate-y-0.5 hover:bg-sakura-500 hover:text-paper hover:shadow-sakura"
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} EOS TRIP. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
