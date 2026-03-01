"use client";

import { motion } from "framer-motion";
import { Shield, MapPin, Mic, Scale, Heart, Wrench } from "lucide-react";

const industries = [
  {
    icon: Scale,
    title: "Law Firms & Legal Practices",
    description:
      "Never miss a prospective client call. AI intake, appointment booking, and after-hours triage — with the discretion your practice demands.",
  },
  {
    icon: Heart,
    title: "NDIS Providers & Disability Services",
    description:
      "Handle participant enquiries 24/7. Automate intake, scheduling, and plan coordination calls while staying NDIS-compliant.",
  },
  {
    icon: Wrench,
    title: "Local Service Businesses",
    description:
      "Tradies, dental clinics, real estate agents — capture every lead while you're on the job, with a patient, or off the clock.",
  },
];

const trustSignals = [
  {
    icon: MapPin,
    title: "100% Australian Data Compliance",
    description: "Your data stays onshore. No offshore processing, no exceptions.",
  },
  {
    icon: Shield,
    title: "Secure Onshore Call Routing",
    description:
      "All calls routed through Australian infrastructure. Enterprise-grade encryption on every conversation.",
  },
  {
    icon: Mic,
    title: "Natural Australian Accents",
    description:
      "Your callers hear a familiar, professional Australian voice — not a generic international bot.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Built for Businesses That Can&apos;t Afford to Miss a Call
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Purpose-built AI voice agents for high-compliance Australian industries where trust,
            privacy, and professionalism are non-negotiable.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
                <industry.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary-500 mb-3">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-primary-500 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Your Data. Your Calls. 100% Australian.
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-7 h-7 text-accent-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{signal.title}</h4>
                <p className="text-gray-300 text-sm">{signal.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
