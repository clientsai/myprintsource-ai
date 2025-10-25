import Link from 'next/link'
import Image from 'next/image'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us - MyPrintSource AI Support',
  description: 'Get in touch with MyPrintSource. Our AI printing experts are here to help with quotes, technical questions, and enterprise solutions.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/brand/logo-myprintsource.png"
                alt="MyPrintSource - Powered by AI"
                width={240}
                height={60}
                priority
                className="h-16 w-auto"
              />
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-950 transition-colors">
                Home
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-950 transition-colors">
                Sign In
              </Link>
              <Link href="/register" className="btn-primary">
                Get Started Free
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-950 mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              Our AI printing experts are ready to help you bring your projects to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-950 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600 mb-3">Response within 24 hours</p>
              <a href="mailto:support@myprintsource.com" className="text-brand-primary hover:underline text-sm">
                support@myprintsource.com
              </a>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-950 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600 mb-3">Mon-Fri, 9am-6pm EST</p>
              <a href="tel:+18005551234" className="text-brand-primary hover:underline text-sm">
                1-800-555-1234
              </a>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-950 mb-2">Live Chat</h3>
              <p className="text-sm text-gray-600 mb-3">Instant AI assistance</p>
              <button className="text-brand-primary hover:underline text-sm">
                Start Chat
              </button>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-950 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600 mb-3">San Francisco HQ</p>
              <p className="text-brand-primary text-sm">
                123 Print Street<br/>San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 mb-8 text-center">Send Us a Message</h2>
            <form className="card p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
              <p className="text-sm text-gray-500 text-center">
                We&apos;ll respond within 24 hours during business days
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2025 MyPrintSource. Powered by AI. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <Link href="/privacy" className="hover:text-brand-primary">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-brand-primary">Terms of Service</Link>
              <span>•</span>
              <Link href="/about" className="hover:text-brand-primary">About</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
