import Link from 'next/link'
import Image from 'next/image'
import { Shield, Lock, Server, Eye } from 'lucide-react'

export const metadata = {
  title: 'Security - MyPrintSource',
  description: 'Learn about MyPrintSource security practices and data protection.',
}

export default function SecurityPage() {
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
          <h1 className="text-4xl font-bold mb-4">Security at MyPrintSource</h1>
          <p className="text-xl text-gray-600 mb-12">Your data security is our top priority. We implement enterprise-grade security measures to protect your files and information.</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">All file uploads and data transmissions are encrypted using TLS 1.3. Files are encrypted at rest using AES-256 encryption.</p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Infrastructure</h3>
              <p className="text-gray-600">Our platform runs on SOC 2 Type II certified infrastructure with 24/7 monitoring, automated backups, and disaster recovery.</p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Controls</h3>
              <p className="text-gray-600">Role-based access controls, multi-factor authentication, and strict employee access policies protect your data.</p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy by Design</h3>
              <p className="text-gray-600">We collect only necessary data, retain it only as long as needed, and give you full control over your information.</p>
            </div>
          </div>

          <div className="prose max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">AI Processing Security</h2>
              <p>Our AI file optimization occurs in isolated, secure environments. Your files are never used to train our models without explicit consent, and are automatically deleted after production completion per your retention settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Compliance</h2>
              <p>MyPrintSource is compliant with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>GDPR (General Data Protection Regulation)</li>
                <li>CCPA (California Consumer Privacy Act)</li>
                <li>SOC 2 Type II security standards</li>
                <li>PCI DSS for payment processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Incident Response</h2>
              <p>We maintain a comprehensive incident response plan. In the unlikely event of a security breach affecting your data, we will notify you within 72 hours and provide detailed information about the incident and our remediation steps.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-950 mb-3">Security Questions?</h2>
              <p>For security inquiries or to report a vulnerability, contact our security team:</p>
              <p className="mt-2">Email: security@myprintsource.com</p>
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
