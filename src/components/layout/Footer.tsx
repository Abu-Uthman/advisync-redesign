import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "AI Voice Agents", href: "/services/ai-voice-agents" },
    { name: "AI Automations", href: "/services/ai-automations" },
    { name: "Custom Solutions", href: "/services/custom-ai-solutions" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  locations: [
    { name: "Melbourne", href: "/locations/melbourne" },
    { name: "Sydney", href: "/locations/sydney" },
    { name: "Brisbane", href: "/locations/brisbane" },
    { name: "Perth", href: "/locations/perth" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-500 font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">Advisync</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-sm">
              Transform your business with AI. Voice agents, automation, and custom solutions for Australian businesses.
            </p>
            <div className="space-y-3">
              <a href="tel:+61400000000" className="flex items-center space-x-3 text-gray-300 hover:text-accent-500 transition-colors">
                <Phone className="w-5 h-5" />
                <span>1300 ADVISYNC</span>
              </a>
              <a href="mailto:hello@advisync.com.au" className="flex items-center space-x-3 text-gray-300 hover:text-accent-500 transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@advisync.com.au</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Melbourne, Australia</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Locations</h3>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-accent-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-400 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Advisync AI Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-accent-500 text-sm transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
