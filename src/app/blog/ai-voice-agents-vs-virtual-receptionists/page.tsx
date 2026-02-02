import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Voice Agents vs Virtual Receptionists | Advisync",
  description: "Comparing AI voice agents vs traditional virtual receptionists for Australian businesses.",
};

export default function BlogPost() {
  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="relative container-custom section-padding">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 text-white/80 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI Technology</span>
              <span className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>January 21, 2026</span></span>
              <span className="flex items-center space-x-1"><Clock className="w-4 h-4" /><span>7 min read</span></span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">AI Voice Agents vs Virtual Receptionists: Which is Right for You?</h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">Both AI voice agents and traditional virtual receptionists can answer your calls. But they work very differently, cost very differently, and deliver very different results.</p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">Feature Comparison</h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border p-3 text-left">Feature</th>
                      <th className="border p-3 text-center">AI Voice Agent</th>
                      <th className="border p-3 text-center">Virtual Receptionist</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border p-3">24/7 Availability</td><td className="border p-3 text-center"><Check className="w-5 h-5 text-green-500 mx-auto"/></td><td className="border p-3 text-center text-gray-500">Extra cost</td></tr>
                    <tr><td className="border p-3">Instant Answer</td><td className="border p-3 text-center"><Check className="w-5 h-5 text-green-500 mx-auto"/></td><td className="border p-3 text-center"><X className="w-5 h-5 text-red-500 mx-auto"/></td></tr>
                    <tr><td className="border p-3">Book Appointments</td><td className="border p-3 text-center"><Check className="w-5 h-5 text-green-500 mx-auto"/></td><td className="border p-3 text-center text-gray-500">Basic only</td></tr>
                    <tr><td className="border p-3">Cost (monthly)</td><td className="border p-3 text-center">$497-997 AUD</td><td className="border p-3 text-center">$300-800+ AUD</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">The Verdict</h2>
              <p className="text-gray-600 mb-4">For most small businesses, AI voice agents now offer better value. The technology has improved dramatically - callers often cannot tell they are talking to AI.</p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-accent-50 rounded-xl p-6">
                  <h3 className="font-bold text-primary-500 mb-4">Choose AI If:</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• You need 24/7 coverage</li>
                    <li>• Most calls are routine</li>
                    <li>• You want instant answers</li>
                    <li>• You use calendar/CRM software</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-primary-500 mb-4">Choose Human If:</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Calls need complex judgment</li>
                    <li>• Customers prefer humans</li>
                    <li>• Only business hours needed</li>
                    <li>• Very low call volume</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Not Sure Which is Right?</h3>
                <Link href="/contact" className="inline-block bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600">Book Free Consultation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
