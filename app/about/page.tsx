import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./page.module.css";

export const metadata = {
  title: "About Us | Leora Naturale",
  description: "Learn about Leora Naturale's mission to deliver premium dehydrated natural food from Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1 className="section-title">
            Unveiling Our <em>Natural Legacy</em>
          </h1>
          <p className="section-subtitle">
            Step into the world of Leora Naturale, where the essence of ancient Sri Lankan
            wellness traditions fuses with contemporary healthy living.
          </p>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className="section-title">Our Commitment to <em>Quality and Health</em></h2>
            <p>
              We believe that premium nutrition should be accessible to everyone. At Leora Naturale,
              we combine artisanal expertise with modern preservation techniques to deliver value-added
              snacks that are as vibrant as they are nutritious.
            </p>
            <p>
              We utilize advanced low-temperature dehydration technology to lock in nutrients while
              preserving the vibrant, natural flavors of our ingredients. Our process ensures that
              every value-added snack you enjoy is packed with artisanal quality and maximum health benefits.
            </p>
            <p>
              Our mission is to empower your daily wellness journey with products that honor the natural
              essence of every ingredient — chemical-free, preservative-free, and crafted with care.
            </p>
            <Link href="/products" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
              Explore Products
            </Link>
          </div>
          <div className={styles.imageWrap}>
            <SiteImage
              src={IMAGES.aboutPage}
              alt="Natural ingredients and wellness"
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={`section ${styles.values}`}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            What We <em>Stand For</em>
          </h2>
          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <h3>100% Natural</h3>
              <p>No artificial preservatives, colors, or additives. Just pure, honest ingredients.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Artisanal Craft</h3>
              <p>Traditional knowledge meets modern dehydration science for the best of both worlds.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sri Lankan Heritage</h3>
              <p>Rooted in the rich botanical traditions of our island home.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Wellness First</h3>
              <p>Every product is designed to support your health-conscious lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}