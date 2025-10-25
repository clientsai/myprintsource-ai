import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Target, Users, Zap } from 'lucide-react'

export const metadata = {
  title: 'About MyPrintSource - AI-Powered Printing Revolution',
  description: 'Learn how MyPrintSource is transforming the printing industry with artificial intelligence, automated workflows, and instant file optimization.',
}

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-secondary">About MyPrintSource</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-950 mb-6 leading-tight">
              Revolutionizing Print Production with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re on a mission to make professional printing accessible, instant, and intelligent for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  Eliminate complexity from printing through AI-powered automation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  Make professional-grade printing instant and accessible to everyone
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, quality, and customer success drive everything we do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                MyPrintSource was born from a simple frustration: getting high-quality print materials shouldn&apos;t require technical expertise, multiple revisions, or days of back-and-forth communication.
              </p>
              <p>
                Our founders, experienced in both printing and artificial intelligence, recognized that modern AI could solve the industry&apos;s biggest pain points—file preparation, material selection, quality control, and instant pricing.
              </p>
              <p>
                Today, MyPrintSource serves thousands of businesses worldwide, from startups to enterprises, processing millions of print projects through our AI-powered platform. We&apos;ve automated what used to take hours into seconds, while maintaining the highest quality standards.
              </p>
              <p>
                Our technology analyzes every upload for print readiness, automatically corrects common issues, suggests optimal materials and finishes, and provides instant, accurate quotes—all without human intervention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 mb-6">The Technology Behind MyPrintSource</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Our proprietary AI algorithms analyze thousands of data points in every file—resolution, color profiles, bleeds, fonts, images—and automatically optimize for commercial printing standards.
              </p>
              <p>
                Machine learning models trained on millions of successful print jobs recommend the perfect paper stock, finish, and binding for your specific project, considering factors like usage, budget, and aesthetic goals.
              </p>
              <p>
                Real-time production monitoring with computer vision ensures every sheet meets our quality standards before it reaches you. Automated checks catch potential issues that human eyes might miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Print Smarter?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using AI-powered printing
          </p>
          <Link href="/register" className="inline-flex items-center bg-white text-brand-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg transition-colors">
            Get Started Free
            <Sparkles className="ml-2 w-5 h-5" />
          </Link>
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
              <Link href="/contact" className="hover:text-brand-primary">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
