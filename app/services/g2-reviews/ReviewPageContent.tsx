"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import PaypalButton from "@/app/components/PaypalButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function ReviewPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedPlatform, setSelectedPlatform] = useState<"g2" | "trustpilot" | "clutch">("g2");
  const [selectedReviews, setSelectedReviews] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 59,
    seconds: 59,
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Platform switching
  useEffect(() => {
    const platform = searchParams.get("platform");
    if (platform === "trustpilot") {
      setSelectedPlatform("trustpilot");
    } else if (platform === "clutch") {
      setSelectedPlatform("clutch");
    } else {
      setSelectedPlatform("g2");
    }
  }, [searchParams]);

  const handlePlatformSwitch = (platform: "g2" | "trustpilot" | "clutch") => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (platform === "g2") {
      newParams.delete("platform");
    } else {
      newParams.set("platform", platform);
    }
    router.replace(`/services/g2-reviews?${newParams.toString()}`, {
      scroll: false,
    });
  };

    const calculatePrice = (
      reviews: number,
      platform: "g2" | "trustpilot" | "clutch"
    ) => {
      // G2 and Clutch share the same pricing
      const isG2OrClutch = platform === "g2" || platform === "clutch";
      const basePrices = isG2OrClutch ? [20, 18, 15] : [10, 9, 8];
      const originalPrices = isG2OrClutch ? [25, 22, 20] : [15, 13, 12];
      const tier = reviews >= 10 ? 2 : reviews >= 5 ? 1 : 0;

      let basePrice = basePrices[tier];
      let originalPrice = originalPrices[tier];

      // Add $5 for G2/Clutch in-house reviews (always true now)
      if (isG2OrClutch) {
        basePrice += 5;
        originalPrice += 5;
      }

      return {
        total: basePrice * reviews,
        original: originalPrice * reviews,
      };
    };

    // Usage remains the same:
    const prices = calculatePrice(selectedReviews, selectedPlatform);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0c24] to-[#1a1630] text-white">
      <div className="bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] text-white py-3 text-center font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-sm sm:text-base">
          <span className="font-bold">🚀 Limited Offer: 82% OFF</span> • Ends in{" "}
          <span className="tabular-nums font-semibold">
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-[#1a1630] rounded-full p-1 flex gap-2 shadow-lg border border-[#2a253c] flex-wrap">
            {/* Platform Switcher Buttons */}
            <Button
              onClick={() => handlePlatformSwitch("g2")}
              className={`rounded-full px-6 py-2 text-white font-semibold transition-all duration-300 ${
                selectedPlatform === "g2"
                  ? "bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] shadow-md"
                  : "bg-transparent hover:bg-[#2a253c]"
              }`}
            >
              G2 Reviews
            </Button>
            <Button
              onClick={() => handlePlatformSwitch("trustpilot")}
              className={`rounded-full px-6 py-2 text-white font-semibold transition-all duration-300 ${
                selectedPlatform === "trustpilot"
                  ? "bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] shadow-md"
                  : "bg-transparent hover:bg-[#2a253c]"
              }`}
            >
              Trustpilot Reviews
            </Button>
            <Button
              onClick={() => handlePlatformSwitch("clutch")}
              className={`rounded-full px-6 py-2 text-white font-semibold transition-all duration-300 ${
                selectedPlatform === "clutch"
                  ? "bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] shadow-md"
                  : "bg-transparent hover:bg-[#2a253c]"
              }`}
            >
              Clutch Reviews
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16 px-4 sm:px-0">
          {[1, 10, 15].map((count) => {
            const prices = calculatePrice(count, selectedPlatform);
            return (
              <Card
                key={count}
                className={`bg-[#1a1630] cursor-pointer border-2 transition-all duration-300 hover:shadow-lg ${
                  selectedReviews === count
                    ? "border-[#ff4b36] shadow-lg"
                    : "border-[#2a253c]"
                }`}
                onClick={() => setSelectedReviews(count)}
              >
                {count === 10 && (
                  <Badge className="absolute top-2 right-2 bg-[#2f9b4b] animate-pulse">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-center">
                    <div className="text-4xl font-bold text-[#ff4b36] mb-4">
                      {count}
                    </div>
                    <div className="text-gray-300 font-semibold">
                      Reviews Package
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">
                      ${prices.total}
                    </span>
                    <span className="text-gray-400 line-through ml-2">
                      ${prices.original}
                    </span>
                  </div>
                  <ul className="space-y-4 mb-6 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-[#2f9b4b]">✓</span> Expertly Written
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2f9b4b]">✓</span> Platform Compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2f9b4b]">✓</span> Gradual Posting
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#2f9b4b]">✓</span> 14-Day Support
                    </li>
                  </ul>
                  <Button
                    className={`w-full text-white font-semibold transition-all duration-300 ${
                      selectedReviews === count
                        ? "bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] shadow-md"
                        : "bg-[#2a253c] hover:bg-[#3a354c]"
                    }`}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        
        {/* Complete Your Order Card */}
        <Card className="max-w-xl mx-auto mb-8 sm:mb-16 bg-[#1a1630] border-2 border-[#2a253c] shadow-lg">
          <CardHeader>
            <CardTitle className="text-white text-xl font-semibold">
              Complete Your Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-[#0f0c24] p-6 rounded-lg">
              <div className="mb-6">
                <label className="block text-gray-300 mb-3 text-sm font-medium">
                  Product/Service URL
                </label>
                <input
                  type="url"
                  name="url"
                  required
                  className="w-full px-4 py-3 bg-[#1a1630] border border-[#2a253c] rounded-lg 
                            focus:ring-2 focus:ring-[#ff4b36] focus:border-transparent 
                            transition-all duration-300 placeholder-gray-500 text-white"
                  placeholder="https://example.com/product"
                />
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-gray-300">Total:</span>
                <span className="text-2xl font-bold text-[#ff4b36]">
                  ${prices.total}
                </span>
              </div>

              <PayPalScriptProvider
                options={{
                  "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                  currency: "USD",
                  intent: "capture",
                }}
              >
                <PaypalButton price={prices.total} />
              </PayPalScriptProvider>

              <div className="mt-6 flex justify-center gap-4 text-white opacity-75">
                <span>💳</span>
                <span>🔒</span>
                <span>🛡️</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <section className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">
            Our Process
          </h2>
          <div className="grid sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: 1, title: "Select Package", icon: "📦" },
              { step: 2, title: "Provide Details", icon: "📝" },
              { step: 3, title: "Review Creation", icon: "✨" },
              { step: 4, title: "Strategic Posting", icon: "🚀" },
            ].map(({ step, title, icon }) => (
              <div
                key={step}
                className="bg-[#1a1630] p-4 sm:p-6 rounded-xl text-center border-2 border-[#2a253c] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-4 text-[#ff4b36]">
                  {icon}
                </div>
                <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-white">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {step === 1 &&
                    "Choose your ideal review quantity and service type"}
                  {step === 2 &&
                    "Share your product/service information securely"}
                  {step === 3 &&
                    "Our experts craft authentic, compliant reviews"}
                  {step === 4 &&
                    "Gradual posting for natural visibility growth"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 text-white">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="delivery">
              <AccordionTrigger className="font-medium text-white text-base sm:text-lg hover:no-underline hover:text-gray-300 transition-colors duration-300">
                How long does delivery take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm sm:text-base">
                Reviews are typically delivered within 7-14 days for natural
                distribution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="security">
              <AccordionTrigger className="font-medium text-white text-base sm:text-lg hover:no-underline hover:text-gray-300 transition-colors duration-300">
                Is my information secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm sm:text-base">
                We use enterprise-grade encryption and never share your data with
                third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="refunds">
              <AccordionTrigger className="font-medium text-white text-base sm:text-lg hover:no-underline hover:text-gray-300 transition-colors duration-300">
                What is your refund policy?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-sm sm:text-base">
                100% satisfaction guarantee with full refunds within 30 days if
                unsatisfied.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-[#ff4b36] to-[#ff6b4a] p-3 sm:p-4 rounded-full shadow-lg cursor-pointer group hover:shadow-2xl transition-all duration-300">
          <div className="relative">
            <span className="text-white text-xl sm:text-2xl">💬</span>
            <div className="absolute -right-8 -top-20 bg-white p-4 rounded-lg shadow-md w-56 text-sm text-[#1a1630] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-gray-800">
                Hello there! How can I assist you today? Feel free to ask
                anything
              </p>
              <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-white transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

