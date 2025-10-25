import Link from 'next/link'
import MarketingLayout from '@/components/MarketingLayout'
import { Sparkles, Check, Zap, Crown, Rocket, DollarSign, TrendingUp, Clock } from 'lucide-react'

export const metadata = {
  title: 'Pricing - MyPrintSource AI Marketing Design | Stop Overpaying for Marketing',
  description: 'Stop wasting $2,000 on designers. AI-generated marketing materials that convert 3.7x better—for a fraction of the cost. First campaign free.',
  keywords: 'AI design pricing, marketing materials cost, direct mail pricing, AI copywriting cost, print marketing pricing',
}

export default function PricingPage() {
  return (
    <MarketingLayout>
      <div className="pt-32 pb-16">
        {/* Hero */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full mb-6 border border-red-100">
                <DollarSign className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-700">Stop Wasting $4,300 Per Campaign</span>
              </div>
              <h1 className="text-6xl font-bold text-gray-950 mb-6 leading-tight tracking-tight">
                Pricing That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">Actually Makes Sense</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Traditional approach: $2,000 designer + $800 copywriter + 3 weeks waiting = $4,300+ and 0.8% response rate
              </p>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                MyPrintSource AI: World-class campaigns in 47 minutes with 3.7x higher response rates
              </p>
              <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full border-2 border-green-200">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-lg font-bold text-green-700">First Campaign 100% Free • No Credit Card Required</span>
              </div>
            </div>
          </div>
        </section>

        {/* Value Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-12 text-center">The Real Cost Comparison</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card p-8 bg-white border-2 border-red-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">❌</span>
                    </div>
                    <h3 className="text-2xl font-bold text-red-900">Traditional Design</h3>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-600">Graphic designer (3 revisions)</span>
                      <span className="font-bold text-gray-900">$2,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-600">Professional copywriter</span>
                      <span className="font-bold text-gray-900">$800</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-600">Additional revisions (avg)</span>
                      <span className="font-bold text-gray-900">$1,500</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-gray-600">Time wasted (2-3 weeks)</span>
                      <span className="font-bold text-gray-900">Priceless</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-red-200">
                      <span className="text-lg font-bold text-gray-900">Total Cost</span>
                      <span className="text-3xl font-bold text-red-600">$4,300+</span>
                    </div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-sm text-red-900 font-semibold mb-2">Average Result:</div>
                    <div className="text-2xl font-bold text-red-700">0.8% response rate</div>
                    <div className="text-xs text-red-600 mt-1">Industry average for traditionally designed materials</div>
                  </div>
                </div>

                <div className="card p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 relative">
                  <div className="absolute -top-4 right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    SAVE $4,300+
                  </div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900">MyPrintSource AI</h3>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-3 border-b border-green-200">
                      <span className="text-gray-700">AI design generation</span>
                      <span className="font-bold text-green-700">$0</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-green-200">
                      <span className="text-gray-700">AI copywriting</span>
                      <span className="font-bold text-green-700">$0</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-green-200">
                      <span className="text-gray-700">Unlimited revisions</span>
                      <span className="font-bold text-green-700">$0</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-green-200">
                      <span className="text-gray-700">Time invested</span>
                      <span className="font-bold text-green-700">47 minutes</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t-2 border-green-300">
                      <span className="text-lg font-bold text-gray-900">First Campaign</span>
                      <span className="text-3xl font-bold text-green-600">FREE</span>
                    </div>
                  </div>
                  <div className="bg-green-600 p-4 rounded-lg text-white">
                    <div className="text-sm font-semibold mb-2">Proven Result:</div>
                    <div className="text-3xl font-bold">3.1% response rate</div>
                    <div className="text-xs mt-1 text-green-100">Average across 47,000+ AI-generated campaigns</div>
                  </div>
                </div>
              </div>

              <div className="card p-8 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border-2 border-brand-primary/30 text-center">
                <div className="text-5xl font-bold text-gray-950 mb-3">387% More Profitable</div>
                <p className="text-lg text-gray-700">That&apos;s not just cheaper. That&apos;s a completely different business model.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-950 mb-4">Choose Your Plan</h2>
                <p className="text-xl text-gray-600">Pay only for materials you approve and print. No subscription unless you want volume discounts.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Free Plan */}
                <div className="card p-8 hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-primary rounded-2xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-950">Pay As You Go</h3>
                      <div className="text-sm text-gray-600">No subscription needed</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-gray-950 mb-2">FREE</div>
                    <div className="text-gray-600">First campaign on us</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>AI scans your business</strong> and generates custom designs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Unlimited design revisions</strong> until you approve</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Pay only for printing</strong> when you&apos;re 100% satisfied</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Standard shipping</strong> (2-3 business days)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Email support</strong> (24hr response time)</span>
                    </li>
                  </ul>
                  <Link href="/register" className="btn-outline w-full text-center text-lg py-3">
                    Start Free
                  </Link>
                  <p className="text-xs text-center text-gray-500 mt-3">No credit card required</p>
                </div>

                {/* Professional - Featured */}
                <div className="card p-8 border-2 border-brand-primary relative hover:shadow-2xl transition-all transform hover:scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center">
                      <Crown className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-950">Professional</h3>
                      <div className="text-sm text-gray-600">For growing businesses</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-5xl font-bold text-gray-950">$149</span>
                      <span className="text-xl text-gray-600">/month</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold mt-1">Save $600-800/month on average</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Everything in Pay As You Go</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>20% discount on all materials</strong> (pays for itself after $750 in printing)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Priority AI processing</strong> (generate campaigns 2x faster)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Rush delivery available</strong> (as fast as same-day)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Campaign analytics & tracking</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Dedicated account manager</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Phone & chat support</strong> (2hr response time)</span>
                    </li>
                  </ul>
                  <Link href="/register" className="btn-primary w-full text-center text-lg py-4">
                    Start 14-Day Free Trial
                  </Link>
                  <p className="text-xs text-center text-gray-500 mt-3">Cancel anytime, no questions asked</p>
                </div>

                {/* Enterprise */}
                <div className="card p-8 hover:shadow-xl transition-all bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-2xl flex items-center justify-center">
                      <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Enterprise</h3>
                      <div className="text-sm text-gray-300">For high-volume teams</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-5xl font-bold mb-2">Custom</div>
                    <div className="text-gray-300">Tailored to your needs</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>Everything in Professional</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>Volume discounts up to 35%</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>Full API access</strong> for automation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>Custom AI training</strong> on your brand guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>Multi-location management</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>White-label options available</strong></span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>24/7 priority support</strong> with dedicated team</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-100"><strong>SLA guarantees</strong></span>
                    </li>
                  </ul>
                  <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold w-full text-center text-lg py-4 rounded-lg transition-colors inline-block">
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-16 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-8 text-center">The ROI Is Undeniable</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="card p-6 text-center bg-white">
                  <TrendingUp className="w-10 h-10 text-brand-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-950 mb-2">3.7x</div>
                  <div className="text-sm text-gray-600">Higher Response Rates vs Traditional Design</div>
                </div>
                <div className="card p-6 text-center bg-white">
                  <Clock className="w-10 h-10 text-brand-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-950 mb-2">47min</div>
                  <div className="text-sm text-gray-600">Average Time From Idea to Delivered Materials</div>
                </div>
                <div className="card p-6 text-center bg-white">
                  <DollarSign className="w-10 h-10 text-brand-accent mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-950 mb-2">$4,300</div>
                  <div className="text-sm text-gray-600">Average Savings Per Campaign vs Traditional</div>
                </div>
              </div>
              <div className="card p-8 bg-white text-center">
                <p className="text-xl text-gray-700 mb-4">
                  <strong>Real Example:</strong> A local dentist spent $4,100 on traditional design for direct mail postcards. Got 0.6% response rate (30 calls from 5,000 mailed).
                </p>
                <p className="text-xl text-gray-700 mb-4">
                  Switched to MyPrintSource AI. Spent $0 on design, generated campaign in 38 minutes. Got 3.4% response rate (170 calls from 5,000 mailed).
                </p>
                <p className="text-2xl font-bold text-brand-primary">
                  $4,100 saved + 467% more leads = Obvious choice
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-950">How can the first campaign be free?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We&apos;re confident AI-generated campaigns outperform traditional design by 3.7x. We want you to see the difference with zero risk. AI generates your designs free—you only pay for printing materials you approve. If you don&apos;t love it, you pay nothing.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-950">What if I don&apos;t like the AI-generated design?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Request unlimited revisions until you&apos;re satisfied. Our AI learns from your feedback. Most customers approve designs within 2-3 iterations (taking under 15 minutes total). You never pay for anything you don&apos;t approve.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-950">How does AI understand my business better than a human designer?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our AI scans your website, social media, reviews, and competitive landscape in seconds—analyzing thousands of data points. It identifies your ideal customer&apos;s demographics, pain points, and buying triggers. Then generates copy and design using psychological frameworks proven across millions of successful campaigns. A human designer might spend 30 minutes on your website. AI analyzes everything in 8 seconds.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-950">Can I cancel Professional plan anytime?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! Cancel anytime with no penalties or fees. You&apos;ll retain access until the end of your billing period. Your 20% discount applies to all orders placed during your active subscription.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-950">What materials can AI generate?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Postcards, flyers, brochures, business cards, door hangers, sales letters, direct mail campaigns, rack cards, posters, and more. AI generates both the copy and visual design for any print marketing format.
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-950">Do you offer non-profit discounts?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yes! We provide special pricing for non-profits, educational institutions, and government organizations. Contact our sales team with your non-profit documentation for a custom quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Stop Overpaying. Start Converting.</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your first AI-generated campaign is 100% free. See exactly why 3,200+ businesses switched from expensive designers to intelligent AI.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center bg-white text-brand-primary hover:bg-gray-50 font-semibold text-xl px-12 py-5 rounded-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Create My Free Campaign Now
              <Sparkles className="ml-3 w-6 h-6" />
            </Link>
            <p className="text-white/80 text-sm mt-6">No credit card • No risk • Materials delivered in under 60 minutes</p>
          </div>
        </section>
      </div>
    </MarketingLayout>
  )
}
