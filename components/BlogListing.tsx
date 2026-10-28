'use client'
import { useState } from 'react'
import { BLOG_POSTS } from '@/lib/blog'

const CATEGORIES = ['All', 'Financial Wellness', 'HR & Retention', 'Fintech & Security', 'Guides'] as const

export default function BlogListing() {
  const [selectedCat, setSelectedCat] = useState<string>('All')

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]

  const filteredPosts = selectedCat === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCat)

  const gridPosts = selectedCat === 'All'
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts

  return (
    <>

      {/* Featured Post Card (Only shown when 'All' is selected) */}
      {selectedCat === 'All' && featuredPost && (
        <a href={`/blog/${featuredPost.slug}`} className="blog-featured-card">
          <div className="blog-featured-img-wrap">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="blog-featured-img"
            />
          </div>
          <div className="blog-featured-body">
            <div className="blog-card-meta">
              <span className="blog-read-time">{featuredPost.readTime}</span>
              <span className="blog-read-time">&middot; {featuredPost.date}</span>
            </div>
            <h2 className="blog-featured-title">{featuredPost.title}</h2>
            <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
          </div>
        </a>
      )}

      {/* Grid of Articles */}
      <div className="blog-grid">
        {gridPosts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card-img-wrap">
              <img
                src={post.image}
                alt={post.title}
                className="blog-card-img"
              />
            </div>
            <div className="blog-card-body">
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
