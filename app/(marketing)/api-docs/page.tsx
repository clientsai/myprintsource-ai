import Link from 'next/link'
import MarketingLayout from '@/components/MarketingLayout'
import { Code, Zap, Shield, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'API Documentation - MyPrintSource AI Platform',
  description: 'Complete REST API documentation for integrating AI-powered print design generation into your applications.',
}

export default function ApiDocsPage() {
  return (
    <MarketingLayout>
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-12">
            <Link href="/docs" className="text-brand-primary hover:underline mb-4 inline-block">
              ← Back to Documentation
            </Link>
            <h1 className="text-5xl font-bold text-gray-950 mb-4">API Reference</h1>
            <p className="text-xl text-gray-600">
              Integrate AI-powered print design generation directly into your applications
            </p>
          </div>

          {/* Quick Start */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
            <p className="text-gray-600 mb-6">
              Get started with the MyPrintSource API in minutes. All endpoints use REST conventions and return JSON responses.
            </p>

            <div className="bg-gray-950 rounded-lg p-6 mb-6 overflow-x-auto">
              <code className="text-sm text-green-400 font-mono">
                <span className="text-gray-400"># Authentication</span><br/>
                curl https://myprintsource.com/api/v1/campaigns \<br/>
                  -H &quot;X-API-Key: your_api_key_here&quot;
              </code>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <Shield className="w-5 h-5 text-brand-primary mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-gray-950 mb-1">Get Your API Key</p>
                <p className="text-gray-600">
                  API keys are available in your dashboard under Settings → API Access. Keep your key secure and never commit it to source control.
                </p>
              </div>
            </div>
          </div>

          {/* Core Endpoints */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Core Endpoints</h2>

            {/* Campaign Generation */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Generate AI Campaign</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-mono">POST</span>
              </div>
              <p className="text-gray-600 mb-4">
                Create a new AI-designed marketing campaign from your business URL and campaign goals.
              </p>
              <div className="bg-gray-950 rounded-lg p-6 mb-4 overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  POST /api/v1/campaigns/generate
                </code>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm font-semibold text-gray-950 mb-3">Request Body:</p>
                <pre className="text-sm text-gray-600 overflow-x-auto">
{`{
  "business_url": "https://yourwebsite.com",
  "campaign_type": "direct_mail",
  "target_audience": "small_business_owners",
  "campaign_goal": "lead_generation",
  "quantity": 1000
}`}
                </pre>
              </div>
            </div>

            {/* Get Campaign Status */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Get Campaign Status</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-mono">GET</span>
              </div>
              <p className="text-gray-600 mb-4">
                Check the status of your AI-generated campaign, including design completion and print production progress.
              </p>
              <div className="bg-gray-950 rounded-lg p-6 mb-4 overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  GET /api/v1/campaigns/:campaign_id
                </code>
              </div>
            </div>

            {/* List Campaigns */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">List Campaigns</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-mono">GET</span>
              </div>
              <p className="text-gray-600 mb-4">
                Retrieve all campaigns for your account with optional filtering by status, date range, or campaign type.
              </p>
              <div className="bg-gray-950 rounded-lg p-6 mb-4 overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  GET /api/v1/campaigns?status=completed&amp;limit=50
                </code>
              </div>
            </div>

            {/* Track Delivery */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Track Delivery</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-mono">GET</span>
              </div>
              <p className="text-gray-600 mb-4">
                Get real-time tracking information for printed materials, including estimated delivery dates.
              </p>
              <div className="bg-gray-950 rounded-lg p-6 mb-4 overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  GET /api/v1/campaigns/:campaign_id/tracking
                </code>
              </div>
            </div>
          </div>

          {/* Response Format */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6">Response Format</h2>
            <p className="text-gray-600 mb-6">
              All API responses follow a consistent JSON format with standard HTTP status codes.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-950 mb-2">Success Response (200 OK):</p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <pre className="text-sm text-gray-600 overflow-x-auto">
{`{
  "success": true,
  "data": {
    "campaign_id": "cmp_abc123",
    "status": "generating",
    "designs_ready": false,
    "estimated_completion": "2025-01-15T14:30:00Z"
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-950 mb-2">Error Response (4xx/5xx):</p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <pre className="text-sm text-gray-600 overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "invalid_request",
    "message": "The business_url parameter is required"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Rate Limits */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Rate Limits</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-950">Standard Plan: 1,000 requests/hour</p>
                  <p className="text-sm text-gray-600">Sufficient for most automation needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-950">Pro Plan: 5,000 requests/hour</p>
                  <p className="text-sm text-gray-600">For high-volume integrations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-950">Enterprise: Custom limits</p>
                  <p className="text-sm text-gray-600">Contact sales for unlimited access</p>
                </div>
              </div>
            </div>
          </div>

          {/* SDKs */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4">Official SDKs</h2>
            <p className="text-gray-600 mb-6">
              We provide official SDKs to make integration even easier. All SDKs are open source and actively maintained.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <Code className="w-8 h-8 text-brand-primary mb-2" />
                <p className="font-semibold text-gray-950 mb-1">Node.js / TypeScript</p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <Code className="w-8 h-8 text-brand-primary mb-2" />
                <p className="font-semibold text-gray-950 mb-1">Python</p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <Code className="w-8 h-8 text-brand-primary mb-2" />
                <p className="font-semibold text-gray-950 mb-1">PHP</p>
                <p className="text-sm text-gray-500">Coming soon</p>
              </div>
            </div>
          </div>

          {/* Support CTA */}
          <div className="card p-8 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
            <div className="flex items-start space-x-4">
              <Zap className="w-12 h-12 text-brand-primary" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Need Help Getting Started?</h3>
                <p className="text-gray-600 mb-4">
                  Our developer support team is here to help you integrate the MyPrintSource API into your application.
                </p>
                <Link href="/contact" className="btn-primary inline-block">
                  Contact Developer Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingLayout>
  )
}
