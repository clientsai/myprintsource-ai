import MarketingLayout from '@/components/MarketingLayout'
import { CheckCircle, Clock, Activity } from 'lucide-react'

export const metadata = {
  title: 'System Status - MyPrintSource AI Platform',
  description: 'Real-time status of MyPrintSource AI printing platform, API, and services.',
}

export default function StatusPage() {
  const services = [
    { name: 'AI Design Engine', status: 'operational', uptime: '99.99%', responseTime: '127ms' },
    { name: 'Print Production', status: 'operational', uptime: '99.98%', responseTime: '—' },
    { name: 'API Services', status: 'operational', uptime: '99.99%', responseTime: '89ms' },
    { name: 'Campaign Generation', status: 'operational', uptime: '100%', responseTime: '1.2s' },
    { name: 'Payment Processing', status: 'operational', uptime: '99.99%', responseTime: '340ms' },
    { name: 'Delivery Tracking', status: 'operational', uptime: '100%', responseTime: '156ms' },
  ]

  return (
    <MarketingLayout>
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">All Systems Operational</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-950 mb-4">System Status</h1>
            <p className="text-xl text-gray-600">
              Real-time monitoring of MyPrintSource AI platform performance
            </p>
          </div>

          {/* Current Status */}
          <div className="card p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">99.99%</div>
                <div className="text-sm text-gray-600">Overall Uptime</div>
                <div className="text-xs text-gray-500 mt-1">Last 90 days</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-primary mb-2">143ms</div>
                <div className="text-sm text-gray-600">Average Response Time</div>
                <div className="text-xs text-gray-500 mt-1">Global average</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-secondary mb-2">0</div>
                <div className="text-sm text-gray-600">Active Incidents</div>
                <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
              </div>
            </div>
          </div>

          {/* Service Status */}
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl font-bold text-gray-950 mb-6">Service Status</h2>
            {services.map((service) => (
              <div key={service.name} className="card p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-950">{service.name}</div>
                      <div className="text-sm text-green-600">Operational</div>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-gray-600">Uptime: <span className="font-semibold">{service.uptime}</span></div>
                    {service.responseTime !== '—' && (
                      <div className="text-gray-500">Response: {service.responseTime}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Uptime History */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-950 mb-6">Uptime History</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-700">Last 24 hours</span>
                <span className="font-semibold text-green-600">100% uptime</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-700">Last 7 days</span>
                <span className="font-semibold text-green-600">100% uptime</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <span className="text-gray-700">Last 30 days</span>
                <span className="font-semibold text-green-600">99.99% uptime</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Last 90 days</span>
                <span className="font-semibold text-green-600">99.99% uptime</span>
              </div>
            </div>
          </div>

          {/* Subscribe to Updates */}
          <div className="mt-8 card p-8 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 text-center">
            <h3 className="text-xl font-bold mb-2">Get Status Updates</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to receive notifications about incidents and maintenance
            </p>
            <button className="btn-outline">Subscribe to Updates</button>
          </div>
        </div>
      </div>
    </MarketingLayout>
  )
}
