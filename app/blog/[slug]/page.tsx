import { withBase } from '@/lib/paths'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShareButtons from '@/components/ShareButtons'
import JsonLd from '@/components/JsonLd'
import { getPostBySlug, getAllPosts, getRelatedPosts, slugifyHeading, toIsoDate } from '@/lib/blog'
import { pageMeta, SITE_URL } from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: 'Article Not Found', robots: { index: false, follow: true } }
  }

  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogTitle: post.title,
    image: { url: post.image, alt: post.title, width: 1200, height: 800 },
    type: 'article',
    publishedTime: toIsoDate(post.date),
    authors: [post.author.name],
  })
}

export default async function SinglePostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, 3)
  const sections = post.content.sections.map((section) => ({ ...section, id: slugifyHeading(section.heading) }))

  const articleLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: [post.image],
        datePublished: toIsoDate(post.date),
        dateModified: toIsoDate(post.date),
        author: { '@type': 'Person', name: post.author.name, jobTitle: post.author.role },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        articleSection: post.category,
        inLanguage: 'en-NG',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={articleLd} />
      <Header />
      <main id="top" className="art-page">
        <div className="art-hero">
        {/* Title */}
        <header className="art-head wrap">
          <a href={withBase('/blog')} className="art-back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
            All articles
          </a>
          <h1 className="art-title">{post.title}</h1>
        </header>

        {/* Meta row: date & read time | category | share */}
        <div className="art-meta wrap">
          <div className="art-meta-author">
            <img src={post.author.avatar} alt="" width={40} height={40} />
            <div>
              <strong>{post.author.name}</strong>
              <span className="art-meta-date">Product Expert at FUNDiT</span>
            </div>
          </div>
          <ShareButtons title={post.title} path={`/blog/${post.slug}`} />
        </div>

        </div>

        {/* Full-width cover */}
        <figure className="art-cover">
          <img src={post.image} alt={post.title} width={1200} height={800} fetchPriority="high" decoding="async" />
        </figure>

        {/* Contents + article */}
        <div className="art-body wrap">
          {sections.length > 0 && (
            <nav className="art-toc" aria-label="In this story">
              <span className="art-toc-label">In this story</span>
              <ol>
                {sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
                ))}
              </ol>
            </nav>
          )}

          <article className="art-prose">
            <p className="art-intro">{post.content.intro}</p>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="art-section">
                <h2>{section.heading}</h2>
                {section.body.map((para, pIdx) => (
                  <p key={pIdx} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
                {section.quote && <blockquote>&ldquo;{section.quote}&rdquo;</blockquote>}
                {section.callout && (
                  <aside className="art-callout">
                    <strong>{section.callout.title}</strong>
                    <p>{section.callout.text}</p>
                  </aside>
                )}
              </section>
            ))}

            {post.content.takeaways && post.content.takeaways.length > 0 && (
              <aside className="art-takeaways">
                <h3>Key takeaways</h3>
                <ul>
                  {post.content.takeaways.map((item, tIdx) => <li key={tIdx}>{item}</li>)}
                </ul>
              </aside>
            )}

            <div className="art-author">
              <img src={post.author.avatar} alt="" width={48} height={48} loading="lazy" decoding="async" />
              <div>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
            </div>
          </article>
        </div>

        {/* More stories */}
        {relatedPosts.length > 0 && (
          <section className="art-more">
            <div className="wrap">
              <div className="art-more-head">
                <h2>More stories</h2>
                <a href={withBase('/blog')}>View all articles &rarr;</a>
              </div>
              <div className="blog-grid" style={{ marginBottom: 0 }}>
                {relatedPosts.map((rPost) => (
                  <a key={rPost.slug} href={withBase(`/blog/${rPost.slug}`)} className="blog-card">
                    <div className="blog-card-img-wrap">
                      <img src={rPost.image} alt={rPost.title} className="blog-card-img" width={600} height={400} loading="lazy" decoding="async" />
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-info">
                        <span>{rPost.category}</span>
                      </div>
                      <h3 className="blog-card-title">{rPost.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
