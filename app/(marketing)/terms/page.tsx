import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Terms of Service - MyPrintSource',
  description: 'MyPrintSource terms of service and user agreement.',
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Acceptance of Terms</h2>
              <p>By accessing and using MyPrintSource&apos;s AI-powered printing platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Service Description</h2>
              <p>MyPrintSource provides an AI-powered platform for printing services, including automated file optimization, instant quoting, and production management. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate account and billing information</li>
                <li>Upload only files you have the legal right to reproduce</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for illegal or unauthorized purposes</li>
                <li>Not interfere with or disrupt our platform or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Intellectual Property</h2>
              <p>You retain all rights to your uploaded designs and files. By using our service, you grant us a limited license to process, optimize, and print your files. Our AI technology, platform, and branding remain our exclusive intellectual property.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Payment and Pricing</h2>
              <p>Prices are provided via AI-generated quotes and are subject to your approval before production begins. You agree to pay all charges associated with your orders. Subscription fees are billed monthly or annually as selected.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Quality Guarantee</h2>
              <p>We guarantee print quality and will reprint orders that do not meet our standards at no additional cost. Claims must be made within 14 days of delivery. Our AI optimization is provided as-is, and you are responsible for final approval of all files.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Limitation of Liability</h2>
              <p>MyPrintSource shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid for the specific order in question.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Contact</h2>
              <p>For questions about these Terms of Service, contact: legal@myprintsource.com</p>
            </section>
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
