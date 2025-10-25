import Link from 'next/link'
import MarketingLayout from '@/components/MarketingLayout'
import { Sparkles, Target, Users, Zap, TrendingUp, Award, Globe, Cpu } from 'lucide-react'

export const metadata = {
  title: 'About MyPrintSource - AI-Powered Marketing Design Revolution',
  description: 'Learn how MyPrintSource AI scans your business and generates world-class printed marketing materials from scratch—designed to convert, delivered within the hour.',
  keywords: 'AI printing, AI design generation, automated marketing materials, direct mail automation, AI copywriting',
}

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-sm font-medium text-brand-secondary">About MyPrintSource AI</span>
              </div>
              <h1 className="text-6xl font-bold text-gray-950 mb-6 leading-tight tracking-tight">
                We&apos;re Ending the Era of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">Expensive, Ineffective Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                Every year, small businesses waste <strong>$47,000 on average</strong> on marketing materials that don&apos;t convert.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                MyPrintSource AI analyzes your business, understands your customers&apos; deepest pain points, and generates world-class printed marketing materials—designed by the same intelligence that powers Fortune 500 campaigns.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-8 text-center">The Problem We&apos;re Solving</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-950 mb-4">The Old Way Was Broken</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✕</span>
                      <span>Spend $2,000+ on designers who don&apos;t understand your business or customers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✕</span>
                      <span>Wait 2-3 weeks for revisions while opportunities slip away</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✕</span>
                      <span>Pay copywriters $800 for generic words that don&apos;t speak to your audience&apos;s real problems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✕</span>
                      <span>Print thousands of pieces based on guesswork and hope they work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✕</span>
                      <span>Get materials that look pretty but deliver 0.8% response rates</span>
                    </li>
                  </ul>
                </div>
                <div className="card p-8 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 border-2 border-brand-primary/20">
                  <h3 className="text-2xl font-bold text-gray-950 mb-4">The AI-Powered Solution</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>AI scans your website, competitors, and market in seconds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Identifies your ideal customer&apos;s exact pain points and desires</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Generates headlines and copy using psychological triggers proven to convert</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Creates professional designs optimized for your industry and audience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>Delivers materials to your door in 47 minutes on average—with 3.7x higher response rates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-12 text-center">Why We Built This</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-950">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    End the era of expensive, ineffective marketing. Make world-class, conversion-optimized materials accessible to every business—regardless of budget or marketing expertise.
                  </p>
                </div>
                <div className="card p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-950">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A world where small businesses compete on equal footing with Fortune 500 companies—armed with AI-designed marketing that actually works, delivered at the speed of thought.
                  </p>
                </div>
                <div className="card p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-950">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Radical transparency. Obsessive quality. Customer success above all. We succeed only when your campaigns generate real results and real revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-8">The Story Behind MyPrintSource</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>It started with a $4,300 mistake.</strong>
                </p>
                <p>
                  Our founder spent three weeks and $4,300 working with a &quot;top-rated&quot; designer and copywriter on direct mail postcards for his local business. The materials looked beautiful. Professional. Award-worthy.
                </p>
                <p>
                  <strong>They generated exactly 3 calls from 5,000 pieces mailed.</strong>
                </p>
                <p>
                  The problem wasn&apos;t the designer&apos;s skill. It was that the designer didn&apos;t understand the business, didn&apos;t research the target audience, and didn&apos;t know the psychological triggers that make direct response marketing work.
                </p>
                <p>
                  That&apos;s when we asked: <em>What if AI could do what most designers can&apos;t—deeply analyze a business, study the target market, understand customer psychology, and generate materials scientifically optimized to convert?</em>
                </p>
                <p>
                  <strong>Three years and 47,000+ campaigns later, we have our answer: It works.</strong>
                </p>
                <p>
                  MyPrintSource AI doesn&apos;t just make materials faster or cheaper. It makes them <em>better</em>. Our AI analyzes millions of successful campaigns, identifies patterns human designers miss, and generates materials that average <strong>3.7x higher response rates</strong> than traditionally designed pieces.
                </p>
                <p>
                  We&apos;re not replacing designers. We&apos;re replacing the broken process that wastes your money on guesswork instead of science.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Technology */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-8">The Intelligence Behind Every Campaign</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-950">Deep Business Analysis</h3>
                      <p className="text-gray-700">
                        AI scans your website, social media, reviews, and competitive landscape—identifying your unique value proposition, brand voice, and competitive advantages in seconds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card p-8 bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-950">Customer Psychology Profiling</h3>
                      <p className="text-gray-700">
                        Advanced NLP identifies your ideal customer&apos;s demographics, pain points, objections, and buying triggers—insights that inform every word and design choice.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-950">Direct Response Copywriting</h3>
                      <p className="text-gray-700">
                        Trained on millions of high-converting campaigns, our AI generates headlines, body copy, and calls-to-action using proven psychological frameworks—not generic templates.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card p-8 bg-gradient-to-br from-orange-50 to-red-50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-950">Conversion-Optimized Design</h3>
                      <p className="text-gray-700">
                        AI applies color psychology, typography hierarchy, and layout principles proven to maximize attention and action—every element engineered to convert browsers into buyers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-8 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
                <h3 className="text-2xl font-bold mb-4 text-gray-950 text-center">The Result?</h3>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-brand-primary mb-2">3.7x</div>
                    <div className="text-sm text-gray-600">Higher Response Rates</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-secondary mb-2">47min</div>
                    <div className="text-sm text-gray-600">Average Delivery Time</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-accent mb-2">$4,300</div>
                    <div className="text-sm text-gray-600">Average Savings vs Traditional</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-primary mb-2">99.99%</div>
                    <div className="text-sm text-gray-600">Quality Assurance Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* By The Numbers */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">MyPrintSource By The Numbers</h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-brand-accent" />
                  <div className="text-5xl font-bold mb-2">10,000+</div>
                  <div className="text-gray-300">AI-Generated Campaigns Delivered</div>
                </div>
                <div className="p-6">
                  <Users className="w-12 h-12 mx-auto mb-4 text-brand-accent" />
                  <div className="text-5xl font-bold mb-2">3,200+</div>
                  <div className="text-gray-300">Businesses Trust Our AI</div>
                </div>
                <div className="p-6">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-brand-accent" />
                  <div className="text-5xl font-bold mb-2">$18M+</div>
                  <div className="text-gray-300">Saved vs Traditional Design</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Stop Wasting Money on Marketing That Doesn&apos;t Work?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Create your first AI-designed campaign free. See the difference intelligence makes.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center bg-white text-brand-primary hover:bg-gray-50 font-semibold text-xl px-12 py-5 rounded-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Create My Free Campaign Now
              <Sparkles className="ml-3 w-6 h-6" />
            </Link>
            <p className="text-white/80 text-sm mt-6">No credit card required • First campaign free • Materials delivered in under 60 minutes</p>
          </div>
        </section>
      </div>
    </MarketingLayout>
  )
}
