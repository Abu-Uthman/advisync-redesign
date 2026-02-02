"use client";

import { motion } from "framer-motion";
import { MessageSquare, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business, challenges, and goals. No obligation, just insights.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Custom Setup",
    description:
      "Our team builds and configures your AI solution tailored to your specific needs. We handle all the technical work.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Support",
    description:
      "Go live with confidence. We provide training, ongoing support, and continuous optimization to ensure success.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-primary-500 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Getting started with AI is simple. Our streamlined process gets you up and running in no time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-white/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-primary-500" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
