import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Workflow, Zap, Clock, RefreshCw, Link as LinkIcon, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automations | Advisync - Streamline Your Business Operations",
  description:
    "Intelligent workflow automations that save you 20+ hours per week. Connect your apps, automate repetitive tasks, and scale your operations with AI.",
};

const automations = [
  {
    title: "Lead Follow-up",
    description: "Automatically follow up with new leads via email and SMS. Never let a hot lead go cold.",
    saves: "5+ hours/week",
  },
  {
    title: "Appointment Reminders",
    description: "Send automatic reminders before appointments. Reduce no-shows by up to 80%.",
    saves: "3+ hours/week",
  },
  {
    title: "Invoice & Payments",
    description: "Auto-generate invoices after jobs and send payment reminders for overdue accounts.",
    saves: "4+ hours/week",
  },
  {
    title: "Review Requests",
    description: "Automatically ask happy customers for Google reviews. Build your reputation on autopilot.",
    saves: "2+ hours/week",
  },
  {
    title: "Data Entry",
    description: "Sync data between your apps automatically. No more copying and pasting between systems.",
    saves: "5+ hours/week",
  },
  {
    title: "Reporting",
    description: "Get daily/weekly reports on key metrics delivered straight to your inbox.",
    saves: "2+ hours/week",
  },
];

export default function AIAutomationsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Workflow className="w-5 h-5" />
              <span className="text-sm font-medium">AI Automations</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Save 20+ Hours Per Week with Intelligent Automation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Stop doing repetitive tasks manually. Let AI handle the busywork while you focus on
              growing your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">20+</div>
              <div className="text-gray-600">Hours Saved Per Week</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">80%</div>
              <div className="text-gray-600">Reduction in No-Shows</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">3x</div>
              <div className="text-gray-600">Faster Lead Response</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-500 mb-2">0</div>
              <div className="text-gray-600">Manual Data Entry</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automations Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Automations That Actually Matter
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We build automations based on what real Australian businesses need - not fancy
              features no one uses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automations.map((automation) => (
              <div
                key={automation.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-primary-500">{automation.title}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    Saves {automation.saves}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{automation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Connects With Your Tools</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              We integrate with the tools Australian businesses actually use.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Google Calendar",
              "Outlook",
              "Xero",
              "MYOB",
              "ServiceM8",
              "Tradify",
              "Cliniko",
              "Dentally",
              "Mailchimp",
              "ActiveCampaign",
              "Slack",
              "Custom APIs",
            ].map((tool) => (
              <div
                key={tool}
                className="bg-white/10 rounded-lg p-4 text-center text-sm font-medium"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-primary-500 mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation and we'll map out which automations will save you the most
            time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 btn-primary px-8 py-4"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
