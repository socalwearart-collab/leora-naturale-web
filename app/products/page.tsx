import ProductFilter from "@/components/ProductFilter";
import FAQSection from "@/components/FAQSection";
import { getProducts } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Dehydrated Snacks and Herbal Products",
  description:
    "Shop Leora Naturale dehydrated pineapple, waraka, kos, polos, banana, karavila, kohila, and Heen Bovitiya. Preservative-free food from Sri Lanka. Order on WhatsApp.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-label">Our Collection</span>
          <h1 className="section-title">Our Packed <em>Selection</em></h1>
          <p className="section-subtitle">
            Discover our chemical-free range of dehydrated snacks, packed with nutrients
            and crafted for your modern lifestyle.
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