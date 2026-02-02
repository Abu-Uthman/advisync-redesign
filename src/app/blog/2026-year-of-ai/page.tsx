import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Why 2026 is the Year of AI | Advisync",
  description: "Why Australian businesses need to adopt AI now to stay competitive.",
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
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Industry Trends</span>
              <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>December 30, 2025</span></span>
              <span className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>5 min read</span></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Why 2026 is the Year to Adopt AI</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">AI technology has reached a tipping point. Here's why waiting any longer could put you behind.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">1. AI is Now Affordable</h2>
              <p className="text-gray-600 mb-4">What cost $10,000 a year ago now costs $500. The barrier to entry has never been lower.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">2. Your Competitors Are Using It</h2>
              <p className="text-gray-600 mb-4">Early adopters are already capturing market share with faster response times and lower costs.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">3. Customer Expectations Have Changed</h2>
              <p className="text-gray-600 mb-4">Customers now expect instant responses. AI delivers that 24/7.</p>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Don't Get Left Behind</h3>
                <Link href="/contact" className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600">Get Started Today</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
