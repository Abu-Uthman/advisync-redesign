"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Advisync's AI voice agent has been a game-changer. We used to miss 30% of our calls. Now we capture every lead, 24/7. Our bookings increased by 40% in the first month.",
    name: "Mike Thompson",
    role: "Owner, Melbourne Plumbing Co",
    rating: 5,
    image: "/testimonials/plumber.jpg",
  },
  {
    quote:
      "The automation workflows saved us 20 hours per week. What used to take my team all day now happens automatically. Highly recommend for any busy clinic.",
    name: "Dr. Sarah Chen",
    role: "Practice Manager, Sydney Dental Care",
    rating: 5,
    image: "/testimonials/dentist.jpg",
  },
  {
    quote:
      "We were skeptical about AI at first, but the results speak for themselves. Our response time went from hours to seconds. Best investment we've made.",
    name: "James Wilson",
    role: "Director, Brisbane Real Estate",
    rating: 5,
    image: "/testimonials/realtor.jpg",
  },
  {
    quote:
      "The team at Advisync understood our unique needs and built exactly what we needed. Professional, responsive, and the technology just works.",
    name: "Lisa Park",
    role: "Owner, Perth Auto Services",
    rating: 5,
    image: "/testimonials/auto.jpg",
  },
];

export function TestimonialsSection() {
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
            Loved by Australian Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with Advisync.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-accent-500/20 mb-4" />

              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.quote}</p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-500 font-bold">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* JSON-LD for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            itemReviewed: {
              "@type": "Organization",
              name: "Advisync AI Solutions",
            },
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
            ratingCount: testimonials.length.toString(),
          }),
        }}
      />
    </section>
  );
}
