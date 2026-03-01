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
    default: "Advisync | AI Voice Agents for Law Firms & NDIS Providers Melbourne",
    template: "%s | Advisync AI Solutions",
  },
  description:
    "Melbourne AI agency building Australian privacy compliant AI voice agents and automation. Legal AI receptionists for law firms, NDIS automation for support coordinators, and 24/7 AI reception for local businesses.",
  keywords: [
    "AI voice agents Melbourne",
    "Australian privacy compliant AI",
    "NDIS automation",
    "Legal AI receptionists",
    "Melbourne AI agency",
    "NDIS support coordination automation",
    "AI voice agents Australia",
    "business automation Melbourne",
    "AI automation solutions",
    "custom AI solutions Melbourne",
    "AI phone answering service",
    "AI receptionist Australia",
    "workflow automation",
    "AI for tradies",
    "AI receptionist law firms Australia",
    "NDIS provider automation",
    "AI receptionist Melbourne",
    "legal AI receptionist",
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
    title: "Advisync | AI Voice Agents for Law Firms & NDIS Providers Melbourne",
    description:
      "Melbourne AI agency. Australian privacy compliant AI voice agents for law firms, NDIS automation, and local business reception.",
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
    title: "Advisync | Legal AI Receptionists & NDIS Automation Melbourne",
    description:
      "Australian privacy compliant AI voice agents. Legal AI receptionists, NDIS automation, Melbourne AI agency.",
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
