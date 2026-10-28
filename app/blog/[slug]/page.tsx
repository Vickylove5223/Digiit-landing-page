import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog'

interface PageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: 'Article Not Found — Digiit' }
  }

  return {
    title: `${post.title} — Digiit Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.title }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  }
}

export default function SinglePostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, 2)

  return (
    <>
      <Header />
      <main id="top" className="blog-page-main">
        {/* Post Header */}
        <section className="post-header">
          <div className="wrap">
            <div className="post-header-inner">
              <div className="post-header-top">
                <a href="/blog" className="post-back-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                  Back to Insights
                </a>
              </div>

              <h1 className="post-title">{post.title}</h1>
              <p className="post-lead">{post.excerpt}</p>

              {/* Author & Share Bar */}
              <div className="post-author-bar">
                <div className="post-author-info">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="post-author-img"
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1rem', color: '#ffffff' }}>
                      {post.author.name}
                    </strong>
                    <span style={{ fontSize: '0.8125rem', color: 'rgba(255, 255, 255, 0.72)' }}>
                      {post.author.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Post Cover Visual */}
              <div className="post-cover-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="post-cover-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Post Article Body & Sticky Sidebar */}
        <div className="post-layout">
          {/* Main Article Content */}
          <article className="post-article">
            <p className="post-intro-text">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, idx) => (
              <div key={idx} style={{ marginTop: '2rem' }}>
                <h2>{section.heading}</h2>

                {section.body.map((para, pIdx) => (
                  <p key={pIdx} dangerouslySetInnerHTML={{ __html: para }} />
                ))}

                {section.quote && (
                  <blockquote>
                    &ldquo;{section.quote}&rdquo;
                  </blockquote>
                )}

                {section.callout && (
                  <div className="legal-callout">
                    <div className="legal-callout-title">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                      </svg>
                      {section.callout.title}
                    </div>
                    <p>{section.callout.text}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Key Takeaways Card */}
            {post.content.takeaways && post.content.takeaways.length > 0 && (
              <div className="post-takeaways-card">
                <h3>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Key Takeaways
                </h3>
                <ul className="post-takeaways-list">
                  {post.content.takeaways.map((item, tIdx) => (
                    <li key={tIdx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="post-related-section">
            <div className="wrap">
              <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span className="label">Recommended Reading</span>
                  <h2 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', color: 'var(--ink)' }}>
                    Related Articles
                  </h2>
                </div>
                <a href="/blog" className="btn btn-ghost" style={{ fontSize: '0.9rem', padding: '0.65rem 1.3rem' }}>
                  View all articles &rarr;
                </a>
              </div>

              <div className="blog-grid" style={{ marginBottom: 0 }}>
                {relatedPosts.map((rPost) => (
                  <a key={rPost.slug} href={`/blog/${rPost.slug}`} className="blog-card">
                    <div className="blog-card-img-wrap">
                      <img
                        src={rPost.image}
                        alt={rPost.title}
                        className="blog-card-img"
                      />
                    </div>
                    <div className="blog-card-body">
                      <h3 className="blog-card-title">{rPost.title}</h3>
                      <p className="blog-card-excerpt">{rPost.excerpt}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
