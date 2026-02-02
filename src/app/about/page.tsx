import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Advisync - AI Solutions for Australian Businesses",
  description:
    "Learn about Advisync - Melbourne-based AI specialists helping Australian businesses automate customer interactions and grow with intelligent technology.",
};

const values = [
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "We measure success by your success. Every solution is designed to deliver measurable ROI for your business.",
  },
  {
    icon: Heart,
    title: "Australian-First",
    description:
      "We understand Australian businesses. Local support, local expertise, solutions built for the Australian market.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description:
      "We stay ahead of AI developments so you don't have to. You get the latest technology without the learning curve.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description:
      "We're not just vendors - we're partners invested in your growth. Your success is our success.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Help Australian Businesses Thrive with AI
            </h1>
            <p className="text-xl text-white/90">
              Advisync is a Melbourne-based AI solutions company dedicated to helping small and
              medium businesses harness the power of artificial intelligence - without the
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We started Advisync after seeing too many Australian businesses struggle with
                  missed calls, overwhelmed staff, and outdated processes. In a world where
                  customers expect instant responses, small businesses were being left behind.
                </p>
                <p>
                  We knew AI could help - but most AI solutions were built for big enterprises with
                  big budgets. So we built something different: powerful AI tools designed
                  specifically for Australian small and medium businesses.
                </p>
                <p>
                  Today, we help businesses across Australia - from tradies in Melbourne to dentists
                  in Brisbane - capture more leads, save time, and deliver better customer
                  experiences with AI.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-500">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-500">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-500">24/7</div>
                  <div className="text-gray-600">AI Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-500">Melbourne</div>
                  <div className="text-gray-600">Based</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Advisync.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="font-bold text-primary-500 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Let's chat about how AI can help your business grow. No pressure, no jargon - just a
            friendly conversation about your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
