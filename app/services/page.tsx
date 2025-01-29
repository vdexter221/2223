import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteConfig } from "../config/site";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24]">
      <Header />
      
      <main className="flex-1 py-16 flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-12 text-center">Our Services</h1>
          
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* G2 Reviews Card */}
            <div className="bg-[#1a1630] p-8 rounded-xl flex flex-col h-full border border-[#2d2848]">
              <h2 className="text-2xl font-semibold text-white mb-4">G2 Reviews</h2>
              <p className="text-gray-400 mb-6 flex-1">
                Enhance your product's credibility with authentic G2 reviews from real users. 
                Our service ensures high-quality, verified reviews that boost your product's 
                visibility and trustworthiness on G2.
              </p>
              <div className="mt-auto">
                <Link href="/services/g2-reviews" className="block w-full">
                  <Button className="w-full bg-[#ff4b36] hover:bg-[#ff3621] text-white py-4 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trustpilot Reviews Card */}
            <div className="bg-[#1a1630] p-8 rounded-xl flex flex-col h-full border border-[#2d2848]">
              <h2 className="text-2xl font-semibold text-white mb-4">Trustpilot Reviews</h2>
              <p className="text-gray-400 mb-6 flex-1">
                Build trust and credibility with verified Trustpilot reviews. Our service helps 
                you gather authentic feedback from real customers, improving your online 
                reputation and attracting more potential clients.
              </p>
              <div className="mt-auto">
                <Link href="/services/g2-reviews?platform=trustpilot" className="block w-full">
                  <Button className="w-full bg-[#ff4b36] hover:bg-[#ff3621] text-white py-4 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Custom Solutions Card */}
            <div className="bg-[#1a1630] p-8 rounded-xl flex flex-col h-full border border-[#2d2848]">
              <h2 className="text-2xl font-semibold text-white mb-4">Custom Solutions</h2>
              <p className="text-gray-400 mb-6 flex-1">
                Need a tailored approach to managing your online reputation? Our custom solutions 
                are designed to meet your specific needs, whether it's managing reviews across 
                multiple platforms or creating a comprehensive reputation management strategy.
              </p>
              <div className="mt-auto">
                <Link href="/contact" className="block w-full">
                  <Button className="w-full bg-[#ff4b36] hover:bg-[#ff3621] text-white py-4 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

