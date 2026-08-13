import Link from "next/link";
import Logo from "./Logo";
import { BRAND_TAGLINE_SINHALA } from "@/lib/data";
import styles from "./BrandBanner.module.css";

export default function BrandBanner() {
  return (
    <section className={styles.section} id="product-range">
      <div className={`container ${styles.inner}`}>
        <Logo variant="section" />
        <p className={styles.tagline}>{BRAND_TAGLINE_SINHALA}</p>
        <p className={styles.description}>
          Our full range of preservative-free dehydrated snacks, herbal teas, and
          wellness powders — crafted in Sri Lanka with artisanal care.
        </p>
        <Link href="/products" className="btn btn-primary">
          Explore Product Range
        </Link>
      </div>
    </section>
  );
}