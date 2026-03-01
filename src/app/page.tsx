import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
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
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />

      {/* Organization Schema */}
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
              "Advisync provides AI voice agents, workflow automation, and custom AI solutions for Australian businesses. Never miss a customer call again with 24/7 AI-powered voice agents.",
            telephone: "+61432405388",
            email: "info@advisync.com.au",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Melbourne",
              addressRegion: "VIC",
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
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "17:00",
            },
            sameAs: [
              "https://linkedin.com/company/advisync",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+61432405388",
              contactType: "customer service",
              email: "info@advisync.com.au",
              availableLanguage: "English",
              areaServed: "AU",
            },
          }),
        }}
      />

      {/* Service Schema — AI Voice Agents */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI Voice Agents",
            description:
              "24/7 AI-powered voice agents that answer calls, handle enquiries, book appointments, and capture leads for Australian businesses.",
            provider: { "@id": "https://advisync.com.au/#business" },
            serviceType: "AI Voice Agent",
            areaServed: { "@type": "Country", name: "Australia" },
            url: "https://advisync.com.au/services/ai-voice-agents",
          }),
        }}
      />

      {/* Service Schema — AI Automations */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Business Automation Solutions",
            description:
              "Intelligent workflow automation that connects your apps, reduces manual tasks, and scales your operations with AI-powered triggers and integrations.",
            provider: { "@id": "https://advisync.com.au/#business" },
            serviceType: "Business Automation",
            areaServed: { "@type": "Country", name: "Australia" },
            url: "https://advisync.com.au/services/ai-automations",
          }),
        }}
      />

      {/* Service Schema — Custom AI Solutions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Custom AI Solutions",
            description:
              "Bespoke AI systems tailored to your business — chatbots, data analysis, API integrations, and custom AI development for Melbourne and Australian businesses.",
            provider: { "@id": "https://advisync.com.au/#business" },
            serviceType: "Custom AI Development",
            areaServed: { "@type": "Country", name: "Australia" },
            url: "https://advisync.com.au/services/custom-ai-solutions",
          }),
        }}
      />
    </>
  );
}
