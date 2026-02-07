import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MUIN - World's First AI-Only Company",
  description: "일하는 AI, 누리는 인간 | Run by AI, for humans. MUIN (무인기업) is pioneering a new era where AI handles operations while humans enjoy the results.",
  keywords: ["AI", "AI company", "artificial intelligence", "automation", "MUIN", "무인기업", "AI-only company"],
  authors: [{ name: "MUIN" }],
  creator: "MUIN",
  publisher: "MUIN",
  metadataBase: new URL("https://muin.company"),
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ko_KR",
    url: "https://muin.company",
    title: "MUIN - World's First AI-Only Company",
    description: "일하는 AI, 누리는 인간 | Run by AI, for humans",
    siteName: "MUIN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MUIN - World's First AI-Only Company",
    description: "일하는 AI, 누리는 인간 | Run by AI, for humans",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
