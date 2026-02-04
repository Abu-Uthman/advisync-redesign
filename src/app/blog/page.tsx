import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Advisync - AI Insights for Australian Businesses",
  description:
    "Tips, guides, and insights on AI voice agents, automation, and growing your Australian business with artificial intelligence.",
};

const posts = [
  {
    title: "5 Signs Your Business is Losing Money from Missed Calls",
    excerpt:
      "If you're missing calls, you're missing revenue. Here's how to calculate exactly how much those missed calls are costing you.",
    date: "January 28, 2026",
    category: "Business Growth",
    slug: "missed-calls-costing-money",
    image: "/blog/missed-calls.webp",
  },
  {
    title: "AI Voice Agents vs Virtual Receptionists: Which is Right for You?",
    excerpt:
      "Comparing the costs, capabilities, and results of AI voice agents versus traditional virtual receptionist services.",
    date: "January 21, 2026",
    category: "AI Technology",
    slug: "ai-voice-agents-vs-virtual-receptionists",
    image: "/blog/comparison.webp",
  },
  {
    title: "How Melbourne Tradies Are Using AI to Book More Jobs",
    excerpt:
      "Real stories from plumbers, electricians, and builders who've transformed their businesses with AI automation.",
    date: "January 14, 2026",
    category: "Case Studies",
    slug: "melbourne-tradies-ai",
    image: "/blog/tradies.webp",
  },
  {
    title: "The Complete Guide to AI Automation for Small Business",
    excerpt:
      "Everything you need to know about implementing AI automation in your business, from basics to advanced strategies.",
    date: "January 7, 2026",
    category: "Guides",
    slug: "ai-automation-guide",
    image: "/blog/automation.webp",
  },
  {
    title: "Why 2026 is the Year to Adopt AI for Your Business",
    excerpt:
      "AI technology has reached a tipping point. Here's why waiting any longer could put you behind your competitors.",
    date: "December 30, 2025",
    category: "Industry Trends",
    slug: "2026-year-of-ai",
    image: "/blog/2026-ai.webp",
  },
  {
    title: "Setting Up Your First AI Voice Agent: A Step-by-Step Guide",
    excerpt:
      "A practical walkthrough of what to expect when implementing an AI voice agent for your business.",
    date: "December 23, 2025",
    category: "Guides",
    slug: "first-ai-voice-agent-setup",
    image: "/blog/setup-guide.webp",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-white/90">
              Insights, guides, and tips on using AI to grow your Australian business.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image src={post.image} alt={post.title} width={400} height={192} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-accent-100 text-accent-600 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-primary-500 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-1 text-accent-500 font-medium hover:text-accent-600"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-primary-500 mb-4">
            Want AI Tips Delivered to Your Inbox?
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for weekly insights on AI and automation.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
            />
            <button type="submit" className="btn-primary px-6 py-3">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
