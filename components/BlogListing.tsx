'use client'
import { useState } from 'react'
import { BLOG_POSTS } from '@/lib/blog'

const POSTS_PER_PAGE = 15

export default function BlogListing() {
  const [selectedCat, setSelectedCat] = useState<string>('All')
  const [visibleCount, setVisibleCount] = useState<number>(POSTS_PER_PAGE)

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]

  const filteredPosts = selectedCat === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCat)

  const gridPosts = selectedCat === 'All'
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + POSTS_PER_PAGE)
  }

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
        {gridPosts.slice(0, visibleCount).map((post) => (
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

      {/* Load More CTA (Appears when post count is above 15) */}
      {gridPosts.length > visibleCount && (
        <div className="blog-load-more-wrap">
          <button
            type="button"
            onClick={handleLoadMore}
            className="blog-load-more-btn"
          >
            <span>Load More Articles</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
