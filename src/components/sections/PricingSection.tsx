"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$497",
    period: "/month",
    description: "Perfect for small businesses getting started with AI",
    features: [
      "1 AI Voice Agent",
      "Basic workflow automations",
      "500 call minutes/month",
      "Email support",
      "Basic analytics",
      "Standard integrations",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$997",
    period: "/month",
    description: "For growing businesses that need more power",
    features: [
      "3 AI Voice Agents",
      "Advanced automations",
      "2,000 call minutes/month",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "A/B testing",
      "Dedicated account manager",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited AI Agents",
      "Custom AI solutions",
      "Unlimited call minutes",
      "24/7 premium support",
      "Enterprise analytics",
      "API access",
      "Custom development",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include setup, training, and ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-accent-500 shadow-xl scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-primary-500 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center space-x-1">
                  <span className="text-4xl font-bold text-primary-500">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? "btn-primary"
                    : "bg-primary-50 text-primary-500 hover:bg-primary-100"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
