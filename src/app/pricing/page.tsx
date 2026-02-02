import { Metadata } from "next";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | Advisync - AI Solutions for Australian Businesses",
  description:
    "Simple, transparent pricing for AI voice agents and automations. Starting from $497 AUD/month. See our plans and what's included.",
};

export default function PricingPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            No hidden fees, no surprise charges. Choose the plan that fits your business and start
            capturing more leads today.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* What's Included Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-500 mb-8 text-center">
              What's Included in Every Plan
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-500 mb-4">Setup & Onboarding</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Custom AI agent configuration</li>
                  <li>• Voice and personality customization</li>
                  <li>• Script development with your input</li>
                  <li>• Calendar/CRM integration</li>
                  <li>• Testing and quality assurance</li>
                  <li>• Training on how to manage your agent</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-500 mb-4">Ongoing Support</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Australian phone number included</li>
                  <li>• Cloud hosting and infrastructure</li>
                  <li>• Regular performance monitoring</li>
                  <li>• Script updates and improvements</li>
                  <li>• Technical support (response times vary by plan)</li>
                  <li>• Call analytics and reporting</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-accent-50 border border-accent-200 rounded-xl p-6">
              <h3 className="font-bold text-accent-600 mb-2">About Call Minutes</h3>
              <p className="text-gray-600 text-sm">
                Call minutes are for inbound calls handled by your AI agent. If you need more
                minutes, you can purchase additional minutes at $0.15 AUD per minute, or upgrade
                to a higher plan. Most small businesses find the Starter plan sufficient - we'll
                help you choose the right plan during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Plan is Right?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation and we'll help you choose the best option for your business.
            No pressure, no obligation.
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
