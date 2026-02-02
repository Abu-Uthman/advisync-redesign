import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents vs Virtual Receptionists: Which is Right for You? | Advisync",
  description:
    "Comparing the costs, capabilities, and results of AI voice agents versus traditional virtual receptionist services.",
};

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 text-white/80 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI Technology</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>January 21, 2026</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>7 min read</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              AI Voice Agents vs Virtual Receptionists: Which is Right for You?
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Both AI voice agents and traditional virtual receptionists can answer your calls.
                But they work very differently, cost very differently, and deliver very different
                results. Here&apos;s what you need to know.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                What&apos;s the Difference?
              </h2>
              
              <h3 className="text-xl font-bold text-gray-700 mt-6 mb-3">Virtual Receptionists</h3>
              <p className="text-gray-600 mb-4">
                Virtual receptionists are real humans working remotely (often in call centres).
                When someone calls your number, the call is forwarded to them. They answer with
                your business name and take messages or transfer calls.
              </p>

              <h3 className="text-xl font-bold text-gray-700 mt-6 mb-3">AI Voice Agents</h3>
              <p className="text-gray-600 mb-4">
                AI voice agents are powered by artificial intelligence. They use natural language
                processing to understand callers and respond naturally. Modern AI agents can hold
                full conversations, answer questions, and take actions like booking appointments.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Feature Comparison
              </h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-4 text-left">Feature</th>
                      <th className="border p-4 text-center">AI Voice Agent</th>
                      <th className="border p-4 text-center">Virtual Receptionist</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-4">24/7 Availability</td>
                      <td className="border p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="border p-4 text-center text-gray-500">Limited (extra cost)</td>
                    </tr>
                    <tr>
                      <td className="border p-4">Instant Answer (no hold)</td>
                      <td className="border p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="border p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="border p-4">Book Appointments</td>
                      <td className="border p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="border p-4 text-center text-gray-500">Basic only</td>
                    </tr>
                    <tr>
                      <td className="border p-4">Answer FAQs</td>
                      <td className="border p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="border p-4 text-center text-gray-500">Script-based</td>
                    </tr>
                    <tr>
                      <td className="border p-4">Human-like Conversation</td>
                      <td className="border p-4 text-center text-gray-500">Very good</td>
                      <td className="border p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="border p-4">Handle Complex Issues</td>
                      <td className="border p-4 text-center text-gray-500">Transfers to you</td>
                      <td className="border p-4 text-center text-gray-500">Transfers to you</td>
                    </tr>
                    <tr>
                      <td className="border p-4">Scalability</td>
                      <td className="border p-4 text-center"><Check className="w-5 h-5 text-green-500 mx-auto" /></td>
                      <td className="border p-4 text-center"><X className="w-5 h-5 text-red-500 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Cost Comparison (AUD)
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-accent-50 rounded-xl p-6">
                  <h3 className="font-bold text-primary-500 mb-4">AI Voice Agent</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Monthly: <strong>$497-$997</strong></li>
                    <li>24/7 included: <strong>Yes</strong></li>
                    <li>Per-minute fees: <strong>Included (up to limit)</strong></li>
                    <li>Setup: <strong>$500-$1,000 one-time</strong></li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-primary-500 mb-4">Virtual Receptionist</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Monthly: <strong>$300-$800+</strong></li>
                    <li>24/7 included: <strong>Extra $200-400/mo</strong></li>
                    <li>Per-minute fees: <strong>$0.80-$1.50/min often extra</strong></li>
                    <li>Setup: <strong>Usually free</strong></li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                When to Choose AI
              </h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>You need 24/7 coverage without huge extra costs</li>
                <li>Most calls are routine (bookings, basic questions)</li>
                <li>You want instant answer with no hold times</li>
                <li>You need to scale without adding cost per call</li>
                <li>You want integration with your calendar/CRM</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                When to Choose Virtual Receptionist
              </h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Most calls require complex human judgment</li>
                <li>Your customers strongly prefer human interaction</li>
                <li>You only need coverage during business hours</li>
                <li>You have very low call volume (&lt;50 calls/month)</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                The Verdict
              </h2>
              <p className="text-gray-600 mb-4">
                For most small businesses, AI voice agents now offer better value. The technology
                has improved dramatically - callers often can&apos;t tell they&apos;re talking to AI. And
                the 24/7 availability without extra cost is a game-changer.
              </p>
              <p className="text-gray-600 mb-4">
                That said, the best solution depends on your specific situation. If you&apos;re unsure,
                we&apos;re happy to chat through your needs and give an honest recommendation.
              </p>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Not Sure Which is Right for You?</h3>
                <p className="text-white/90 mb-6">
                  Book a free consultation and we&apos;ll help you decide.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
