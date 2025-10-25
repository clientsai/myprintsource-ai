import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, Check, Zap, Crown, Rocket } from 'lucide-react'

export const metadata = {
  title: 'Pricing - MyPrintSource AI-Powered Printing',
  description: 'Transparent, flexible pricing for AI-powered printing. Pay per project or choose a plan that scales with your business.',
}

export default function PricingPage() {
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
              Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600">
              Pay only for what you print. No hidden fees, no surprises. Start free today.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <div className="card p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-950">Free</span>
              </div>
              <p className="text-gray-600 mb-6">Perfect for trying out AI-powered printing</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">AI file optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Instant quotes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Pay per project</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Standard shipping</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Email support</span>
                </li>
              </ul>
              <Link href="/register" className="btn-outline w-full text-center">
                Get Started
              </Link>
            </div>

            {/* Professional - Featured */}
            <div className="card p-8 border-2 border-brand-primary relative hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-4">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-950">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">For growing businesses with regular print needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Starter</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">15% discount on all orders</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority AI processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Expedited shipping options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Phone & chat support</span>
                </li>
              </ul>
              <Link href="/register" className="btn-primary w-full text-center">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="card p-8 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-950">Custom</span>
              </div>
              <p className="text-gray-600 mb-6">Advanced AI capabilities for large organizations</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Volume discounts up to 30%</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">API access for automation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom AI training for your brand</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">White-label options</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-brand-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">24/7 priority support</span>
                </li>
              </ul>
              <Link href="/contact" className="btn-outline w-full text-center">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How does pay-per-project work?</h3>
                <p className="text-gray-600">Upload your design, get an instant AI-generated quote, and pay only for what you approve. No subscriptions required for Starter plan.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600">Yes! Professional and Enterprise plans can be cancelled at any time with no penalties. You&apos;ll retain access until the end of your billing period.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, debit cards, and ACH transfers for Enterprise customers.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer discounts for non-profits?</h3>
                <p className="text-gray-600">Yes! Contact our sales team for special pricing for non-profit organizations and educational institutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start with our free plan. Upgrade anytime as your needs grow.
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
