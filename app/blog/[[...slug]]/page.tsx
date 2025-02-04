import { blogs } from '@/content/blogs'
import { notFound } from 'next/navigation'
import React from 'react'

export async function generateStaticParams() {

  return blogs.map((blog) => ({
    slug: [blog.slug],
  }))
}

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  if (slug !== undefined) {
    const blog = blogs.find(x => x.slug === slug[0])

    if (!blog) {
      notFound()
    }

    return (
      <div>
        <h1>Blog {slug === undefined ? "und" : slug}</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Blog {"und"}</h1>
    </div>
  )
}

export default Blog