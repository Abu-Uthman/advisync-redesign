"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Zap, Bot } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-accent-500" />
              <span>Trusted by 50+ Australian Businesses</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 leading-tight mb-6">
              Transform Your Business with{" "}
              <span className="gradient-text">AI</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Never miss another customer call. Our AI voice agents, automations, and custom solutions help Australian businesses grow 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-500 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-500">98%</div>
                <div className="text-sm text-gray-500">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-500">24/7</div>
                <div className="text-sm text-gray-500">AI Availability</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-500">50+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image */}
            <div className="absolute inset-0 -z-10 opacity-20">
              <Image
                src="/hero-main.webp"
                alt="AI Voice Agent"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div className="relative bg-gradient-to-br from-primary-500/95 to-primary-600/95 rounded-3xl p-8 shadow-2xl">
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <Phone className="w-8 h-8 text-accent-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <Bot className="w-8 h-8 text-primary-500" />
              </motion.div>

              {/* Main visual content */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white font-medium">AI Agent Active</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-white/80 text-sm">Incoming call from...</p>
                    <p className="text-white font-semibold">+61 4XX XXX XXX</p>
                  </div>

                  <div className="bg-accent-500/20 rounded-lg p-4 border border-accent-500/40">
                    <p className="text-white text-sm">&quot;Hi! Thanks for calling Advisync. How can I help you today?&quot;</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/80 text-sm">Processing...</span>
                    </div>
                    <div className="text-white/60 text-sm">00:45</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
