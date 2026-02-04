import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Clock, Users, BarChart3, Calendar, MessageSquare, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents | Advisync - Never Miss a Call Again",
  description:
    "AI-powered voice agents that answer calls 24/7, book appointments, capture leads, and handle customer inquiries naturally. Perfect for Australian businesses.",
};

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your AI agent never sleeps, never takes breaks, and never calls in sick. Every call answered, every time.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Advanced AI that sounds human and handles complex conversations. Customers won't know it's not a person.",
  },
  {
    icon: Calendar,
    title: "Instant Bookings",
    description: "Integrates with your calendar to book appointments in real-time. No double-bookings, no back-and-forth.",
  },
  {
    icon: Users,
    title: "Lead Capture",
    description: "Captures caller details, qualifies leads, and sends them straight to your CRM or inbox.",
  },
  {
    icon: Phone,
    title: "Call Transfer",
    description: "Knows when to transfer to a human. Urgent calls go straight to you, routine calls are handled automatically.",
  },
  {
    icon: BarChart3,
    title: "Call Analytics",
    description: "See who's calling, what they want, and how your AI is performing. Data to help you grow.",
  },
];

const useCases = [
  "Answer after-hours calls and capture leads while you sleep",
  "Handle appointment booking and rescheduling automatically",
  "Answer common questions (pricing, hours, location)",
  "Qualify leads before they reach your sales team",
  "Provide instant quotes based on caller requirements",
  "Follow up with missed calls automatically",
];

export default function AIVoiceAgentsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">AI Voice Agents</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Never Miss Another Customer Call
              </h1>
              <p className="text-xl text-white/90 mb-8">
                AI-powered voice agents that answer your calls 24/7, book appointments, and capture
                leads - so you can focus on running your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  <span>Free Consultation</span>
                </Link>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span>Calls Answered</span>
                  <span className="font-bold text-accent-400">100%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span>Average Response Time</span>
                  <span className="font-bold text-accent-400">&lt; 1 second</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span>Lead Capture Rate</span>
                  <span className="font-bold text-accent-400">95%+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-lg">
                  <span>Availability</span>
                  <span className="font-bold text-accent-400">24/7/365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Missed Calls = Missed Revenue
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Studies show that <strong>85% of customers won't call back</strong> if their first
              call goes unanswered. For a tradie, that's potentially $500-$5,000 lost per missed
              call. For a dentist, it could be a lifetime patient worth $50,000+.
            </p>
            <p className="text-lg text-gray-600">
              You can't answer every call while you're on the job, with a patient, or simply living
              your life. But your AI agent can.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              What Your AI Agent Can Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More than just an answering machine. A true virtual receptionist for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white border border-gray-100 rounded-xl p-6">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="font-bold text-primary-500 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Perfect For</h2>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Tradies & Contractors",
                  "Dental Practices",
                  "Medical Clinics",
                  "Real Estate Agents",
                  "Legal Firms",
                  "Automotive Services",
                  "Beauty & Wellness",
                  "Professional Services",
                ].map((industry) => (
                  <div key={industry} className="bg-white/10 rounded-lg p-3 text-sm">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-500 mb-4">
            Ready to Stop Missing Calls?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation and see how an AI voice agent can work for your business.
            We'll walk you through exactly how it would handle your specific calls.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 btn-primary px-8 py-4"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
