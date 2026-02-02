"use client";

import { motion } from "framer-motion";

const logos = [
  { name: "Melbourne Plumbing Co", initials: "MP" },
  { name: "Sydney Dental Care", initials: "SD" },
  { name: "Brisbane Real Estate", initials: "BR" },
  { name: "Perth Auto Services", initials: "PA" },
  { name: "Adelaide Health Clinic", initials: "AH" },
  { name: "Gold Coast Electrical", initials: "GC" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm font-medium mb-8">
            TRUSTED BY LEADING AUSTRALIAN BUSINESSES
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-sm">{logo.initials}</span>
                </div>
                <span className="font-medium hidden sm:inline">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
