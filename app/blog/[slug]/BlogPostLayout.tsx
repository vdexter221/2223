"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Twitter, Linkedin, Copy, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/types"

interface BlogPostLayoutProps {
  post: BlogPost
}

export default function BlogPostLayout({ post }: BlogPostLayoutProps) {
  const [copied, setCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  if (!mounted) {
    return null
  }

  const shareUrl = window.location.href

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShare = (platform: "twitter" | "linkedin") => {
    const text = `Check out this article: ${post.title}`
    const url = encodeURIComponent(shareUrl)

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    }

    window.open(shareUrls[platform], "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="fixed top-0 left-0 w-full h-1 bg-[#ff4b36] z-50" style={{ width: `${scrollProgress}%` }} />
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-[#ff4b36] mb-6">
                <Link href="/blog" className="flex items-center gap-2 hover:text-[#ff3621]">
                  <ChevronLeft className="h-4 w-4" />
                  Blog
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="text-white font-medium">{post.author.name}</div>
                  <div className="text-muted-foreground text-sm">{post.author.role}</div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,240px] gap-12">
              {/* Main Content */}
              <article>
                <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />

                {/* Share Section */}
                <div className="mt-12 pt-6 border-t border-muted">
                  <h3 className="text-white font-semibold mb-4">Share this article</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("twitter")}
                      className="hover:text-[#ff4b36] hover:border-[#ff4b36]"
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleShare("linkedin")}
                      className="hover:text-[#ff4b36] hover:border-[#ff4b36]"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleCopyLink}
                      className="hover:text-[#ff4b36] hover:border-[#ff4b36]"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    {copied && <span className="text-sm text-muted-foreground ml-2">Link copied!</span>}
                  </div>
                </div>
              </article>

              {/* Table of Contents Sidebar */}
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <h3 className="text-white font-semibold mb-4">On this page</h3>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block text-muted-foreground hover:text-white transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

