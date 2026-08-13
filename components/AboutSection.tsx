import Link from "next/link";
import SiteImage from "./SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={`section ${styles.section}`} id="explore">
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <SiteImage
            src={IMAGES.about}
            alt="Fresh produce at a local market"
            className={styles.image}
          />
          <div className={styles.accent} />
        </div>

        <div className={styles.content}>
          <span className="section-label">Welcome to</span>
          <h2 className="section-title">
            Leora Naturale <em>International</em>
          </h2>
          <p>
            Leora Naturale brings the bounty of all-natural vegetables, fruits, and herbs
            from Sri Lanka — the exotic island in the Indian Ocean. We offer a variety of
            preservative-free, all-natural, ready-to-enjoy food range ideal for the health
            conscious consumer who appreciates food in its purest form.
          </p>
          <p>
            We believe that premium nutrition should be accessible to everyone. Combining
            artisanal expertise with modern low-temperature dehydration techniques, we deliver
            value-added snacks that are as vibrant as they are nutritious.
          </p>
          <Link href="/about" className="btn btn-primary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}