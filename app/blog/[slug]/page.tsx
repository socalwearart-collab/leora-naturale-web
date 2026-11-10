import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import JsonLd from "@/components/JsonLd";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts, getProductById, formatDate, Product } from "@/lib/data";
import RichText from "@/components/RichText";
import FaqList from "@/components/FaqList";
import ProductCard from "@/components/ProductCard";
import { ORGANIZATION_ID, breadcrumbJsonLd } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";
import styles from "./page.module.css";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = (post.products ?? []).map(getProductById).filter((p): p is Product => Boolean(p));

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: absoluteUrl(post.image),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`),
    ...(post.keyword ? { keywords: post.keyword } : {}),
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: post.title, path: `/blog/${post.slug}/` },
        ])}
      />
      <section className={styles.hero}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>
        </div>
      </section>

      <article className={`section ${styles.article}`}>
        <div className="container">
          <header className={styles.header}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <h1>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </header>

          <div className={styles.imageWrap}>
            <SiteImage
              src={post.image}
              alt={post.title}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.content}>
            <RichText text={post.content} />
          </div>
        </div>
      </article>
      {post.faqs && <FaqList faqs={post.faqs} title="Frequently Asked Questions" />}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">
              Try It <em>Yourself</em>
            </h2>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}