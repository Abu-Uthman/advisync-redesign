import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "The Complete Guide to AI Automation for Small Business | Advisync",
  description:
    "Everything you need to know about implementing AI automation in your business, from basics to advanced strategies.",
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
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Guides</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>January 7, 2026</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              The Complete Guide to AI Automation for Small Business
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
                AI automation isn&apos;t just for big corporations anymore. Small businesses across 
                Australia are using AI to save time, reduce costs, and grow faster. Here&apos;s 
                everything you need to know to get started.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                What is AI Automation?
              </h2>
              <p className="text-gray-600 mb-4">
                AI automation uses artificial intelligence to handle repetitive tasks without 
                human intervention. Unlike basic automation (like email auto-responders), AI 
                can understand context, make decisions, and handle complex situations.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Types of AI Automation for Small Business
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                1. AI Voice Agents
              </h3>
              <p className="text-gray-600 mb-4">
                Answer calls 24/7, book appointments, handle inquiries, and route urgent calls. 
                Perfect for tradies, healthcare, and service businesses.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                2. Workflow Automation
              </h3>
              <p className="text-gray-600 mb-4">
                Connect your apps and automate multi-step processes. Example: When a form is 
                submitted, create a CRM record, send a confirmation email, and add to your 
                calendar automatically.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                3. AI Chatbots
              </h3>
              <p className="text-gray-600 mb-4">
                Handle website inquiries, answer FAQs, and capture leads while you sleep. 
                Modern AI chatbots understand natural language and provide helpful responses.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                4. Document Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Extract data from invoices, receipts, and forms automatically. Reduce manual 
                data entry and eliminate errors.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Where to Start: The 80/20 Rule
              </h2>
              <p className="text-gray-600 mb-4">
                Focus on the 20% of tasks that consume 80% of your time. For most small 
                businesses, that&apos;s:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Answering phone calls and inquiries</li>
                <li>Scheduling and appointment management</li>
                <li>Following up with leads</li>
                <li>Sending quotes and invoices</li>
                <li>Data entry and record keeping</li>
              </ul>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8">
                <h3 className="font-bold text-primary-500 mb-4">Quick Wins to Start With</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">AI voice agent for after-hours calls</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">Automated appointment reminders</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-600">Lead capture to CRM automation</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Implementation Roadmap
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Phase 1: Foundation (Week 1-2)
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Audit your current processes</li>
                <li>Identify biggest time-wasters</li>
                <li>Choose your first automation target</li>
                <li>Select the right tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Phase 2: Implementation (Week 2-4)
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Set up your first automation</li>
                <li>Test thoroughly</li>
                <li>Train your team</li>
                <li>Go live with monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Phase 3: Optimization (Ongoing)
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Review performance metrics</li>
                <li>Refine and improve</li>
                <li>Expand to new areas</li>
                <li>Scale what works</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Common Mistakes to Avoid
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Automating everything at once:</strong> Start small, prove value, then expand</li>
                <li><strong>Ignoring the human touch:</strong> AI should enhance, not replace, customer relationships</li>
                <li><strong>Skipping the testing phase:</strong> Always test before going live</li>
                <li><strong>Not measuring results:</strong> Track ROI to justify continued investment</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Expected ROI
              </h2>
              <p className="text-gray-600 mb-4">
                Most small businesses see:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>40-60% reduction in time spent on administrative tasks</li>
                <li>20-30% increase in lead conversion rates</li>
                <li>100% call answer rate (with AI voice agents)</li>
                <li>3-6 month payback period on automation investments</li>
              </ul>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Business?</h3>
                <p className="text-white/90 mb-6">
                  Book a free consultation and get a custom automation roadmap for your business.
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
