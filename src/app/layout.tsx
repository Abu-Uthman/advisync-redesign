import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advisync.com.au"),
  title: {
    default: "AI Voice Agents & Business Automation Melbourne | Advisync",
    template: "%s | Advisync AI Solutions",
  },
  description:
    "Advisync builds AI voice agents and custom business automation for Australian businesses. Never miss a call — our AI answers 24/7, books appointments, and captures leads. Melbourne-based.",
  keywords: [
    "AI voice agents Melbourne",
    "AI voice agents Australia",
    "business automation Melbourne",
    "AI automation solutions",
    "custom AI solutions Melbourne",
    "AI phone answering service",
    "AI receptionist Australia",
    "workflow automation",
    "AI for tradies",
    "AI for small business Australia",
  ],
  authors: [{ name: "Advisync" }],
  creator: "Advisync",
  publisher: "Advisync",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://advisync.com.au",
    siteName: "Advisync AI Solutions",
    title: "AI Voice Agents & Business Automation Melbourne | Advisync",
    description:
      "AI voice agents that answer calls 24/7, book appointments, and capture leads. Custom automation solutions for Australian businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advisync — AI Voice Agents & Business Automation Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents & Business Automation | Advisync Melbourne",
    description:
      "Never miss a call. AI voice agents and workflow automation for Australian businesses.",
    images: ["/og-image.png"],
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
    <html lang="en-AU" className={manrope.variable}>
      <body className="font-sans antialiased bg-white text-primary-500">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
