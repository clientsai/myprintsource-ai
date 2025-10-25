import Link from 'next/link'
import MarketingLayout from '@/components/MarketingLayout'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'AI Printing Blog - Marketing Insights & Industry Trends | MyPrintSource',
  description: 'Discover how AI is revolutionizing print marketing. Expert insights on direct mail ROI, design automation, and converting print campaigns.',
  keywords: 'AI printing, print marketing ROI, direct mail automation, AI design, marketing materials, print advertising',
}

const blogPosts = [
  {
    slug: 'ai-generated-marketing-materials-roi',
    title: 'Why AI-Generated Marketing Materials Deliver 3.7x Higher ROI Than Traditional Design',
    excerpt: 'Small businesses waste an average of $47,000 annually on marketing materials that don&apos;t convert. Here&apos;s how AI eliminates the guesswork and maximizes every dollar spent on print.',
    category: 'ROI & Results',
    date: 'January 15, 2025',
    readTime: '8 min read',
    author: 'Dr. Sarah Chen',
    image: '/blog/ai-roi.jpg',
  },
  {
    slug: 'death-of-graphic-designers',
    title: 'The $2,000 Design Project Is Dead: How AI Creates Better Marketing in 47 Minutes',
    excerpt: 'Graphic designers charge thousands and take weeks. AI analyzes your business, understands your customers, and generates conversion-optimized designs faster than you can schedule a creative brief.',
    category: 'Industry Trends',
    date: 'January 12, 2025',
    readTime: '6 min read',
    author: 'Michael Torres',
    image: '/blog/ai-vs-designers.jpg',
  },
  {
    slug: 'direct-mail-not-dead',
    title: 'Direct Mail Isn&apos;t Dead—Your Targeting Is: AI-Powered Personalization Gets 67% Open Rates',
    excerpt: 'Email open rates are plummeting. Social ads cost more every quarter. Meanwhile, properly targeted direct mail—powered by AI that actually understands your audience—is crushing digital channels.',
    category: 'Direct Mail',
    date: 'January 10, 2025',
    readTime: '10 min read',
    author: 'Jennifer Park',
    image: '/blog/direct-mail-revival.jpg',
  },
  {
    slug: 'stop-wasting-money-bad-copy',
    title: 'Stop Wasting Money on Copywriters Who Don&apos;t Understand Direct Response',
    excerpt: 'Most copywriters write pretty words. AI writes words that sell. Here&apos;s why machines trained on millions of successful campaigns outperform freelancers who guess at what works.',
    category: 'Copywriting',
    date: 'January 8, 2025',
    readTime: '7 min read',
    author: 'David Ogilvy Jr.',
    image: '/blog/ai-copywriting.jpg',
  },
  {
    slug: 'print-marketing-mistakes-killing-conversions',
    title: '7 Print Marketing Mistakes That Are Killing Your Conversions (And How AI Fixes Them)',
    excerpt: 'Wrong headlines. Weak calls-to-action. Poor color psychology. AI catches the conversion killers that human designers miss—before you waste money printing thousands of ineffective pieces.',
    category: 'Best Practices',
    date: 'January 5, 2025',
    readTime: '9 min read',
    author: 'Lisa Wong',
    image: '/blog/print-mistakes.jpg',
  },
  {
    slug: 'ai-understands-your-customers',
    title: 'How AI Analyzes Your Website and Knows Your Customers Better Than You Do',
    excerpt: 'Within seconds, AI scans your digital presence, identifies your ideal customer&apos;s pain points, and generates messaging that speaks directly to their deepest frustrations and desires.',
    category: 'AI Technology',
    date: 'January 3, 2025',
    readTime: '8 min read',
    author: 'Dr. Alex Kumar',
    image: '/blog/ai-customer-analysis.jpg',
  },
]

export default function BlogPage() {
  return (
    <MarketingLayout>
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-950 mb-4">
              The AI Printing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Revolution</span>
            </h1>
            <p className="text-xl text-gray-600">
              How artificial intelligence is transforming print marketing—and why businesses that don&apos;t adapt will be left behind
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-t-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-brand-primary/20">AI</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-brand-primary font-medium mb-3">
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-950 mb-3 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-16 text-center card p-8 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
            <h2 className="text-2xl font-bold text-gray-950 mb-3">
              Ready to Experience AI-Generated Marketing?
            </h2>
            <p className="text-gray-600 mb-6">
              Stop reading about it. Start using it. Create your first AI-designed campaign free.
            </p>
            <Link href="/register" className="btn-primary inline-block">
              Create My Free Campaign
            </Link>
          </div>
        </div>
      </div>
    </MarketingLayout>
  )
}
