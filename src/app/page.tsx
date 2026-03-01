import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <TrustSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://advisync.com.au/#business",
            name: "Advisync AI Solutions",
            url: "https://advisync.com.au",
            logo: "https://advisync.com.au/logo.svg",
            image: "https://advisync.com.au/logo.svg",
            description:
              "Advisync builds secure, compliant AI voice agents and business automation for Australian law firms, NDIS providers, and local service businesses. 24/7 AI receptionists with natural Australian accents, onshore data processing, and enterprise-grade security.",
            telephone: "+61432405388",
            email: "info@advisync.com.au",
            knowsAbout: [
              "AI Voice Agents",
              "AI Receptionists for Law Firms",
              "Legal Tech Automation",
              "NDIS Business Automation",
              "NDIS Provider AI Solutions",
              "Business Workflow Automation",
              "Australian AI Compliance",
              "Conversational AI",
              "After-Hours Call Handling",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Melbourne",
              addressRegion: "VIC",
              postalCode: "3000",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -37.8136,
              longitude: 144.9631,
            },
            areaServed: [
              { "@type": "Country", name: "Australia" },
              { "@type": "City", name: "Melbourne" },
              { "@type": "City", name: "Sydney" },
              { "@type": "City", name: "Brisbane" },
              { "@type": "City", name: "Perth" },
            ],
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "17:00",
            },
            sameAs: ["https://linkedin.com/company/advisync"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+61432405388",
              contactType: "customer service",
              email: "info@advisync.com.au",
              availableLanguage: "English",
              areaServed: "AU",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI Solutions",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Voice Agents for Law Firms",
                    description:
                      "24/7 AI receptionist for legal practices — client intake, appointment scheduling, after-hours triage with Australian compliance.",
                    url: "https://advisync.com.au/services/ai-voice-agents",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Automation for NDIS Providers",
                    description:
                      "Automate participant enquiries, intake, scheduling, and plan coordination calls for NDIS service providers.",
                    url: "https://advisync.com.au/services/ai-automations",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI Receptionists for Local Service Businesses",
                    description:
                      "Never miss a lead. AI voice agents for tradies, dental clinics, real estate, and professional services across Australia.",
                    url: "https://advisync.com.au/services/custom-ai-solutions",
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  );
}
