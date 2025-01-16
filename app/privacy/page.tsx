import Link from 'next/link'
import Image from 'next/image'

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
            
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.</p>
            
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not share your personal information with third parties except as described in this policy.</p>
            
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="mb-4">We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
            
            <h2 className="text-2xl font-semibold mb-4">5. Changes to this Policy</h2>
            <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
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

