import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Advisync",
  description: "Advisync Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <h1 className="text-4xl font-bold text-primary-500 mb-8">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: February 2026</p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Advisync AI Solutions ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our services or visit our website.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect information about you in various ways:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, business name when you contact us or sign up for our services.</li>
              <li><strong>Call Data:</strong> When using our AI voice agent services, call recordings, transcripts, and metadata may be collected to provide and improve services.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalise, and expand our services</li>
              <li>Communicate with you about updates, support, and marketing</li>
              <li>Process transactions and send related information</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">4. Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Service providers who assist in delivering our services (e.g., cloud hosting, payment processing)</li>
              <li>Legal authorities when required by law</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organisational measures to protect your personal 
              information against unauthorised access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-4">Under Australian Privacy Principles, you have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: privacy@advisync.com.au<br />
              Phone: 0432 405 388<br />
              Address: Melbourne, Victoria, Australia
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
