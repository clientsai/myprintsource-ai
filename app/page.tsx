import Link from 'next/link'
import { Sparkles, Zap, Brain, Target, Clock, CheckCircle, TrendingUp, Shield, ArrowRight, Users, Star } from 'lucide-react'
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
                width={320}
                height={80}
                priority
                className="h-24 w-auto"
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-gray-950 transition-colors font-medium">Features</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-950 transition-colors font-medium">Pricing</Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-950 transition-colors font-medium">Blog</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-950 transition-colors font-medium">Sign In</Link>
              <Link href="/register" className="btn-primary">
                Get Started Free
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section className="pt-32 pb-24 relative overflow-hidden page-transition">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-4 py-2 rounded-full mb-6 border border-brand-primary/20 hero-element">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-medium text-brand-secondary">No Designers. No Copywriters. No Guesswork.</span>
            </div>
            <h1 className="text-7xl font-bold text-gray-950 mb-6 leading-tight tracking-tight hero-element">
              AI-Generated Marketing Materials
            </h1>
            <p className="text-3xl text-gray-700 font-medium mb-4 max-w-4xl mx-auto hero-element">
              Professional campaigns designed, printed, and delivered in 60 minutes
            </p>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto hero-element">
              Our AI analyzes your business and creates conversion-optimized marketing materials—no designers, no copywriters, no guesswork. From concept to delivery faster than scheduling a design meeting.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Link href="/register" className="btn-primary text-lg px-10 py-4 h-auto shadow-lg hover:shadow-xl transition-shadow">
                Create My First Campaign
              </Link>
              <Link href="#how-it-works" className="btn-outline text-lg px-10 py-4 h-auto">
                See How It Works
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>First campaign free</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No designers needed</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Delivered in 60 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-6 uppercase tracking-wide font-medium">Trusted by businesses worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-gray-950">10,000+</div>
              <div className="text-sm text-gray-600">Campaigns Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-950">99.99%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-950">47min</div>
              <div className="text-sm text-gray-600">Avg. Delivery Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-950">3.7x</div>
              <div className="text-sm text-gray-600">Higher Response Rates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Points Section - Enhanced */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-950 mb-6">
                You&apos;re Tired of Marketing Materials That Fall Flat
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card p-8 bg-red-50 border border-red-100">
                <h3 className="text-xl font-bold text-red-900 mb-4">The Old Way (Broken)</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    <span>$2,000 spent on designers who don&apos;t understand your business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    <span>2-3 weeks waiting for revisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    <span>Copywriters who miss your brand voice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    <span>Thousands of brochures in recycling bins</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">×</span>
                    <span>Guessing at what will actually convert</span>
                  </li>
                </ul>
              </div>
              <div className="card p-8 bg-green-50 border border-green-100">
                <h3 className="text-xl font-bold text-green-900 mb-4">The AI Way (Proven)</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>$0 on designers—AI does it all</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>47 minutes from concept to delivery</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>AI analyzes your business deeply</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Materials scientifically engineered to convert</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                    <span>Data-driven decisions, zero guesswork</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-950 mb-4">
                What if you could have marketing materials that actually work—without the designers, the revisions, the guesswork, or the wait?
              </p>
              <p className="text-xl text-gray-600">
                You can. And it starts in the next 60 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-950 mb-6">
              World-Class Marketing Materials in 3 Steps
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Our AI does in minutes what takes agencies weeks—and it never misses your target audience
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="relative">
              <div className="card p-10 hover:shadow-2xl transition-all duration-300 group h-full">
                <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div className="text-6xl font-bold text-brand-primary/10 mb-4 group-hover:text-brand-primary/20 transition-colors">01</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand-primary transition-colors">AI Scans Your Business</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Tell us your website, industry, and goals. Our AI analyzes your brand, competitors, and target audience in seconds—understanding your business better than most designers ever will.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Deep brand analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Competitor intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Audience profiling</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="card p-10 hover:shadow-2xl transition-all duration-300 group h-full">
                <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div className="text-6xl font-bold text-brand-secondary/10 mb-4 group-hover:text-brand-secondary/20 transition-colors">02</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand-secondary transition-colors">Generates Print-Ready Designs</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AI creates compelling headlines, persuasive copy, and professional layouts optimized for your specific audience. Every color choice, every word placement, every design element is scientifically engineered to convert.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Psychology-driven headlines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Conversion-optimized copy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Professional layouts</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="card p-10 hover:shadow-2xl transition-all duration-300 group h-full">
                <div className="absolute -top-6 left-10 w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div className="text-6xl font-bold text-brand-accent/10 mb-4 group-hover:text-brand-accent/20 transition-colors">03</div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-brand-accent transition-colors">Delivered Within the Hour</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Approve your design with one click. We print, quality-check, and rush-deliver professional materials to your door. From blank page to finished product faster than you can schedule a design meeting.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>One-click approval</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated quality checks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-brand-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Rush delivery available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Results - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-950 mb-4">The Results Speak for Themselves</h2>
              <p className="text-xl text-gray-600">Real data from over 10,000 campaigns</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="card p-10 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent mb-4">3.7x</div>
                <div className="text-xl font-semibold text-gray-950 mb-2">Higher Response Rates</div>
                <div className="text-gray-600">Average increase vs. traditionally designed materials</div>
              </div>
              <div className="card p-10 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-primary mb-4">47min</div>
                <div className="text-xl font-semibold text-gray-950 mb-2">Average Delivery Time</div>
                <div className="text-gray-600">From concept to printed materials at your door</div>
              </div>
              <div className="card p-10 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary mb-4">$0</div>
                <div className="text-xl font-semibold text-gray-950 mb-2">Design & Copy Costs</div>
                <div className="text-gray-600">Spent on designers, copywriters, or creative agencies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-950 mb-6">
              Every Piece Is Optimized to Convert
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Psychologically Engineered Headlines</h3>
                  <p className="text-gray-600">Headlines crafted using proven direct response principles—tested on millions of campaigns to maximize opens and readership.</p>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Copy That Speaks Directly to Your Customer</h3>
                  <p className="text-gray-600">AI analyzes your target demographic&apos;s pain points, desires, and language patterns—then writes copy they can&apos;t ignore.</p>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent/10 to-brand-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Professional Design Without the Designer Price Tag</h3>
                  <p className="text-gray-600">World-class layouts, color theory, typography, and visual hierarchy—all generated in seconds, not weeks.</p>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Print-Perfect from the Start</h3>
                  <p className="text-gray-600">Correct bleeds, resolution, color profiles, and print specifications. No back-and-forth with printers. No rejected proofs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-5xl font-bold mb-6 text-white">Stop Guessing. Start Converting.</h2>
          <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Create your first AI-designed marketing campaign free. If it doesn&apos;t outperform your current materials, you pay nothing.
          </p>
          <Link href="/register" className="inline-flex items-center bg-white text-brand-primary hover:bg-gray-50 font-semibold text-xl px-12 py-5 rounded-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
            Create My Free Campaign Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
          <div className="flex items-center justify-center space-x-8 text-white/80 text-sm mt-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>First campaign free</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Materials in 60 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>100% money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
                <Image
                  src="/brand/logo-myprintsource.png"
                  alt="MyPrintSource"
                  width={240}
                  height={60}
                  className="h-16 w-auto mb-6"
                />
              </Link>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI that creates world-class marketing materials designed to convert—delivered to your door in under an hour.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4 text-lg">Product</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/pricing" className="hover:text-brand-primary transition-colors">Pricing</Link></li>
                <li><Link href="/features" className="hover:text-brand-primary transition-colors">Features</Link></li>
                <li><Link href="/blog" className="hover:text-brand-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/about" className="hover:text-brand-primary transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                <li><Link href="/status" className="hover:text-brand-primary transition-colors">System Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li><Link href="/help" className="hover:text-brand-primary transition-colors">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-brand-primary transition-colors">Documentation</Link></li>
                <li><Link href="/api/v1/docs" className="hover:text-brand-primary transition-colors">API Reference</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-gray-600">
            <p className="mb-4">&copy; 2025 MyPrintSource. Powered by AI. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
              <span className="text-gray-400">•</span>
              <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
              <span className="text-gray-400">•</span>
              <Link href="/security" className="hover:text-brand-primary transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
