import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "../config/site"

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center h-full">
          <Image
            src={siteConfig.logo.src || "/placeholder.svg"}
            alt={siteConfig.logo.alt}
            width={siteConfig.logo.width}
            height={32}
            className="h-8 w-auto object-contain object-left"
          />
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-sm text-white hover:text-gray-300">
            HOME
          </Link>
          <Link href="/services" className="text-sm text-white hover:text-gray-300">
            SERVICES
          </Link>
          <Link href="/contact" className="text-sm text-white hover:text-gray-300">
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  )
}

