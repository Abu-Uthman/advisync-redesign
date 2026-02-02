import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "How Melbourne Tradies Use AI | Advisync",
  description: "Real stories from Melbourne tradies using AI voice agents to book more jobs.",
};

export default function BlogPost() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom section-padding">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 text-white/80 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Case Studies</span>
              <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>January 14, 2026</span></span>
              <span className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>6 min read</span></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">How Melbourne Tradies Are Using AI to Book More Jobs</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">Melbourne's tradies are some of the busiest people in Australia. Here's how three local tradies solved their missed call problem with AI.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Mike - Plumber, Eastern Suburbs</h2>
              <p className="text-gray-600 mb-4">Mike runs a one-man plumbing business. Before AI, he was missing about 40% of calls while on jobs.</p>
              <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 my-4">"I'd be under a sink and my phone would ring. By the time I could answer, they'd hung up and called someone else."</blockquote>
              <p className="text-gray-600 mb-4">After implementing an AI voice agent, Mike's bookings increased by 35% in the first month.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Sarah - Electrician, Western Melbourne</h2>
              <p className="text-gray-600 mb-4">Sarah's biggest pain point was after-hours calls - she was losing emergency jobs to competitors.</p>
              <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 my-4">"Emergency calls at 10pm were going to voicemail. Those are $500+ jobs going to whoever answers first."</blockquote>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Dave - Builder, Northern Suburbs</h2>
              <p className="text-gray-600 mb-4">Dave was spending two hours a day just on phone calls answering the same questions.</p>
              <blockquote className="border-l-4 border-accent-500 pl-4 italic text-gray-600 my-4">"Same questions, over and over. Now the AI handles all that, and I only talk to serious leads."</blockquote>

              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <h3 className="font-bold text-primary-500 mb-4 text-center">The Results</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div><div className="text-3xl font-bold text-accent-500">35-45%</div><div className="text-sm text-gray-600">More bookings</div></div>
                  <div><div className="text-3xl font-bold text-accent-500">10+ hrs</div><div className="text-sm text-gray-600">Saved weekly</div></div>
                  <div><div className="text-3xl font-bold text-accent-500">100%</div><div className="text-sm text-gray-600">Calls answered</div></div>
                </div>
              </div>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Book More Jobs?</h3>
                <Link href="/contact" className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600">Book Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
