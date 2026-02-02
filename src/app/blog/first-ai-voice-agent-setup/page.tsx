import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "First AI Voice Agent Setup | Advisync",
  description: "Step-by-step guide to setting up your first AI voice agent.",
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
              <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>December 23, 2025</span></span>
              <span className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>8 min read</span></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Setting Up Your First AI Voice Agent</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">A practical walkthrough of what to expect when implementing an AI voice agent.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Step 1: Discovery Call</h2>
              <p className="text-gray-600 mb-4">We start by understanding your business, common caller questions, and how you want calls handled.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Step 2: Script Development</h2>
              <p className="text-gray-600 mb-4">We create conversation flows that match your brand voice and handle your typical scenarios.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Step 3: Integration</h2>
              <p className="text-gray-600 mb-4">Connect your calendar, CRM, and phone number so the AI can take real actions.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Step 4: Testing</h2>
              <p className="text-gray-600 mb-4">We test with real calls and refine based on results until it's perfect.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Step 5: Go Live</h2>
              <p className="text-gray-600 mb-4">Your AI voice agent starts answering real calls. We monitor and optimize continuously.</p>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Set Up Your AI Agent?</h3>
                <Link href="/contact" className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600">Book Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
