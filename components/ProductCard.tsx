import Link from "next/link";
import { Product, getWhatsAppOrderLink } from "@/lib/data";
import SiteImage from "./SiteImage";
import styles from "./ProductCard.module.css";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className={styles.card}>
      <Link href={`/products/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <SiteImage src={product.image} alt={product.name} fill />
          {!product.inStock && <span className={styles.badge}>Sold out</span>}
        </div>
      </Link>
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <Link href={`/products/${product.id}`}>
          <h3>{product.name}</h3>
          {product.nameSinhala && <p className={styles.sinhala}>{product.nameSinhala}</p>}
        </Link>
        <p>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price}</span>
          <div className={styles.actions}>
            <Link href={`/products/${product.id}`} className="btn btn-outline">
              View Details
            </Link>
            <a
              href={getWhatsAppOrderLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Order
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}