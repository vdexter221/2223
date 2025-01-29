"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LoadingSpinner from "./components/LoadingSpinner"
import { siteConfig } from "./config/site"
import { CheckCircle, Star, TrendingUp, Users } from "lucide-react"
import AnimatedBalls from "./components/AnimatedBalls"
import Footer from "./components/Footer"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  const handleGetStarted = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/services/g2-reviews")
    }, 1000)
  }

  const handleLearnMore = () => {
    const featuresSection = document.getElementById("why-choose-orderboosts")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24]">
      {isLoading && <LoadingSpinner />}

      {/* Main content */}
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-white leading-tight opacity-0 animate-fade-in-up">
                Boost Your Online Reputation with Authentic Reviews
              </h1>
              <p className="text-xl text-gray-400 opacity-0 animate-fade-in-up delay-200">
                Enhance your product's credibility and visibility with our world-class review management services.
              </p>
              <div className="flex gap-4 opacity-0 animate-fade-in-up delay-400">
                <Button
                  size="lg"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-[#ff4b36] hover:bg-[#ff3621] text-white px-8 transform hover:scale-105"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  className="text-white bg-transparent border-2 border-[#ff4b36] hover:bg-[#ff4b36] transition-all duration-300 transform hover:scale-105"
                  onClick={handleLearnMore}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] hidden lg:block opacity-0 animate-fade-in-up delay-600">
              <AnimatedBalls />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="py-24 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white text-center mb-16">We Know Customer Experience</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1a1630] p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-5xl font-bold text-[#ff4b36] mb-4">50+</div>
                <div className="text-gray-400">Customers from</div>
                <div className="text-white font-semibold">Countries</div>
              </div>
              <div className="bg-[#1a1630] p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-5xl font-bold text-[#ff4b36] mb-4">100,000+</div>
                <div className="text-gray-400">Feedback</div>
                <div className="text-white font-semibold">Collected</div>
              </div>
              <div className="bg-[#1a1630] p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-5xl font-bold text-[#ff4b36] mb-4">95%</div>
                <div className="text-gray-400">Customer</div>
                <div className="text-white font-semibold">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="why-choose-orderboosts" className="bg-black/50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Orderboosts?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-[#1a1630] border-none">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-[#ff4b36] mb-4" />
                  <CardTitle className="text-white">Authentic Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">We provide genuine reviews from real users to boost your credibility.</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1630] border-none">
                <CardHeader>
                  <TrendingUp className="w-12 h-12 text-[#ff4b36] mb-4" />
                  <CardTitle className="text-white">Improved Visibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Increase your product's visibility and attract more potential customers.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1630] border-none">
                <CardHeader>
                  <Users className="w-12 h-12 text-[#ff4b36] mb-4" />
                  <CardTitle className="text-white">Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Our experienced team ensures high-quality review management services.</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1630] border-none">
                <CardHeader>
                  <Star className="w-12 h-12 text-[#ff4b36] mb-4" />
                  <CardTitle className="text-white">Tailored Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">We offer customized strategies to meet your specific business needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Online Reputation?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Get started today and see the difference authentic reviews can make for your business.
            </p>
            <Button
              size="lg"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-[#ff4b36] hover:bg-[#ff3621] text-white px-8 transform hover:scale-105"
              onClick={handleGetStarted}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

