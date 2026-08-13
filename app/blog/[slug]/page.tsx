import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import JsonLd from "@/components/JsonLd";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts, formatDate } from "@/lib/data";
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

  const paragraphs = post.content.split("\n\n");

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
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}