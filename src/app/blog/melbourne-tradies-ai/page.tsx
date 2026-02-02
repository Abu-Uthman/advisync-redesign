import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "How Melbourne Tradies Are Using AI to Book More Jobs | Advisync",
  description:
    "Real stories from plumbers, electricians, and builders who've transformed their businesses with AI automation.",
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
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Case Studies</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>January 14, 2026</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              How Melbourne Tradies Are Using AI to Book More Jobs
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-primary-100 to-accent-100">
              <Image
                src="/blog/tradies.webp"
                alt="Melbourne tradie using AI scheduling"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Melbourne&apos;s tradies are some of the busiest people in Australia. Between jobs,
                driving across the city, and managing paperwork, answering every phone call is
                nearly impossible. Here&apos;s how three local tradies solved this problem with AI.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Mike - Plumber, Eastern Suburbs
              </h2>
              <p className="text-gray-600 mb-4">
                Mike runs a one-man plumbing business in the Eastern suburbs. Before AI, he
                estimates he was missing about 40% of his calls while on jobs.
              </p>
              <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 my-4">
                &quot;I&apos;d be under a sink with my hands covered in you-know-what, and my phone would
                ring. By the time I could answer, they&apos;d hung up and called someone else.&quot;
              </blockquote>
              <p className="text-gray-600 mb-4">
                After implementing an AI voice agent, Mike&apos;s bookings increased by 35% in the
                first month. The AI answers every call, gets the job details, and books straight
                into his ServiceM8 calendar.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Sarah - Electrician, Western Melbourne
              </h2>
              <p className="text-gray-600 mb-4">
                Sarah runs a small electrical business with two employees. Her biggest pain point
                was after-hours calls - she was losing emergency jobs to competitors who answered
                faster.
              </p>
              <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 my-4">
                &quot;Emergency calls at 10pm were going to voicemail. Those are $500+ jobs going to
                whoever answers first. Now my AI handles them 24/7.&quot;
              </blockquote>
              <p className="text-gray-600 mb-4">
                Sarah&apos;s AI agent now captures after-hours emergencies, provides rough quotes, and
                either books them for the next morning or alerts Sarah for genuine emergencies
                that need immediate attention.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Dave - Builder, Northern Suburbs
              </h2>
              <p className="text-gray-600 mb-4">
                Dave manages multiple building projects across Melbourne&apos;s north. His problem
                wasn&apos;t just missed calls - it was the time spent answering the same questions
                about quotes and availability.
              </p>
              <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 my-4">
                &quot;I was spending two hours a day just on phone calls. Same questions, over and
                over. Now the AI handles all that, and I only talk to serious leads.&quot;
              </blockquote>
              <p className="text-gray-600 mb-4">
                Dave&apos;s AI agent pre-qualifies leads by asking about project scope, budget, and
                timeline. Only qualified leads get through to Dave directly, saving him 10+
                hours per week.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="font-bold text-primary-500 mb-4">The Numbers</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent-500">35-45%</div>
                    <div className="text-sm text-gray-600">More bookings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-500">10+ hrs</div>
                    <div className="text-sm text-gray-600">Saved weekly</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-500">100%</div>
                    <div className="text-sm text-gray-600">Calls answered</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                How It Works for Tradies
              </h2>
              <p className="text-gray-600 mb-4">
                An AI voice agent for tradies typically handles:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Answering calls 24/7 (you set quiet hours if needed)</li>
                <li>Capturing job details - what, where, when</li>
                <li>Providing rough quotes for standard jobs</li>
                <li>Booking appointments into your existing calendar</li>
                <li>Qualifying leads before they reach you</li>
                <li>Handling after-hours emergencies appropriately</li>
              </ul>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Book More Jobs?</h3>
                <p className="text-white/90 mb-6">
                  See how AI can work for your trade business with a free consultation.
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
