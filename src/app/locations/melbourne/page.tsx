import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents Melbourne | Advisync - Local AI Solutions",
  description:
    "Melbourne-based AI voice agents and automation solutions. Local support for Melbourne businesses - tradies, healthcare, professional services.",
};

const industries = [
  "Plumbers & Electricians",
  "Dental Practices",
  "Medical Clinics",
  "Real Estate Agents",
  "Legal Firms",
  "Auto Services",
  "Building & Construction",
  "Accounting Firms",
];

export default function MelbournePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">Melbourne, Victoria</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Voice Agents for Melbourne Businesses
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Local AI solutions from a Melbourne-based team. We understand Melbourne businesses
              and provide the support you need, when you need it.
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

      {/* Why Melbourne Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">
                Built for Melbourne Businesses
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  As a Melbourne-based company, we understand the unique challenges local businesses
                  face. From busy tradies in the Eastern suburbs to professional services in the CBD,
                  we've helped businesses across Greater Melbourne capture more leads and grow.
                </p>
                <p>
                  Our AI voice agents are configured for Australian accents, local terminology, and
                  integrate with the tools Melbourne businesses actually use - ServiceM8, Cliniko,
                  Xero, and more.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent-500" />
                  <span className="text-gray-600">AEST timezone support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-500" />
                  <span className="text-gray-600">Local phone numbers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-accent-500" />
                  <span className="text-gray-600">Melbourne-based team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent-500" />
                  <span className="text-gray-600">On-site support available</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-primary-500 mb-6">Industries We Serve in Melbourne</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <div
                    key={industry}
                    className="bg-white rounded-lg p-3 text-sm text-gray-600 border border-gray-100"
                  >
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our Melbourne team. We'll show you exactly how AI can
            help your business grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
