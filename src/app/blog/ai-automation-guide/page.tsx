import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation Guide | Advisync",
  description: "Complete guide to AI automation for Australian small businesses.",
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
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Guides</span>
              <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>January 7, 2026</span></span>
              <span className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>10 min read</span></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">The Complete Guide to AI Automation</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">Everything you need to know about implementing AI automation in your business.</p>
              
              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">What is AI Automation?</h2>
              <p className="text-gray-600 mb-4">AI automation uses artificial intelligence to handle repetitive tasks that would normally require human effort.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Getting Started</h2>
              <ol className="list-decimal pl-6 text-gray-600 mb-4 space-y-2">
                <li>Identify repetitive tasks in your workflow</li>
                <li>Choose the right AI tools for your needs</li>
                <li>Start with one automation at a time</li>
                <li>Measure results and iterate</li>
              </ol>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Automate?</h3>
                <Link href="/contact" className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600">Book Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
