import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leora Naturale | Healthy & Preservative Free Dehydrated Delights",
  description:
    "Premium dehydrated snacks and herbal wellness products from Sri Lanka. Chemical-free, nutrient-rich, artisanal quality.",
  keywords: ["dehydrated snacks", "Sri Lanka", "natural food", "herbal wellness", "Leora Naturale"],
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Leora Naturale | Dehydrated Delights",
    description: "Healthy & preservative free dehydrated snacks and herbal products from Sri Lanka.",
    url: "https://www.leoranaturale.com",
    siteName: "Leora Naturale",
    type: "website",
    images: [{ url: "/images/logo.jpg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}