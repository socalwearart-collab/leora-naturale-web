import ProductFilter from "@/components/ProductFilter";
import FAQSection from "@/components/FAQSection";
import { getProducts } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Dehydrated Jackfruit, Pineapple & Heen Bovitiya Tea",
  description:
    "Shop Leora Naturale dehydrated pineapple, waraka, kos, polos, banana, karavila, kohila, and Heen Bovitiya tea. Preservative-free food from Sri Lanka. Order on WhatsApp.",
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
            Preservative-free dehydrated jackfruit, pineapple, banana, kohila, and Heen Bovitiya
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