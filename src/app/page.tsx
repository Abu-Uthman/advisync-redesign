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
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Advisync AI Solutions",
            url: "https://advisync.com.au",
            logo: "https://advisync.com.au/logo.png",
            description: "AI voice agents, automation, and custom solutions for Australian businesses",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Melbourne",
              addressRegion: "VIC",
              addressCountry: "AU",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+61432405388",
              contactType: "customer service",
              availableLanguage: "English",
            },
            sameAs: [
              "https://linkedin.com/company/advisync",
              "https://twitter.com/advisync",
            ],
          }),
        }}
      />
    </>
  );
}
