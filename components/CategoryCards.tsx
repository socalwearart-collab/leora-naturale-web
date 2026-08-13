import Link from "next/link";
import SiteImage from "./SiteImage";
import { getCategories } from "@/lib/data";
import { IMAGES } from "@/lib/images";
import styles from "./CategoryCards.module.css";

export default function CategoryCards() {
  const categories = getCategories().map((title) => ({
    title,
    image: IMAGES.categories[title as keyof typeof IMAGES.categories] ?? IMAGES.logo,
    href: "/products",
  }));

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Browse by Category</span>
          <h2 className="section-title">
            Explore Our <em>Wellness Collection</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href} className={styles.card}>
              <SiteImage src={cat.image} alt={cat.title} fill />
              <div className={styles.overlay}>
                <h3>{cat.title}</h3>
                <span>Browse the full range →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}