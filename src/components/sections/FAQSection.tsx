"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does an AI voice agent work?",
    answer:
      "Our AI voice agents use advanced natural language processing to understand and respond to callers naturally. They can answer questions, book appointments, capture leads, and route calls to the right team member when needed. The AI learns from each interaction to improve over time.",
  },
  {
    question: "Will the AI sound robotic to my customers?",
    answer:
      "Not at all! Our AI agents use the latest text-to-speech technology that sounds natural and professional. We customize the voice and personality to match your brand. Most callers can't tell they're talking to an AI.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most businesses are up and running within 1-2 weeks. This includes the discovery call, custom configuration, testing, and training. More complex implementations may take 3-4 weeks.",
  },
  {
    question: "Can the AI integrate with my existing systems?",
    answer:
      "Yes! We integrate with most popular CRMs, booking systems, and business tools including ServiceM8, Cliniko, HubSpot, Calendly, and many more. We also offer custom API integrations for enterprise clients.",
  },
  {
    question: "What happens if the AI can't answer a question?",
    answer:
      "The AI is trained to recognize when it can't help and will smoothly transfer the call to a human team member or take a message. You can customize these fallback behaviors based on your preferences.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption and follow Australian privacy laws (Privacy Act 1988). Your data is stored securely in Australian data centers, and we never share your information with third parties.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We&apos;ve got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-50 transition-colors group">
                  <span className="font-semibold text-primary-500 pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
