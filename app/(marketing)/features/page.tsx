import Link from 'next/link'
import Image from 'next/image'
import { Bot, Zap, FileCheck, BarChart3, Shield, Clock } from 'lucide-react'

export const metadata = {
  title: 'Features - MyPrintSource AI Platform',
  description: 'Discover AI-powered features that transform printing: instant file optimization, smart quotes, automated quality checks, and real-time tracking.',
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image src="/brand/logo-myprintsource.png" alt="MyPrintSource" width={240} height={60} priority className="h-16 w-auto" />
            </Link>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-gray-950">Home</Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-950">Sign In</Link>
              <Link href="/register" className="btn-primary">Get Started Free</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">AI-Powered</span> Features
            </h1>
            <p className="text-xl text-gray-600">Intelligent automation that makes professional printing effortless</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8">
              <Bot className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI File Optimization</h3>
              <p className="text-gray-600">Automatic analysis and correction of resolution, bleeds, color profiles, and print readiness. Instant fixes for common issues.</p>
            </div>

            <div className="card p-8">
              <Zap className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Instant Quotes</h3>
              <p className="text-gray-600">Real-time pricing with quantity breaks, material options, and shipping costs. No waiting for sales reps.</p>
            </div>

            <div className="card p-8">
              <FileCheck className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Smart Material Selection</h3>
              <p className="text-gray-600">AI recommends the perfect paper stock, finish, and binding based on your project type and goals.</p>
            </div>

            <div className="card p-8">
              <BarChart3 className="w-12 h-12 text-brand-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
              <p className="text-gray-600">Live production updates from file upload to delivery. Know exactly where your order is at all times.</p>
            </div>

            <div className="card p-8">
              <Shield className="w-12 h-12 text-brand-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automated Quality Checks</h3>
              <p className="text-gray-600">Computer vision inspects every sheet for defects before shipping. Guaranteed perfection.</p>
            </div>

            <div className="card p-8">
              <Clock className="w-12 h-12 text-brand-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Express Production</h3>
              <p className="text-gray-600">AI-optimized workflow and priority queuing for rush orders. Fast turnaround without compromising quality.</p>
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
