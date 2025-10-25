import Link from 'next/link'
import MarketingLayout from '@/components/MarketingLayout'
import { Book, Code, Zap, FileText, Wrench, HelpCircle } from 'lucide-react'

export const metadata = {
  title: 'Documentation - MyPrintSource AI Platform',
  description: 'Complete guides, API documentation, and resources for integrating MyPrintSource AI into your workflow.',
}

export default function DocsPage() {
  return (
    <MarketingLayout>
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-950 mb-4">Documentation</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to integrate AI-powered print marketing into your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link href="/help" className="card p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mb-4">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                Getting Started
              </h3>
              <p className="text-gray-600 text-sm">
                Quick start guides and tutorials to create your first AI-designed campaign in minutes
              </p>
            </Link>

            <Link href="/api/v1/docs" className="card p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                API Reference
              </h3>
              <p className="text-gray-600 text-sm">
                Complete REST API documentation with examples for automating AI design generation
              </p>
            </Link>

            <Link href="/help" className="card p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                Integration Guides
              </h3>
              <p className="text-gray-600 text-sm">
                Connect MyPrintSource AI to your CRM, e-commerce platform, or existing workflow
              </p>
            </Link>

            <div className="card p-8 bg-gray-50">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Best Practices</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn how our AI creates high-converting designs and how to get the best results
              </p>
              <span className="text-xs text-gray-500">Coming soon</span>
            </div>

            <div className="card p-8 bg-gray-50">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Webhooks & Automation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Set up real-time notifications for campaign status, delivery tracking, and more
              </p>
              <span className="text-xs text-gray-500">Coming soon</span>
            </div>

            <Link href="/help" className="card p-8 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                FAQ & Support
              </h3>
              <p className="text-gray-600 text-sm">
                Common questions, troubleshooting guides, and how to get help from our team
              </p>
            </Link>
          </div>

          {/* Popular Resources */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">Popular Resources</h2>
            <div className="space-y-4">
              <Link href="/help" className="flex items-start space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">Creating Your First AI Campaign</h4>
                  <p className="text-sm text-gray-600">Step-by-step guide to generating your first marketing materials</p>
                </div>
              </Link>
              <Link href="/api/v1/docs" className="flex items-start space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-brand-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">API Authentication</h4>
                  <p className="text-sm text-gray-600">How to authenticate and make your first API request</p>
                </div>
              </Link>
              <Link href="/help" className="flex items-start space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">Understanding AI-Generated Copy</h4>
                  <p className="text-sm text-gray-600">How our AI writes conversion-optimized marketing copy</p>
                </div>
              </Link>
              <Link href="/help" className="flex items-start space-x-3 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-950 mb-1">Print Specifications & File Formats</h4>
                  <p className="text-sm text-gray-600">Technical requirements for professional print production</p>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center card p-8 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
            <h3 className="text-2xl font-bold mb-3">Can&apos;t Find What You&apos;re Looking For?</h3>
            <p className="text-gray-600 mb-6">Our support team is here to help</p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </MarketingLayout>
  )
}
