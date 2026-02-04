"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Join 50+ Australian businesses already using AI to grow faster. Book your free consultation today and discover how AI can work for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-all hover:scale-105 hover:shadow-lg"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0432405388"
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              <Phone className="w-5 h-5" />
              <span>0432 405 388</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hello@advisync.com.au</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
            <span>Melbourne, Australia</span>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full" />
            <span>ABN: XX XXX XXX XXX</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
