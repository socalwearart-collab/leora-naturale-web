import Link from "next/link";
import Logo from "./Logo";
import SiteImage from "./SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgImage}>
        <SiteImage src={IMAGES.hero} alt="Fresh natural ingredients" fill priority />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <Logo variant="hero" />
        <p className={styles.eyebrow}>Healthy &amp; Preservative Free</p>
        <h1 className={styles.title}>
          Leora <em>Naturale</em>
        </h1>
        <p className={styles.headline}>The Art of Natural Preservation</p>
        <p className={styles.subtitle}>
          Premium dehydrated snacks and herbal wellness products crafted in Sri Lanka.
          Artisanal quality, maximum nutrition, zero compromise.
        </p>
        <div className={styles.actions}>
          <Link href="/products" className="btn btn-primary">
            Shop Collection
          </Link>
          <Link href="/about" className="btn btn-outline" style={{ color: "#fff", borderColor: "#fff" }}>
            Our Story
          </Link>
        </div>
        <ul className={styles.trust}>
          <li>100% Natural</li>
          <li>No Preservatives</li>
          <li>Product of Sri Lanka</li>
        </ul>
        <a href="#product-range" className={styles.scrollHint}>
          Scroll to explore
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}