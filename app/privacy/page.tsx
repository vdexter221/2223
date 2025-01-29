import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { siteConfig } from "@/app/config/site"; // Ensure correct path

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24] text-white">
      {/* Header */}
      <header className="border-b border-muted bg-[#0f0c24]">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={siteConfig.logo.width}
              height={32}
              className="h-8 w-auto object-contain"
            />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            {["home", "contact", "services"].map((item) => (
              <Link
                key={item}
                href={`/${item === "home" ? "" : item}`}
                className="text-sm font-medium text-white hover:text-primary transition-colors capitalize"
              >
                {item.replace("-", " ")}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Privacy Policy
          </h1>

          <div className="bg-[#1a1630] rounded-xl p-6 sm:p-8 shadow-lg">
            {[
              {
                title: "1. Information We Collect",
                content:
                  "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.",
              },
              {
                title: "2. How We Use Your Information",
                content:
                  "We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you.",
              },
              {
                title: "3. Information Sharing and Disclosure",
                content:
                  "We do not share your personal information with third parties except as described in this policy.",
              },
              {
                title: "4. Data Security",
                content:
                  "We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.",
              },
              {
                title: "5. Changes to this Policy",
                content:
                  "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.",
              },
            ].map((section, index) => (
              <section key={index} className="mb-8 last:mb-0">
                <h2 className="text-xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
            <Footer />
    </div>
  );
}

