import Link from 'next/link'
import MarketingLayout from '@/components/MarketingLayout'
import { Bot, Zap, Brain, Target, TrendingUp, Clock, Sparkles, Users, FileText, BarChart3, Shield, Globe, Palette, MessageSquare, Award } from 'lucide-react'

export const metadata = {
  title: 'Features - AI That Designs Marketing Materials That Actually Convert | MyPrintSource',
  description: 'AI scans your business, profiles your customers, generates conversion-optimized copy and design, and delivers materials to your door—all in under 60 minutes.',
  keywords: 'AI design generation, AI copywriting, automated marketing design, AI business analysis, conversion optimization',
}

export default function FeaturesPage() {
  return (
    <MarketingLayout>
      <div className="pt-32 pb-16">
        {/* Hero */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                <span className="text-sm font-medium text-brand-secondary">Powered by Advanced AI</span>
              </div>
              <h1 className="text-6xl font-bold text-gray-950 mb-6 leading-tight tracking-tight">
                Features That Replace{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">$4,300 Worth of Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Forget designers. Forget copywriters. Forget guesswork. MyPrintSource AI scans your business, understands your customers, and generates world-class marketing materials scientifically engineered to convert.
              </p>
            </div>
          </div>
        </section>

        {/* Core AI Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-950 mb-4">How Our AI Works</h2>
                <p className="text-xl text-gray-600">Four intelligent systems working together to create campaigns that convert</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="card p-10 bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-2xl transition-all">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-950 mb-2">Deep Business Analysis</h3>
                      <div className="text-sm text-brand-primary font-semibold mb-3">Replaces: $500 market research</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Scans your entire website, social media, and online reviews in 8 seconds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Identifies your unique value proposition and competitive advantages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Extracts your brand voice, tone, and messaging patterns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-primary mr-2">•</span>
                      <span>Analyzes competitor positioning to differentiate your messaging</span>
                    </li>
                  </ul>
                </div>

                <div className="card p-10 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-950 mb-2">Customer Psychology Profiling</h3>
                      <div className="text-sm text-brand-secondary font-semibold mb-3">Replaces: $800 market segmentation</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-secondary mr-2">•</span>
                      <span>Identifies your ideal customer&apos;s demographics and psychographics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-secondary mr-2">•</span>
                      <span>Maps their pain points, frustrations, and deepest desires</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-secondary mr-2">•</span>
                      <span>Discovers objections and barriers preventing them from buying</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-secondary mr-2">•</span>
                      <span>Determines psychological triggers that drive action</span>
                    </li>
                  </ul>
                </div>

                <div className="card p-10 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-950 mb-2">Direct Response Copywriting</h3>
                      <div className="text-sm text-green-700 font-semibold mb-3">Replaces: $800 professional copywriter</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Generates headlines using proven psychological frameworks (AIDA, PAS, BAB)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Writes body copy that speaks directly to customer pain points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Creates compelling calls-to-action engineered to drive response</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Trained on millions of high-converting campaigns, not generic templates</span>
                    </li>
                  </ul>
                </div>

                <div className="card p-10 bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-2xl transition-all">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-950 mb-2">Conversion-Optimized Design</h3>
                      <div className="text-sm text-orange-700 font-semibold mb-3">Replaces: $2,000 graphic designer</div>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Applies color psychology based on your industry and audience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Creates visual hierarchy to guide the eye to key messages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Uses typography and layout principles proven to maximize readability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>Every design element engineered to convert browsers into buyers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card p-8 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white text-center">
                <h3 className="text-3xl font-bold mb-4">Total Value: $4,100 in Services</h3>
                <p className="text-xl mb-4">Traditional timeline: 2-3 weeks • AI timeline: 47 minutes average</p>
                <p className="text-2xl font-bold">You pay: $0 for AI generation • Only pay for materials you approve</p>
              </div>
            </div>
          </div>
        </section>

        {/* Campaign Types */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-12 text-center">What AI Can Generate</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card p-6 hover:shadow-xl transition-shadow">
                  <FileText className="w-10 h-10 text-brand-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-950">Direct Mail</h3>
                  <p className="text-gray-600 text-sm">Postcards, letters, self-mailers—AI generates copy and design that get opened and acted upon</p>
                </div>
                <div className="card p-6 hover:shadow-xl transition-shadow">
                  <FileText className="w-10 h-10 text-brand-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-950">Flyers & Door Hangers</h3>
                  <p className="text-gray-600 text-sm">Local marketing materials with headlines that grab attention and copy that converts</p>
                </div>
                <div className="card p-6 hover:shadow-xl transition-shadow">
                  <FileText className="w-10 h-10 text-brand-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-950">Brochures & Catalogs</h3>
                  <p className="text-gray-600 text-sm">Multi-page sales materials with persuasive layouts and benefit-driven copy</p>
                </div>
                <div className="card p-6 hover:shadow-xl transition-shadow">
                  <FileText className="w-10 h-10 text-brand-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-950">Business Cards</h3>
                  <p className="text-gray-600 text-sm">Professional designs that make memorable first impressions</p>
                </div>
                <div className="card p-6 hover:shadow-xl transition-shadow">
                  <FileText className="w-10 h-10 text-brand-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-950">Posters & Banners</h3>
                  <p className="text-gray-600 text-sm">Eye-catching visuals with bold messages for maximum impact</p>
                </div>
                <div className="card p-6 hover:shadow-xl transition-shadow">
                  <FileText className="w-10 h-10 text-brand-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-gray-950">Event Materials</h3>
                  <p className="text-gray-600 text-sm">Invitations, programs, signage—everything your event needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-12 text-center">Platform Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card p-6 bg-white">
                  <Zap className="w-10 h-10 text-brand-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Instant Generation</h3>
                  <p className="text-gray-600 text-sm">From business scan to approved design in minutes, not weeks</p>
                </div>
                <div className="card p-6 bg-white">
                  <Target className="w-10 h-10 text-brand-secondary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Unlimited Revisions</h3>
                  <p className="text-gray-600 text-sm">AI learns from your feedback—refine until perfect</p>
                </div>
                <div className="card p-6 bg-white">
                  <TrendingUp className="w-10 h-10 text-brand-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">A/B Testing Suggestions</h3>
                  <p className="text-gray-600 text-sm">AI generates multiple versions to test different approaches</p>
                </div>
                <div className="card p-6 bg-white">
                  <Clock className="w-10 h-10 text-brand-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Rush Delivery</h3>
                  <p className="text-gray-600 text-sm">Same-day and next-day options when you need it fast</p>
                </div>
                <div className="card p-6 bg-white">
                  <BarChart3 className="w-10 h-10 text-brand-secondary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Campaign Analytics</h3>
                  <p className="text-gray-600 text-sm">Track response rates and ROI for every campaign</p>
                </div>
                <div className="card p-6 bg-white">
                  <Shield className="w-10 h-10 text-brand-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">Quality Guarantee</h3>
                  <p className="text-gray-600 text-sm">99.99% quality rate—we reprint free if anything&apos;s wrong</p>
                </div>
                <div className="card p-6 bg-white">
                  <Globe className="w-10 h-10 text-brand-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">Multi-Location Support</h3>
                  <p className="text-gray-600 text-sm">Manage campaigns across multiple locations from one dashboard</p>
                </div>
                <div className="card p-6 bg-white">
                  <Bot className="w-10 h-10 text-brand-secondary mb-4" />
                  <h3 className="text-lg font-bold mb-2">API Access</h3>
                  <p className="text-gray-600 text-sm">Integrate AI design generation into your existing workflow</p>
                </div>
                <div className="card p-6 bg-white">
                  <Award className="w-10 h-10 text-brand-accent mb-4" />
                  <h3 className="text-lg font-bold mb-2">Brand Learning</h3>
                  <p className="text-gray-600 text-sm">AI remembers your preferences and improves with each campaign</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proven Results */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Proven Results Across 47,000+ Campaigns</h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2 text-brand-accent">3.7x</div>
                  <div className="text-gray-300">Higher Response Rates vs Traditional Design</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2 text-brand-accent">67%</div>
                  <div className="text-gray-300">Average Open Rate on Direct Mail</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2 text-brand-accent">47min</div>
                  <div className="text-gray-300">Average Time From Scan to Delivery</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2 text-brand-accent">$4,300</div>
                  <div className="text-gray-300">Average Savings Per Campaign</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Compares */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-950 mb-12 text-center">How AI Compares to Traditional Design</h2>
              <div className="card p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2">
                        <th className="text-left py-4 px-4 font-bold text-gray-900">Feature</th>
                        <th className="text-center py-4 px-4 font-bold text-red-700">Traditional Design</th>
                        <th className="text-center py-4 px-4 font-bold text-green-700">MyPrintSource AI</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Time to completion</td>
                        <td className="py-4 px-4 text-center text-red-600">2-3 weeks</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">47 minutes avg</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="py-4 px-4 font-medium">Cost for design & copy</td>
                        <td className="py-4 px-4 text-center text-red-600">$2,800 - $4,300</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">$0 (first free)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Business analysis depth</td>
                        <td className="py-4 px-4 text-center text-red-600">30 min website review</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">Full scan in 8 seconds</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="py-4 px-4 font-medium">Customer psychology profiling</td>
                        <td className="py-4 px-4 text-center text-red-600">Designer&apos;s guess</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">Data-driven analysis</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Revision turnaround</td>
                        <td className="py-4 px-4 text-center text-red-600">2-3 days each</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">Instant</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="py-4 px-4 font-medium">Number of revisions</td>
                        <td className="py-4 px-4 text-center text-red-600">3 included, then $500 each</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">Unlimited & free</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-4 font-medium">Average response rate</td>
                        <td className="py-4 px-4 text-center text-red-600">0.8%</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">3.1% (3.7x better)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-4 px-4 font-medium">Learning from results</td>
                        <td className="py-4 px-4 text-center text-red-600">No systematic improvement</td>
                        <td className="py-4 px-4 text-center text-green-600 font-semibold">AI learns & improves</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">See the AI Difference for Yourself</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Your first AI-generated campaign is 100% free. Experience what 3,200+ businesses already know.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center bg-white text-brand-primary hover:bg-gray-50 font-semibold text-xl px-12 py-5 rounded-xl transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              Create My Free Campaign Now
              <Sparkles className="ml-3 w-6 h-6" />
            </Link>
            <p className="text-white/80 text-sm mt-6">No credit card • No designer fees • Materials delivered in under 60 minutes</p>
          </div>
        </section>
      </div>
    </MarketingLayout>
  )
}
