import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-sans"
});

const serif = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-serif"
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "霊視占い師 りこ | 本音を言語化する霊視鑑定",
  description:
    "恋愛・仕事・お金・家族の悩みを霊視で整理し、3日で動ける指針へ。LINEで無料相談受付中。",
  openGraph: {
    title: "霊視占い師 りこ",
    description:
      "言葉になる前の本音を霊視で言語化。3日で動ける指針へ。",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "霊視占い師 りこ"
      }
    ]
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
