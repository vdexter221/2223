'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import LoadingSpinner from './components/LoadingSpinner'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/services/g2-reviews');
    }, 1000); // Simulate a 1-second loading time
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24]">
      {isLoading && <LoadingSpinner />}
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

      {/* Hero Section */}
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-12">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-white leading-tight opacity-0 animate-fade-in-up">
                Use reviews as a competitive marketing tool.
              </h1>
              <p className="text-xl text-gray-400 opacity-0 animate-fade-in-up delay-200">
                Our world-class review services ensure you have the higher online reputation you deserve.
              </p>
              <div className="flex gap-4 opacity-0 animate-fade-in-up delay-400">
                <Button 
                  size="lg" 
                  className="bg-[#ff4b36] hover:bg-[#ff3621] text-white px-8"
                  onClick={handleGetStarted}
                >
                  GET STARTED NOW
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] hidden lg:block opacity-0 animate-fade-in-up delay-600">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Marketing Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="bg-black/50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1630] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">G2 Reviews</h3>
                <p className="text-gray-400 mb-6">
                  Enhance your product's credibility with authentic G2 reviews from real users.
                </p>
                <Button 
                  variant="outline" 
                  className="text-white border-[#ff4b36] hover:bg-[#ff4b36]"
                  onClick={handleGetStarted}
                >
                  Learn More
                </Button>
              </div>
              <div className="bg-[#1a1630] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Trustpilot Reviews</h3>
                <p className="text-gray-400 mb-6">
                  Build trust and credibility with verified Trustpilot reviews.
                </p>
                <Button variant="outline" className="text-white border-[#ff4b36] hover:bg-[#ff4b36]">
                  Coming Soon
                </Button>
              </div>
              <div className="bg-[#1a1630] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Custom Solutions</h3>
                <p className="text-gray-400 mb-6">
                  Tailored review management solutions for your specific needs.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="text-white border-[#ff4b36] hover:bg-[#ff4b36]">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
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

