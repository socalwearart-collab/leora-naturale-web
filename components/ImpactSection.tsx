import Link from "next/link";
import SiteImage from "./SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./ImpactSection.module.css";

export default function ImpactSection() {
  return (
    <section className={`section ${styles.section}`} id="impact">
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className="section-label">Our Impact</span>
          <h2 className="section-title">
            Supporting Sri Lankan <em>Communities</em>
          </h2>
          <p>
            Leora Naturale not only brings premium quality natural food products to our
            customers — we also work closely with small-scale farmers and local suppliers
            across Sri Lanka.
          </p>
          <p>
            When you purchase Leora Naturale products, you invest in the economic development
            of rural communities and support sustainable, chemical-free agriculture that
            honors our island&apos;s natural bounty.
          </p>
          <Link href="/about" className="btn btn-primary">
            Learn More
          </Link>
        </div>
        <div className={styles.imageWrap}>
          <SiteImage
            src={IMAGES.impact}
            alt="Sri Lankan rural community and agriculture"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}