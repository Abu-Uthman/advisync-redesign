"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Workflow, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    description:
      "Never miss a call again. Our AI agents answer calls 24/7, handle inquiries, book appointments, and capture leads naturally.",
    features: ["24/7 availability", "Natural conversations", "Instant bookings", "Lead capture"],
    href: "/services/ai-voice-agents",
    color: "bg-blue-500",
  },
  {
    icon: Workflow,
    title: "AI Automations",
    description:
      "Streamline your workflows with intelligent automation. Connect your apps, reduce manual tasks, and scale your operations.",
    features: ["Workflow automation", "App integrations", "Smart triggers", "Time savings"],
    href: "/services/ai-automations",
    color: "bg-purple-500",
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description:
      "Bespoke AI systems tailored to your unique business needs. From chatbots to data analysis, we build what you need.",
    features: ["Custom development", "AI chatbots", "Data analysis", "API integrations"],
    href: "/services/custom-ai-solutions",
    color: "bg-accent-500",
  },
];

export function ServicesSection() {
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
            Our AI Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI services designed to transform how Australian businesses operate and grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-2xl p-8 card-hover"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-primary-500 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.href}
                className="inline-flex items-center space-x-2 text-accent-500 font-medium hover:text-accent-600 transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
