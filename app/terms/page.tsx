import Link from 'next/link'
import Image from 'next/image'

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24]">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orderboosts-high-resolution-logo-7MVzOBcVPWbQ2SJKioOcog58pL7bP1.png"
              alt="Orderboosts"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-sm text-white hover:text-gray-300">HOME</Link>
            <Link href="/contact" className="text-sm text-white hover:text-gray-300">CONTACT US</Link>
            <Link href="/services" className="text-sm text-white hover:text-gray-300">SERVICES</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing or using our services, you agree to be bound by these Terms of Service.</p>
            
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">Orderboosts provides review management services for various platforms, including G2.</p>
            
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
            
            <h2 className="text-2xl font-semibold mb-4">4. Payment and Refunds</h2>
            <p className="mb-4">All purchases are final and non-refundable unless otherwise stated in our refund policy.</p>
            
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">Orderboosts shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.</p>
            
            <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
            <p className="mb-4">We reserve the right to modify these terms at any time. Your continued use of the service after such modifications constitutes your acceptance of the modified terms.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/orderboosts-high-resolution-logo-7MVzOBcVPWbQ2SJKioOcog58pL7bP1.png"
              alt="Orderboosts"
              width={200}
              height={50}
              className="mb-4 object-contain"
            />
            <p className="text-gray-400">
              Orderboosts.com is a trusted, USA-based company specializing in enhancing your social media presence across platforms.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/g2-reviews" className="text-gray-400 hover:text-white">
                  Buy G2 Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

