import type { Metadata, Viewport } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const mplus = M_PLUS_1p({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mplus",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eostrip.com"),
  title: {
    default: "EOS TRIP — 큐슈 여행 전문",
    template: "%s | EOS TRIP",
  },
  description:
    "큐슈 지역 프라이빗 투어와 골프백 투어 전문. 후쿠오카·사가·나가사키·유후인까지, 일본 큐슈의 모든 추억을 에오스 트립과 함께.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "EOS TRIP — 큐슈 여행 전문",
    description: "큐슈의 맛과 멋, 즐거움이 가득한 추억 만들기.",
    locale: "ko_KR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={mplus.variable}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
