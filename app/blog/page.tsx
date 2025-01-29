import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "../components/Header"
import Footer from "../components/Footer"

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Online Reviews for Business Growth",
    excerpt: "Discover how online reviews can significantly impact your business's growth and customer trust.",
    date: "2025-01-20",
    slug: "importance-of-online-reviews",
  },
  {
    id: 2,
    title: "Maximizing Your G2 Presence: Tips and Strategies",
    excerpt:
      "Learn how to optimize your G2 profile and leverage reviews to stand out in the competitive software market.",
    date: "2025-01-25",
    slug: "maximizing-g2-presence",
  },
  {
    id: 3,
    title: "Building Trust on Trustpilot: A Comprehensive Guide",
    excerpt: "Explore strategies to build and maintain a strong reputation on Trustpilot to attract more customers.",
    date: "2025-01-30",
    slug: "building-trust-on-trustpilot",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24]">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Our Blog</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-[#1a1630] border-none text-white">
                <CardHeader>
                  <CardTitle className="text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#ff4b36] transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

