import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogPostLayout from "./BlogPostLayout"
import { getBlogPost, getAllBlogSlugs } from "@/lib/getBlogPost"

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs()
  return slugs
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostLayout post={post} />
}

