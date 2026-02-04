import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Setting Up Your First AI Voice Agent: A Step-by-Step Guide | Advisync",
  description:
    "A practical walkthrough of what to expect when implementing an AI voice agent for your business.",
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
                <span>December 23, 2025</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Setting Up Your First AI Voice Agent: A Step-by-Step Guide
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
                Ready to stop missing calls and start capturing more leads? Here&apos;s exactly 
                what to expect when setting up your first AI voice agent, from initial 
                consultation to going live.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                What You&apos;ll Need Before You Start
              </h2>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Your business phone number (or willingness to get a new one)</li>
                <li>List of common questions your customers ask</li>
                <li>Your calendar system (Google Calendar, Outlook, etc.)</li>
                <li>Basic understanding of your booking process</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Step 1: Discovery Call (30 minutes)
              </h2>
              <p className="text-gray-600 mb-4">
                We start with a conversation to understand your business:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>What services do you offer?</li>
                <li>What questions do callers typically ask?</li>
                <li>How do you currently handle appointments?</li>
                <li>What should happen with urgent calls?</li>
                <li>What tone/personality should the AI have?</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Step 2: Script Development (1-2 days)
              </h2>
              <p className="text-gray-600 mb-4">
                Based on the discovery call, we create conversation flows for your AI:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li><strong>Greeting:</strong> How the AI introduces itself</li>
                <li><strong>Service inquiries:</strong> Answering questions about what you do</li>
                <li><strong>Appointment booking:</strong> Capturing details and scheduling</li>
                <li><strong>Emergency handling:</strong> Routing urgent calls to you</li>
                <li><strong>FAQ responses:</strong> Answering common questions</li>
                <li><strong>Closing:</strong> Professional call wrap-up</li>
              </ul>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8">
                <h3 className="font-bold text-primary-500 mb-2">Example Script Snippet</h3>
                <p className="text-gray-600 italic">
                  &quot;Thanks for calling Melbourne Plumbing Services. This is Sam, your AI 
                  assistant. I can help you book an appointment, answer questions about our 
                  services, or connect you with our team for urgent matters. How can I help 
                  you today?&quot;
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Step 3: Voice Selection
              </h2>
              <p className="text-gray-600 mb-4">
                Choose the voice that represents your business:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Male or female voice</li>
                <li>Australian accent (we always recommend local accents)</li>
                <li>Tone: Professional, friendly, casual, or warm</li>
                <li>Speaking pace: Standard or adjusted for your industry</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Step 4: Integration Setup (1-2 days)
              </h2>
              <p className="text-gray-600 mb-4">
                Connect the AI to your existing systems:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Calendar Integration
              </h3>
              <p className="text-gray-600 mb-4">
                The AI checks your real-time availability before booking appointments. 
                Supports Google Calendar, Outlook, Calendly, and most scheduling tools.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                CRM Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Call details and new leads automatically saved to your CRM. No manual 
                data entry required.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                Phone System Setup
              </h3>
              <p className="text-gray-600 mb-4">
                Either forward your existing number to the AI, or get a new number. 
                Most businesses choose call forwarding so they keep their existing number.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Step 5: Testing Phase (1-2 days)
              </h2>
              <p className="text-gray-600 mb-4">
                Before going live, we thoroughly test:
              </p>
              <div className="space-y-3 my-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Multiple test calls with different scenarios</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Appointment booking flow</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Emergency call routing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Calendar sync verification</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">CRM data capture</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Step 6: Go Live!
              </h2>
              <p className="text-gray-600 mb-4">
                Once testing is complete, we flip the switch:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>AI starts answering calls immediately</li>
                <li>You receive summaries of each call</li>
                <li>Appointments appear in your calendar automatically</li>
                <li>Urgent calls still come through to you directly</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Step 7: Optimization (Ongoing)
              </h2>
              <p className="text-gray-600 mb-4">
                After the first week, we review call recordings and refine:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                <li>Add responses for questions we didn&apos;t anticipate</li>
                <li>Adjust tone based on customer feedback</li>
                <li>Optimize conversion rates</li>
                <li>Add new features as needed</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                Timeline Summary
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 my-8">
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Discovery Call</span>
                    <span className="font-semibold">Day 1</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Script Development</span>
                    <span className="font-semibold">Days 2-3</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Integration Setup</span>
                    <span className="font-semibold">Days 4-5</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Testing</span>
                    <span className="font-semibold">Days 6-7</span>
                  </li>
                  <li className="flex justify-between border-t pt-3 mt-3">
                    <span className="text-gray-800 font-semibold">Go Live</span>
                    <span className="font-bold text-primary-500">~1 Week</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/90 mb-6">
                  Book a free discovery call and let&apos;s discuss how an AI voice agent can 
                  work for your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                >
                  Book Free Discovery Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
