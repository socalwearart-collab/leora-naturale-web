import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import JsonLd from "@/components/JsonLd";
import { IMAGES } from "@/lib/images";
import { breadcrumbJsonLd } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Leora Naturale",
  description:
    "Leora Naturale is a Sri Lankan brand that preserves fruit, traditional vegetables, and herbs with low-temperature dehydration. No chemical preservatives, no added sugar, product of Sri Lanka.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1 className="section-title">
            About <em>Leora Naturale</em>
          </h1>
          <p className="section-subtitle">
            Leora Naturale preserves Sri Lankan harvests so families can snack and cook
            without artificial colours, flavours, or preservatives.
          </p>
        </div>
      </section>

      <section className={`section ${styles.content}`}>
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className="section-title">
              Who <em>Leora Naturale</em> is
            </h2>
            <p>
              Leora Naturale is a food brand based in Sri Lanka, making dehydrated food and
              herbal products for kitchens at home and abroad.
            </p>
            <p>
              The company uses low-temperature dehydration: water is removed slowly so
              vitamins, colour, and flavour stay in the fruit or vegetable. No chemical
              preservative is added. Shelf life depends on the product, usually 6 months to 1 year when
              sealed in a cool, dry cupboard.
            </p>
            <p>
              The range is Kiri Kos (dehydrated mature jackfruit), Heen Bovitiya
              (<em>Osbeckia octandra</em>) as tea bags and leaf powder, Butterfly Pea Flower
              (<em>Clitoria ternatea</em>), and Chai Masala, a blend of seven Sri Lankan spices.
            </p>
            <p>
              Orders are taken on WhatsApp and email. There is no automated checkout. A
              person confirms pack size, price in Sri Lankan rupees, and delivery.
            </p>
            <Link href="/products" className="btn btn-primary" style={{ marginTop: "1.5rem" }}>
              Explore Products
            </Link>
          </div>
          <div className={styles.imageWrap}>
            <SiteImage
              src={IMAGES.aboutPage}
              alt="Natural ingredients used by Leora Naturale in Sri Lanka"
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
              <p>No artificial preservatives, colours, or additives. The ingredient on the pack is the food inside it.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Low-temperature craft</h3>
              <p>Gentle dehydration instead of frying or high heat, so nutrients and island flavour survive.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sri Lankan harvests</h3>
              <p>Fruit, vegetables, and herbs grown and packed in Sri Lanka, labelled in English, Sinhala, and Tamil.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Kitchen and snack</h3>
              <p>Eat fruit packs as they are. Rehydrate vegetable packs for curry, mallum, and tempering.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
