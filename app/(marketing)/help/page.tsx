import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Help Center - MyPrintSource Support',
  description: 'Get help with MyPrintSource AI printing platform. FAQs, guides, and support resources.',
}

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image src="/brand/logo-myprintsource.png" alt="MyPrintSource" width={240} height={60} priority className="h-16 w-auto" />
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-950">← Back to Home</Link>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-gray-600 mb-12">Find answers to common questions and get the most out of MyPrintSource AI</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <div className="space-y-4">
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">How do I create an account?</summary>
                  <p className="mt-3 text-gray-600">Click &quot;Get Started Free&quot; on any page, enter your email and create a password. No credit card required for the free Starter plan.</p>
                </details>
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">What information does AI need to create my campaign?</summary>
                  <p className="mt-3 text-gray-600">Simply provide your website URL, industry, and campaign goals. Our AI scans your business, analyzes your target audience, and generates complete print-ready marketing materials—no design files needed.</p>
                </details>
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">How does AI design generation work?</summary>
                  <p className="mt-3 text-gray-600">Our AI analyzes your business in seconds, identifies your ideal customer&apos;s pain points, generates conversion-optimized copy and design, then outputs print-ready materials. Everything from headlines to layouts is scientifically engineered to convert.</p>
                </details>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ordering & Pricing</h2>
              <div className="space-y-4">
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">How do I get started with my first campaign?</summary>
                  <p className="mt-3 text-gray-600">Tell us about your business and campaign goals. AI instantly generates complete designs with material recommendations, quantities, and pricing. Review, refine, and approve—then we print and deliver in under 60 minutes.</p>
                </details>
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">What payment methods do you accept?</summary>
                  <p className="mt-3 text-gray-600">We accept all major credit cards, debit cards, and ACH transfers for enterprise customers.</p>
                </details>
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">What is your turnaround time?</summary>
                  <p className="mt-3 text-gray-600">Standard production is 3-5 business days. Rush options (24-48 hours) are available for most products.</p>
                </details>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Quality & Support</h2>
              <div className="space-y-4">
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">What if I&apos;m not satisfied with my order?</summary>
                  <p className="mt-3 text-gray-600">We guarantee print quality. If there&apos;s an issue, we&apos;ll reprint at no cost. Contact support within 14 days of delivery.</p>
                </details>
                <details className="card p-6">
                  <summary className="font-semibold cursor-pointer">How do I contact support?</summary>
                  <p className="mt-3 text-gray-600">Email support@myprintsource.com, call 1-800-555-1234 (Mon-Fri 9am-6pm EST), or use live chat for instant AI assistance.</p>
                </details>
              </div>
            </section>

            <div className="card p-8 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 mt-12">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Our support team is ready to help</p>
              <Link href="/contact" className="btn-primary inline-block">Contact Support</Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 border-t bg-gray-50">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 MyPrintSource. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
