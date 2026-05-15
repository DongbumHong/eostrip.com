import Link from "next/link";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import { site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100/80 bg-paper/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-baseline gap-2 font-bold tracking-tight"
          aria-label="에오스 트립 홈"
        >
          <span className="text-xl text-navy-700 transition-colors group-hover:text-sakura-500 md:text-2xl">
            EOS
          </span>
          <span className="text-xl text-sakura-500 md:text-2xl">TRIP</span>
          <span className="hidden text-sm font-medium text-slate-400 md:inline">
            큐슈 여행 전문
          </span>
        </Link>

        <nav aria-label="주 내비게이션" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-sakura-50 hover:text-sakura-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
