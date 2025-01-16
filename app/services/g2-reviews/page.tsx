'use client'

import { useState, useCallback, useMemo, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { sendPurchaseEmail } from '../../actions/sendPurchaseEmail';

export default function G2Reviews() {
  const [selectedType, setSelectedType] = useState<'custom' | 'inhouse'>('custom')
  const [selectedReviews, setSelectedReviews] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const pricePerReview = useMemo(() => selectedType === 'custom' ? 15 : 18, [selectedType])
  const originalPricePerReview = useMemo(() => selectedType === 'custom' ? 20 : 22, [selectedType])
  const totalPrice = useMemo(() => selectedReviews * pricePerReview, [selectedReviews, pricePerReview])
  const originalTotalPrice = useMemo(() => selectedReviews * originalPricePerReview, [selectedReviews, originalPricePerReview])

  const handleTypeSelect = useCallback((type: 'custom' | 'inhouse') => {
    setSelectedType(type)
  }, [])

  const handleReviewSelect = useCallback((count: number) => {
    setSelectedReviews(count)
  }, [])

  const handlePurchase = useCallback(async (formData: FormData) => {
    formData.append('reviewType', selectedType);
    formData.append('reviewCount', selectedReviews.toString());
    formData.append('totalPrice', totalPrice.toFixed(2));
    
    const result = await sendPurchaseEmail(formData);
    alert(result.message);
  }, [selectedType, selectedReviews, totalPrice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500) // Simulate a 500ms loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return null // Or return a loading spinner if you prefer
  }

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      {/* Header */}
      <header className="bg-black border-gray-800">
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
      <main className="flex-1 py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Buy G2 Reviews with Fast Delivery</h1>
          <p className="text-gray-600 mb-12">
            With Orderboosts.com you can easily buy G2 reviews safely and securely.
          </p>

          {/* Quality Selection */}
          <Card className="max-w-md mx-auto mb-8 p-2">
            <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
              <Button 
                className={`flex-1 ${selectedType === 'custom' ? 'bg-[#ff4b36] text-white' : 'bg-white text-black'}`}
                onClick={() => handleTypeSelect('custom')}
              >
                Custom Text
              </Button>
              <Button 
                className={`flex-1 ${selectedType === 'inhouse' ? 'bg-[#ff4b36] text-white' : 'bg-white text-black'}`}
                onClick={() => handleTypeSelect('inhouse')}
              >
                Inhouse
                <Badge variant="secondary" className="ml-2 bg-gray-800 text-white">
                  Recommended
                </Badge>
              </Button>
            </div>
          </Card>

          {/* Review Options */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            {[1, 2, 3, 5, 10, 15].map((count) => (
              <Button
                key={count}
                variant={selectedReviews === count ? "default" : "outline"}
                className={`w-full ${selectedReviews === count ? 'bg-[#ff4b36]' : 'bg-white'} text-black`}
                onClick={() => handleReviewSelect(count)}
              >
                {count} {count === 1 ? 'Review' : 'Reviews'}
              </Button>
            ))}
          </div>

          {/* Pricing and Purchase Form */}
          <Card className="max-w-md mx-auto p-4">
            <form onSubmit={e => {e.preventDefault(); handlePurchase(new FormData(e.target))}} className="space-y-4">
              <div className="flex items-baseline gap-2 justify-center mb-4">
                <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${originalTotalPrice.toFixed(2)}</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 border rounded text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 border rounded text-black"
              />
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-green-500 text-white">
                  Limited Offer!
                </Badge>
                <Button type="submit" className="bg-[#ff4b36] hover:bg-[#ff3621]">
                  Purchase Now
                </Button>
              </div>
            </form>
          </Card>
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
                <Link href="/service" className="text-gray-400 hover:text-white">
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

