import Link from "next/link";
import Logo from "./Logo";
import SiteImage from "./SiteImage";
import { BRAND_TAGLINE_SINHALA } from "@/lib/data";
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
        <p className={styles.tagline}>{BRAND_TAGLINE_SINHALA}</p>
        <p className={styles.eyebrow}>Healthy &amp; Preservative Free</p>
        <h1 className={styles.title}>
          The Art of <em>Natural</em> Preservation
        </h1>
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
        <a href="#product-range" className={styles.scrollHint}>
          Scroll to explore
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}