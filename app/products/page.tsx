import ProductFilter from "@/components/ProductFilter";
import FAQSection from "@/components/FAQSection";
import { getProducts } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Products | Leora Naturale",
  description: "Browse our full range of dehydrated snacks, herbal teas, and wellness powders.",
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