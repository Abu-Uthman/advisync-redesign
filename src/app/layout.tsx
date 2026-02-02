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
    default: "Advisync AI Solutions | AI Voice Agents & Automation for Australian Businesses",
    template: "%s | Advisync AI Solutions",
  },
  description:
    "Transform your business with AI. Advisync provides AI voice agents, automation solutions, and custom AI systems for Australian businesses. Never miss a call again.",
  keywords: [
    "AI voice agents Australia",
    "AI automation",
    "AI solutions Melbourne",
    "business automation",
    "AI voice assistant",
    "custom AI solutions",
    "AI for small business",
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
    title: "Advisync AI Solutions | AI Voice Agents & Automation",
    description:
      "Transform your business with AI. Voice agents, automation, and custom solutions for Australian businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Advisync AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advisync AI Solutions",
    description: "AI Voice Agents & Automation for Australian Businesses",
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
