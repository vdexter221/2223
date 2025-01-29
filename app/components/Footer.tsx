"use client"

import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "../config/site"

export default function Footer() {
  return (
    <footer className="border-t border-[#2a253c] py-16 bg-gradient-to-br from-[#0f0c24] to-[#1a1630]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Image
            src={siteConfig.logo.src || "/placeholder.svg"}
            alt={siteConfig.logo.alt}
            width={200}
            height={50}
            className="object-contain"
          />
          <p className="text-gray-400">
            {siteConfig.name} is a trusted, USA-based company specializing in enhancing your online reputation across
            platforms.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/services/g2-reviews" 
                className="text-gray-400 hover:text-[#ff6b4a] transition-colors"
              >
                Buy G2 Reviews
              </Link>
            </li>
            <li>
              <Link 
                href="/services/g2-reviews?platform=trustpilot" 
                className="text-gray-400 hover:text-[#ff6b4a] transition-colors"
              >
                Buy Trustpilot Reviews
              </Link>
            </li>
            <li>
              <Link 
                href="/services/g2-reviews?platform=clutch" 
                className="text-gray-400 hover:text-[#ff6b4a] transition-colors"
              >
                Buy Clutch Reviews
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-[#ff6b4a] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-[#ff6b4a] transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="text-gray-400 hover:text-[#ff6b4a] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

