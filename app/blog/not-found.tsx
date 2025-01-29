import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Return to Blog</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

