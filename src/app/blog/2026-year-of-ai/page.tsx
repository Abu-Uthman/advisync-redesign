import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Why 2026 is the Year to Adopt AI for Your Business | Advisync",
  description:
    "AI technology has reached a tipping point. Here's why waiting any longer could put you behind your competitors.",
};

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="relative container-custom section-padding">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 text-white/80 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Industry Trends</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>December 30, 2025</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Why 2026 is the Year to Adopt AI for Your Business
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
                AI technology has reached a tipping point. The tools are mature, affordable, and 
                proven. Here&apos;s why waiting any longer could put you behind your competitors.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                The AI Tipping Point
              </h2>
              <p className="text-gray-600 mb-4">
                2025 saw AI move from &quot;interesting tech demo&quot; to &quot;essential business tool.&quot; Voice AI 
                can now hold natural conversations. Automation tools can handle complex workflows. 
                And the costs have dropped to where any small business can afford them.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Your Competitors Are Already Moving
              </h2>
              <p className="text-gray-600 mb-4">
                Early adopters in every industry are gaining advantages: better customer service, 
                lower costs, faster response times. The longer you wait, the harder it becomes 
                to catch up.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                What&apos;s Changed in 2026
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Voice AI sounds natural:</strong> No more robotic responses</li>
                <li><strong>Setup is simple:</strong> Days, not months to implement</li>
                <li><strong>Costs are reasonable:</strong> Less than hiring staff</li>
                <li><strong>Integration works:</strong> Connects to your existing tools</li>
                <li><strong>Results are proven:</strong> Real ROI data from real businesses</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                The Cost of Waiting
              </h2>
              <p className="text-gray-600 mb-4">
                Every month without AI costs you in missed calls, lost leads, and wasted time on 
                repetitive tasks. A typical tradie loses $3,000-5,000 monthly from missed calls alone. 
                That&apos;s $36,000-60,000 per year walking out the door.
              </p>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8">
                <h3 className="font-bold text-primary-500 mb-2">Quick Math</h3>
                <p className="text-gray-600">
                  AI voice agent: $299/month = $3,588/year<br />
                  Revenue recovered: $36,000+ per year<br />
                  <strong>ROI: 10x your investment</strong>
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Start Small, Scale Fast
              </h2>
              <p className="text-gray-600 mb-4">
                You don&apos;t need to transform everything at once. Start with one AI solution — 
                like a voice agent for calls — see the results, then expand. Most businesses 
                see positive ROI within the first month.
              </p>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Make 2026 Your AI Year?</h3>
                <p className="text-white/90 mb-6">
                  Book a free consultation and see how AI can transform your business.
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
