import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents Perth | Advisync - AI Solutions for Perth Businesses",
  description:
    "AI voice agents and automation solutions for Perth businesses. Capture leads 24/7 with intelligent AI-powered call handling.",
};

export default function PerthPage() {
  return (
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Perth, Western Australia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Voice Agents for Perth Businesses
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Serving Perth and Western Australia with AI voice agents that never miss a call,
              even when there's a 3-hour time difference with the East Coast.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Perth Time Zone? No Problem.
            </h2>
            <p className="text-gray-600 mb-8">
              Your AI agent works 24/7 regardless of time zones. Whether your customers call at
              6am or 11pm, they'll always get an answer.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 btn-primary px-8 py-4"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
