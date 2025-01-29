import { Suspense } from "react"
import ReviewPageContent from "./ReviewPageContent"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function ReviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24]">
      <Header />
      <Suspense fallback={<div className="flex-1 py-8 text-white">Loading...</div>}>
        <ReviewPageContent />
      </Suspense>
      <Footer />
    </div>
  )
}

