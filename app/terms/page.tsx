import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"
import { siteConfig } from "@/app/config/site";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0f0c24] to-[#1a1630] text-white">
      {/* Header */}
      <header className="border-b border-[#2a253c] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={siteConfig.logo.src || "/placeholder.svg"}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={32}
              className="h-8 w-auto object-contain object-left"
            />
          </Link>
          <nav className="flex gap-6">
            <Link 
              href="/" 
              className="text-sm hover:bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              HOME
            </Link>
            <Link 
              href="/contact" 
              className="text-sm hover:bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              CONTACT US
            </Link>
            <Link 
              href="/services" 
              className="text-sm hover:bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              SERVICES
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <div className="bg-[#1a1630] rounded-xl shadow-lg p-8 border-2 border-[#2a253c]">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing or using our services, you agree to be bound by these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">2. Description of Service</h2>
                <p className="text-gray-300">
                  {siteConfig.name} provides review management services for various platforms including G2, Trustpilot, 
                  and Clutch.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
                <p className="text-gray-300">
                  You are responsible for maintaining the confidentiality of your account information and for all 
                  activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">4. Payment and Refunds</h2>
                <p className="text-gray-300">
                  All purchases are final and non-refundable unless otherwise stated in our refund policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">5. Limitation of Liability</h2>
                <p className="text-gray-300">
                  {siteConfig.name} shall not be liable for any indirect, incidental, special, consequential or 
                  punitive damages resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. Your continued use of the service after 
                  such modifications constitutes your acceptance of the modified terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

