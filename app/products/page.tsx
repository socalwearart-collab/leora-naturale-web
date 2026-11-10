import ProductFilter from "@/components/ProductFilter";
import FAQSection from "@/components/FAQSection";
import { getProducts } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Kiri Kos, Heen Bovitiya Tea, Butterfly Pea & Chai Masala",
  description:
    "Shop Leora Naturale Kiri Kos dehydrated jackfruit, Heen Bovitiya tea and powder, Butterfly Pea Flower and Chai Masala. Preservative-free, from Sri Lanka. Order on WhatsApp.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Our Collection</span>
          <h1 className="section-title">Dehydrated Snacks and <em>Herbal Tea</em> from Sri Lanka</h1>
          <p className="section-subtitle">
            Kiri Kos, Heen Bovitiya tea and powder, Butterfly Pea Flower and Chai Masala
            — packed in Sri Lanka and ordered on WhatsApp.
          </p>
        </div>
      </section>
      <section className={`section ${styles.products}`}>
        <div className="container">
          <ProductFilter products={products} />
        </div>
      </section>
      <FAQSection />
    </>
  );
}