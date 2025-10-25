import Link from 'next/link'
import Image from 'next/image'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/brand/logo-myprintsource.png"
                alt="MyPrintSource - Powered by AI"
                width={320}
                height={80}
                priority
                className="h-24 w-auto"
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

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
                <Image
                  src="/brand/logo-myprintsource.png"
                  alt="MyPrintSource"
                  width={240}
                  height={60}
                  className="h-16 w-auto mb-4"
                />
              </Link>
              <p className="text-sm text-gray-600 leading-relaxed">
                AI that creates world-class marketing materials designed to convert—delivered to your door in under an hour.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/pricing" className="hover:text-brand-primary transition-colors">Pricing</Link></li>
                <li><Link href="/features" className="hover:text-brand-primary transition-colors">Features</Link></li>
                <li><Link href="/blog" className="hover:text-brand-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-brand-primary transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
                <li><Link href="/status" className="hover:text-brand-primary transition-colors">System Status</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/help" className="hover:text-brand-primary transition-colors">Help Center</Link></li>
                <li><Link href="/docs" className="hover:text-brand-primary transition-colors">Documentation</Link></li>
                <li><Link href="/api/v1/docs" className="hover:text-brand-primary transition-colors">API Reference</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-gray-600">
            <p className="mb-3">&copy; 2025 MyPrintSource. Powered by AI. All rights reserved.</p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
              <span className="text-gray-400">•</span>
              <Link href="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
              <span className="text-gray-400">•</span>
              <Link href="/security" className="hover:text-brand-primary transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
