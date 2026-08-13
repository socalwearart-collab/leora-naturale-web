import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import { notFound } from "next/navigation";
import { getProductById, getProducts, getWhatsAppOrderLink } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";

type Props = { params: { id: string } };

export function generateStaticParams() {
  return getProducts().map((product) => ({ id: product.id }));
}

export function generateMetadata({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Leora Naturale`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Link href="/products" className={styles.backLink}>
            ← Back to Products
          </Link>
        </div>
      </section>

      <section className={`section ${styles.detail}`}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.imageCol}>
            <SiteImage
              src={product.image}
              alt={product.name}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.info}>
            <span className="section-label">{product.category}</span>
            <h1 className="section-title">{product.name}</h1>
            {product.nameSinhala && <p className={styles.sinhala}>{product.nameSinhala}</p>}
            <p className={styles.price}>{product.price}</p>
            <p className={styles.weight}>{product.weight}</p>
            <p className={styles.description}>{product.longDescription}</p>

            <div className={styles.benefits}>
              <h3>Key Benefits</h3>
              <ul>
                {product.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <a
              href={getWhatsAppOrderLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className={`section ${styles.meta}`}>
        <div className={`container ${styles.metaGrid}`}>
          <div className={styles.metaCard}>
            <h3>How to Use</h3>
            <p>{product.usage}</p>
          </div>
          <div className={styles.metaCard}>
            <h3>Storage</h3>
            <p>{product.storage}</p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={`section ${styles.related}`}>
          <div className="container">
            <h2 className="section-title">Related <em>Products</em></h2>
            <div className={styles.relatedGrid}>
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}