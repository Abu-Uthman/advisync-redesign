import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, Cpu, MessageSquare, Database, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom AI Solutions | Advisync - Bespoke AI for Your Business",
  description:
    "Tailored AI solutions built specifically for your unique business needs. From custom chatbots to data analysis, we build what you need.",
};

const solutions = [
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Custom chatbots for your website that answer questions, qualify leads, and provide 24/7 customer support.",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description:
      "AI-powered analysis of your business data to uncover insights, trends, and opportunities you might be missing.",
  },
  {
    icon: Code,
    title: "Custom Integrations",
    description:
      "Connect your existing systems with AI. We build custom integrations that work with your specific tech stack.",
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description:
      "Complex multi-step automations that go beyond simple triggers. True intelligent automation for complex workflows.",
  },
  {
    icon: Shield,
    title: "AI Compliance Tools",
    description:
      "AI-powered tools to help with compliance, document processing, and risk assessment.",
  },
  {
    icon: Sparkles,
    title: "Bespoke AI Agents",
    description:
      "Fully custom AI agents built for your specific use case. If you can imagine it, we can probably build it.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, challenges, and what you're trying to achieve.",
  },
  {
    step: "02",
    title: "Solution Design",
    description: "We design a custom solution and provide a detailed proposal with timeline and cost.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your solution with regular progress updates along the way.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your solution and provide training and ongoing support.",
  },
];

export default function CustomAISolutionsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Custom AI Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Built Specifically for Your Business
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Off-the-shelf solutions don't fit every business. When you need something unique,
              we build it from scratch - tailored to your exact requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">What We Can Build</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are some examples - but if you have something else in mind, just ask.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="font-bold text-primary-500 mb-2">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we take your idea from concept to reality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-primary-500 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-500 mb-6">Custom Project Pricing</h2>
            <p className="text-gray-600 mb-8">
              Every custom project is different, so pricing depends on scope and complexity.
              Typical custom projects range from <strong>$3,000 - $15,000 AUD</strong> for initial
              development, plus optional ongoing support.
            </p>
            <p className="text-gray-600 mb-8">
              We provide a detailed quote after our discovery call - no surprises, no hidden costs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 btn-primary px-8 py-4"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Got a Unique Challenge?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Tell us what you're trying to achieve. Even if it seems impossible, we might have a
            solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
