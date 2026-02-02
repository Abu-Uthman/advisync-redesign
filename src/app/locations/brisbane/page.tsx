import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents Brisbane | Advisync - AI Solutions for Brisbane Businesses",
  description:
    "AI voice agents and automation solutions for Brisbane businesses. Never miss a call again with 24/7 AI-powered answering.",
};

export default function BrisbanePage() {
  return (
    <main className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Brisbane, Queensland</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Voice Agents for Brisbane Businesses
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Helping Brisbane businesses grow with AI voice agents that handle calls, book appointments,
              and capture leads around the clock.
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
              Serving Brisbane & South East Queensland
            </h2>
            <p className="text-gray-600 mb-8">
              From the Gold Coast to the Sunshine Coast and everywhere in between,
              we help Queensland businesses capture every call with intelligent AI solutions.
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
