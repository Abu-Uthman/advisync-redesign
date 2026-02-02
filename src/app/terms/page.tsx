import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Advisync",
  description: "Advisync Terms of Service - Terms and conditions for using our AI solutions and services.",
};

export default function TermsPage() {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-gray">
            <h1 className="text-4xl font-bold text-primary-500 mb-8">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last updated: February 2026</p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing or using Advisync's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-4">
              Advisync provides AI voice agent services, automation solutions, and related technology 
              services for businesses. Our services are subject to availability and may be modified 
              or discontinued at any time.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">3. Account Responsibilities</h2>
            <p className="text-gray-600 mb-4">You are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and complete information</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              All prices are in Australian Dollars (AUD) unless otherwise stated. Payment is due 
              according to the terms specified in your service agreement. We reserve the right to 
              suspend services for non-payment.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">5. Service Level</h2>
            <p className="text-gray-600 mb-4">
              While we strive to provide reliable services, we do not guarantee 100% uptime. 
              We will make reasonable efforts to notify you of planned maintenance or service 
              interruptions.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              All content, features, and functionality of our services are owned by Advisync and 
              are protected by intellectual property laws. You may not copy, modify, or distribute 
              our content without permission.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the maximum extent permitted by law, Advisync shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of 
              our services.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">8. Termination</h2>
            <p className="text-gray-600 mb-4">
              Either party may terminate the service agreement with 30 days written notice. 
              We may immediately terminate or suspend access for violation of these terms.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">9. Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms are governed by the laws of Victoria, Australia. Any disputes shall be 
              resolved in the courts of Victoria.
            </p>

            <h2 className="text-2xl font-bold text-primary-500 mt-8 mb-4">10. Contact</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-600">
              Email: legal@advisync.com.au<br />
              Phone: 1300 ADVISYNC<br />
              Address: Melbourne, Victoria, Australia
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
