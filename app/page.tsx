import Link from 'next/link'
import { Sparkles, Zap, Bot, FileCheck } from 'lucide-react'
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
                width={240}
                height={60}
                priority
                className="h-16 w-auto"
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
              <span className="text-sm font-medium text-brand-secondary">Powered by Advanced AI</span>
            </div>
            <h1 className="text-6xl font-bold text-gray-950 mb-6 leading-tight">
              Print Smarter with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary"> AI-Powered</span> Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upload your designs and let our AI instantly optimize print files, suggest the perfect materials, and deliver professional quotes in seconds. No technical expertise required—just better printing, faster.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/register" className="btn-primary text-base px-8 py-3 h-auto">
                Start Printing Smarter
              </Link>
              <Link href="#how-it-works" className="btn-outline text-base px-8 py-3 h-auto">
                See How It Works
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6">No credit card required • Instant quotes • AI file optimization</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-950 mb-4">
              Intelligent Printing in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI handles the complex technical work so you can focus on your design
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">1. Upload Your Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Drag and drop any file format. Our AI automatically analyzes resolution, color profiles, bleeds, and print readiness—then fixes common issues instantly.
              </p>
            </div>
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">2. AI Optimizes Everything</h3>
              <p className="text-gray-600 leading-relaxed">
                Get intelligent material recommendations, cost comparisons, and quantity pricing. Our AI suggests the perfect finish, paper weight, and shipping method for your project.
              </p>
            </div>
            <div className="card p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">3. Instant Quote & Production</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive pricing in seconds, approve with one click, and track real-time production status. Automated quality checks ensure perfection before shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Experience AI-Powered Printing?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already printing smarter with MyPrintSource AI
          </p>
          <Link href="/register" className="inline-flex items-center bg-white text-brand-primary hover:bg-gray-50 font-semibold text-lg px-10 py-4 rounded-lg transition-colors">
            Get Started Free
            <Sparkles className="ml-2 w-5 h-5" />
          </Link>
          <p className="text-white/80 text-sm mt-6">No credit card required • Instant setup • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/brand/logo-myprintsource.png"
                alt="MyPrintSource"
                width={150}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-gray-600">
                AI-powered printing platform transforming how businesses create professional print materials.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/pricing" className="hover:text-brand-primary">Pricing</Link></li>
                <li><Link href="/features" className="hover:text-brand-primary">Features</Link></li>
                <li><Link href="/api" className="hover:text-brand-primary">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-brand-primary">About</Link></li>
                <li><Link href="/blog" className="hover:text-brand-primary">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help" className="hover:text-brand-primary">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-brand-primary">Documentation</Link></li>
                <li><Link href="/status" className="hover:text-brand-primary">System Status</Link></li>
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