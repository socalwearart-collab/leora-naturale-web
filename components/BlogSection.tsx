import Link from "next/link";
import SiteImage from "./SiteImage";
import { getBlogPosts, formatDate } from "@/lib/data";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <section className={`section ${styles.section}`} id="blog">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">News</span>
            <h2 className="section-title">News &amp; <em>Insights</em></h2>
          </div>
          <Link href="/blog" className="btn btn-outline">
            View All
          </Link>
        </div>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <SiteImage src={post.image} alt={post.title} fill />
              </div>
              <div className={styles.body}>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <span className={styles.readMore}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}