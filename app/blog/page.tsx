import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { getBlogPosts, formatDate } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog | Leora Naturale",
  description: "News, insights, and stories about natural dehydration and Sri Lankan wellness.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">News</span>
          <h1 className="section-title">News &amp; <em>Insights</em></h1>
          <p className="section-subtitle">
            Stories about natural food, dehydration science, and Sri Lankan wellness traditions.
          </p>
        </div>
      </section>

      <section className={`section ${styles.list}`}>
        <div className="container">
          <div className={styles.grid}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.imageWrap}>
                  <SiteImage src={post.image} alt={post.title} fill />
                </div>
                <div className={styles.body}>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className={styles.readMore}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}