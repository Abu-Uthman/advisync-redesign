import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "5 Signs Your Business is Losing Money from Missed Calls | Advisync",
  description:
    "If you're missing calls, you're missing revenue. Here's how to calculate exactly how much those missed calls are costing you.",
};

export default function BlogPost() {
  return (
    <main className="pt-20">
      {/* Hero with Image */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/blog/missed-calls.webp"
            alt="Business owner missing phone call"
            fill
            className="object-cover"
            priority
          />
        </div>
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
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Business Growth</span>
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>January 28, 2026</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              5 Signs Your Business is Losing Money from Missed Calls
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
                Every missed call is a missed opportunity. But how do you know if missed calls are
                actually hurting your bottom line? Here are the five telltale signs.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                1. You&apos;re Finding Voicemails from Potential Customers
              </h2>
              <p className="text-gray-600 mb-4">
                If you regularly discover voicemails from people asking about your services, that&apos;s
                money walking away. Studies show that <strong>85% of people won&apos;t leave a voicemail</strong>,
                and of those who do, <strong>80% won&apos;t call back</strong> if you don&apos;t respond within
                an hour.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                2. Your Competitors Are Growing Faster
              </h2>
              <p className="text-gray-600 mb-4">
                When a customer can&apos;t reach you, they call your competitor. If similar businesses
                in your area are growing while you&apos;re stagnating, poor call handling might be the
                hidden culprit.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                3. Customers Mention They Had Trouble Reaching You
              </h2>
              <p className="text-gray-600 mb-4">
                If even one customer mentions they tried calling multiple times before getting
                through, imagine how many gave up entirely. For every complaint you hear, there
                are typically 26 others who stayed silent.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                4. You&apos;re Too Busy Working to Answer the Phone
              </h2>
              <p className="text-gray-600 mb-4">
                This is the classic tradie dilemma: you can&apos;t answer the phone while you&apos;re on a
                job, but those calls could be your next job. If your hands are too dirty or you&apos;re
                in the middle of something important, those calls go unanswered.
              </p>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                5. You Don&apos;t Know How Many Calls You&apos;re Missing
              </h2>
              <p className="text-gray-600 mb-4">
                The scariest sign is having no idea. If you don&apos;t track your call metrics, you
                could be losing thousands of dollars monthly without realising it.
              </p>

              <div className="bg-accent-50 border border-accent-200 rounded-xl p-6 my-8">
                <h3 className="font-bold text-primary-500 mb-2">Calculate Your Lost Revenue</h3>
                <p className="text-gray-600 mb-4">
                  Quick formula: <strong>Missed calls per month × Average job value × 0.3</strong> (assuming
                  30% of calls would have converted).
                </p>
                <p className="text-gray-600">
                  For a plumber missing 50 calls/month with an average job of $400: 50 × $400 × 0.3 =
                  <strong> $6,000/month in lost revenue</strong>.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">
                The Solution: Never Miss Another Call
              </h2>
              <p className="text-gray-600 mb-4">
                AI voice agents answer every call, 24/7. They sound natural, book appointments,
                capture lead details, and only transfer urgent calls to you. It&apos;s like having a
                receptionist who never sleeps.
              </p>

              <div className="bg-primary-500 text-white rounded-xl p-8 my-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Stop Losing Money to Missed Calls</h3>
                <p className="text-white/90 mb-6">
                  Book a free consultation and see how much revenue you could recover.
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
