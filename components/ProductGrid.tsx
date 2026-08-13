import Link from "next/link";
import { Product } from "@/lib/data";
import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

type Props = {
  products: Product[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
};

export default function ProductGrid({
  products,
  title = "Popular Products",
  subtitle,
  showViewAll = true,
}: Props) {
  return (
    <section className={`section ${styles.section}`} id="products">
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-label">Product Range</span>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
          {showViewAll && (
            <Link href="/products" className="btn btn-outline">
              View All
            </Link>
          )}
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}