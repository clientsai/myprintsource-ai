import Link from 'next/link'
import { Sparkles, Zap, Brain, Target, TrendingUp, Clock } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
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
                width={280}
                height={70}
                priority
                className="h-20 w-auto"
              />
            </Link>
            <nav className="flex items-center space-x-6">
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
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-secondary">No Designers. No Copywriters. No Guesswork.</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-950 mb-6 leading-tight">
              Stop Wasting Money on Marketing Materials That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Don&apos;t Convert</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our AI analyzes your business, studies your ideal customers, and creates world-class printed marketing—designed by the same intelligence that powers Fortune 500 campaigns. Ready to print. Delivered to your door. All in under 60 minutes.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/register" className="btn-primary text-base px-8 py-3 h-auto">
                Create My First Campaign
              </Link>
              <Link href="#how-it-works" className="btn-outline text-base px-8 py-3 h-auto">
                See How It Works
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">First campaign free • No designers needed • Materials at your door within the hour</p>
          </div>
        </div>
      </section>

      {/* Problem/Pain Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 mb-8 text-center">
              You&apos;re Tired of Marketing Materials That Fall Flat
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                You&apos;ve been there: Spending $2,000 on a designer who doesn&apos;t understand your business. Waiting two weeks for revisions. Paying copywriters who miss your brand voice. Printing thousands of brochures that end up in the recycling bin because the message didn&apos;t resonate.
              </p>
              <p className="text-lg">
                Meanwhile, your competitor down the street is getting results. Their flyers convert. Their direct mail gets opened. Their business cards actually generate follow-up calls.
              </p>
              <p className="text-lg font-semibold">
                What if you could have marketing materials that actually work—without the designers, the revisions, the guesswork, or the wait?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-950 mb-4">
              World-Class Marketing Materials in 3 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI does in minutes what takes agencies weeks—and it never misses your target audience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">1. AI Scans Your Business</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us your website, industry, and goals. Our AI analyzes your brand, competitors, and target audience in seconds—understanding your business better than most designers ever will.
              </p>
            </div>
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">2. Generates Print-Ready Designs</h3>
              <p className="text-gray-600 leading-relaxed">
                AI creates compelling headlines, persuasive copy, and professional layouts optimized for your specific audience. Every color choice, every word placement, every design element is scientifically engineered to convert.
              </p>
            </div>
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">3. Delivered Within the Hour</h3>
              <p className="text-gray-600 leading-relaxed">
                Approve your design with one click. We print, quality-check, and rush-deliver professional materials to your door. From blank page to finished product faster than you can schedule a design meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-950 mb-12">The Results Speak for Themselves</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-brand-primary mb-2">3.7x</div>
                <div className="text-gray-600">Average increase in response rates vs. traditionally designed materials</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-brand-secondary mb-2">47 min</div>
                <div className="text-gray-600">Average time from concept to printed materials at your door</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-brand-accent mb-2">$0</div>
                <div className="text-gray-600">Spent on designers, copywriters, or creative agencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 mb-8 text-center">
              Every Piece Is Optimized to Convert
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Psychologically Engineered Headlines</h3>
                  <p className="text-gray-600">Headlines crafted using proven direct response principles—tested on millions of campaigns to maximize opens and readership.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Copy That Speaks Directly to Your Customer</h3>
                  <p className="text-gray-600">AI analyzes your target demographic&apos;s pain points, desires, and language patterns—then writes copy they can&apos;t ignore.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Professional Design Without the Designer Price Tag</h3>
                  <p className="text-gray-600">World-class layouts, color theory, typography, and visual hierarchy—all generated in seconds, not weeks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Print-Perfect from the Start</h3>
                  <p className="text-gray-600">Correct bleeds, resolution, color profiles, and print specifications. No back-and-forth with printers. No rejected proofs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Stop Guessing. Start Converting.</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create your first AI-designed marketing campaign free. If it doesn&apos;t outperform your current materials, you pay nothing.
          </p>
          <Link href="/register" className="inline-flex items-center bg-white text-brand-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg transition-colors">
            Create My Free Campaign Now
            <Sparkles className="ml-2 w-5 h-5" />
          </Link>
          <p className="text-white/80 text-sm mt-6">First campaign free • Materials delivered within 60 minutes • 100% money-back guarantee</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/brand/logo-myprintsource.png"
                  alt="MyPrintSource"
                  width={200}
                  height={50}
                  className="h-14 w-auto mb-4"
                />
              </Link>
              <p className="text-sm text-gray-600">
                AI that creates world-class marketing materials designed to convert—delivered to your door in under an hour.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/pricing" className="hover:text-brand-primary">Pricing</Link></li>
                <li><Link href="/features" className="hover:text-brand-primary">Features</Link></li>
                <li><Link href="/api/v1/docs" className="hover:text-brand-primary">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-brand-primary">About</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help" className="hover:text-brand-primary">Help Center</Link></li>
                <li><Link href="/api/v1/docs" className="hover:text-brand-primary">Documentation</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2025 MyPrintSource. Powered by AI. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-4 mt-2">
              <Link href="/privacy" className="hover:text-brand-primary">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-brand-primary">Terms of Service</Link>
              <span>•</span>
              <Link href="/security" className="hover:text-brand-primary">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
