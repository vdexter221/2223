// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "./config/site"
import Navbar from "./components/Navbar"
import "./globals.css"
import Script from "next/script"
import { JsonLd } from "react-schemaorg"
import type { Organization } from "react-schemaorg"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name} - Buy Authentic G2 Reviews & Trustpilot Review Services`,
  },
  description:
    "Orderboosts - Buy verified G2 reviews and purchase authentic Trustpilot reviews. Get premium review management services with guaranteed platform compliance. Boost your business credibility with our professional review solutions.",
  keywords: [
    "buy G2 reviews",
    "purchase Trustpilot reviews",
    "get verified reviews",
    "authentic G2 reviews service",
    "Trustpilot review packages",
    "buy business reviews",
    "G2 review service",
    "Trustpilot review solutions",
    "purchase authentic reviews",
    "buy product reviews",
    "online review management",
    "professional review services",
    "boost G2 ratings",
    "improve Trustpilot score",
    "authentic review generation",
    "buy positive reviews",
    "G2 review acquisition",
    "Trustpilot review placement",
    "ethical review services",
    "compliant review management",
    "buy company reviews",
    "purchase customer reviews",
    "get G2 verified reviews",
    "Trustpilot review marketing",
    "review acquisition service",
    "business reputation management",
    "buy software reviews",
    "purchase service reviews",
    "get authentic testimonials",
    "G2 profile optimization",
    "Trustpilot profile management"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description:
      "Buy authentic G2 reviews and purchase verified Trustpilot reviews. Professional review management services with guaranteed compliance. Enhance your business credibility today.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Orderboosts - Professional Review Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Get authentic G2 reviews & Trustpilot reviews from experts. Buy verified reviews with guaranteed platform compliance. Boost your business credibility now.",
    images: [siteConfig.ogImage],
    creator: "@orderboosts",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen bg-[#0f0c24]">{children}</div>
        <JsonLd<Organization>
          item={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: siteConfig.logo.src,
            description: siteConfig.description,
            sameAs: [
              "https://twitter.com/orderboosts",
              "https://www.linkedin.com/company/orderboosts",
            ],
          }}
        />
        <Script id="hotjar-script" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5279171,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <Script id="webagent-chatbot" strategy="afterInteractive">
          {`
            (function () {
                d = document;
                s = d.createElement("script");
                s.src = "https://webagent.ai/api/chatbot/d9f11c6f-7060-409a-81bd-5370d48ebcc8";
                s.async = 1;
                d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}

