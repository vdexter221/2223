import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactUs() {
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
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full bg-[#ff4b36] hover:bg-[#ff3621] text-white">
                Send Message
              </Button>
            </form>
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

