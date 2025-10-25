import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy - MyPrintSource',
  description: 'MyPrintSource privacy policy and data protection practices.',
}

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2025</p>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Introduction</h2>
              <p>MyPrintSource (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered printing platform.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Information We Collect</h2>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, password)</li>
                <li>Design files and project specifications</li>
                <li>Payment and billing information</li>
                <li>Communication preferences and support inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your print orders and deliver services</li>
                <li>Optimize files using our AI technology</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Improve our AI algorithms and platform features</li>
                <li>Send service updates and marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information and uploaded files. All data is encrypted in transit and at rest. Our AI processing occurs in secure, isolated environments.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and download your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to certain data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Contact Us</h2>
              <p>For privacy-related questions or to exercise your rights, contact us at:</p>
              <p className="mt-2">Email: privacy@myprintsource.com<br />Address: 123 Print Street, San Francisco, CA 94105</p>
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
