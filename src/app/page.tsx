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
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://advisync.com.au/#business",
            name: "Advisync AI Solutions",
            alternateName: ["Advisync", "AdviSync", "Advisync AI", "Advisync Melbourne"],
            url: "https://advisync.com.au",
            logo: "https://advisync.com.au/logo.svg",
            image: "https://advisync.com.au/logo.svg",
            description:
              "Melbourne-based AI agency building secure, Australian privacy compliant AI voice agents and workflow automation for law firms, NDIS providers, and local service businesses.",
            telephone: "+61432405388",
            email: "info@advisync.com.au",
            knowsAbout: [
              "NDIS Support Coordination Automation",
              "Legal Tech AI Voice Agents",
              "Australian Privacy Principles Compliant Data Systems",
              "Business Process Automation",
              "AI Receptionists for Law Firms",
              "NDIS Provider AI Solutions",
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
              { "@type": "City", name: "Melbourne", containedInPlace: { "@type": "State", name: "Victoria, Australia" } },
              { "@type": "Country", name: "Australia" },
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
                    name: "Legal Client Intake AI Voice Agents",
                    description:
                      "Confidential AI receptionist for law firms — 24/7 client intake, conflict checks, appointment scheduling, and after-hours triage with full Australian privacy compliance.",
                    url: "https://advisync.com.au/services/ai-voice-agents",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "NDIS Support Coordination Automation",
                    description:
                      "Automate participant enquiries, intake workflows, scheduling, and plan coordination calls for NDIS providers and support coordinators.",
                    url: "https://advisync.com.au/services/ai-automations",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "24/7 AI Reception for Local Businesses",
                    description:
                      "Never miss a lead. AI voice agents with natural Australian accents for tradies, dental clinics, real estate, and professional services across Melbourne.",
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
