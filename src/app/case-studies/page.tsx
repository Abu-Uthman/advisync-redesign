import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Advisync - Real Results for Australian Businesses",
  description:
    "See how Australian businesses are using AI voice agents and automation to capture more leads, save time, and grow revenue.",
};

const caseStudies = [
  {
    company: "Melbourne Plumbing Co",
    industry: "Trades & Services",
    logo: "MP",
    challenge: "Missing 30% of calls while on jobs, losing potential customers to competitors.",
    solution: "AI voice agent handles all incoming calls 24/7, books appointments directly into ServiceM8.",
    results: [
      { metric: "40%", label: "Increase in bookings" },
      { metric: "100%", label: "Calls answered" },
      { metric: "15hrs", label: "Saved per week" },
    ],
    quote: "We used to miss calls all the time while on jobs. Now every call gets answered and I wake up to new bookings in my calendar.",
    author: "Mike Thompson",
    role: "Owner",
    slug: "melbourne-plumbing-co",
  },
  {
    company: "Sydney Dental Care",
    industry: "Healthcare",
    logo: "SDC",
    challenge: "Reception staff overwhelmed with calls, long hold times frustrating patients.",
    solution: "AI agent handles appointment bookings, reschedules, and common questions. Staff focus on in-clinic patients.",
    results: [
      { metric: "80%", label: "Reduction in hold time" },
      { metric: "20hrs", label: "Staff time saved weekly" },
      { metric: "35%", label: "More appointments booked" },
    ],
    quote: "The AI handles routine calls so our team can focus on patient care. It's like having an extra staff member who never takes a break.",
    author: "Dr. Sarah Chen",
    role: "Practice Manager",
    slug: "sydney-dental-care",
  },
  {
    company: "Brisbane Real Estate",
    industry: "Real Estate",
    logo: "BRE",
    challenge: "Missing after-hours enquiries from potential buyers and sellers.",
    solution: "AI voice agent qualifies leads 24/7, captures details, and schedules property viewings.",
    results: [
      { metric: "50%", label: "More qualified leads" },
      { metric: "24/7", label: "Lead capture" },
      { metric: "3x", label: "Faster response time" },
    ],
    quote: "Response time is everything in real estate. Our AI responds instantly to enquiries while our competitors' calls go to voicemail.",
    author: "James Wilson",
    role: "Director",
    slug: "brisbane-real-estate",
  },
  {
    company: "Perth Auto Services",
    industry: "Automotive",
    logo: "PAS",
    challenge: "Mechanics too busy to answer phones, customers going elsewhere.",
    solution: "AI handles booking enquiries, provides quotes for common services, and schedules appointments.",
    results: [
      { metric: "45%", label: "Increase in bookings" },
      { metric: "0", label: "Missed calls" },
      { metric: "$8K", label: "Additional monthly revenue" },
    ],
    quote: "I was skeptical about AI at first, but the numbers don't lie. We're booking more jobs than ever.",
    author: "Lisa Park",
    role: "Owner",
    slug: "perth-auto-services",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-white/90">
              Real results from real Australian businesses. See how AI is transforming operations
              across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gray-50 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-500">50+</div>
              <div className="text-gray-600 text-sm">Businesses Transformed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-500">98%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-500">$2M+</div>
              <div className="text-gray-600 text-sm">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-500">50K+</div>
              <div className="text-gray-600 text-sm">Calls Handled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.slug}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-500 text-white rounded-xl flex items-center justify-center font-bold">
                      {study.logo}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-primary-500">{study.company}</h2>
                      <p className="text-gray-500 text-sm">{study.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">The Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-1">The Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 mb-4">
                    "{study.quote}"
                    <footer className="mt-2 text-sm not-italic">
                      <strong>{study.author}</strong>, {study.role}
                    </footer>
                  </blockquote>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-bold text-primary-500 mb-6 text-center">Results</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="text-3xl font-bold text-accent-500">{result.metric}</div>
                        <div className="text-gray-600 text-sm">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free consultation and see how AI can transform your business.
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
