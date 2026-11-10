import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import JsonLd from "@/components/JsonLd";
import { notFound } from "next/navigation";
import { getPostsForProduct, getProductById, getProducts, getWhatsAppOrderLink } from "@/lib/data";
import FaqList from "@/components/FaqList";
import { STORE_LINKS } from "@/lib/site";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/seo";
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
    title: product.seoTitle ?? `${product.name} from Sri Lanka`,
    description:
      product.metaDescription ??
      `${product.description} Buy ${product.name} from Leora Naturale. Product of Sri Lanka. Order on WhatsApp.`,
    keywords: [
      product.name,
      product.nameSinhala,
      "Leora Naturale",
      "Sri Lanka",
      product.scientificName,
      product.category,
    ].filter(Boolean) as string[],
    alternates: { canonical: `/products/${product.id}/` },
    openGraph: {
      title: `${product.name} | Leora Naturale`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const related = getProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);
  const reads = getPostsForProduct(product.id);

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/" },
          { name: product.name, path: `/products/${product.id}/` },
        ])}
      />
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
            {product.scientificName && (
              <p className={styles.latin}>
                <em>{product.scientificName}</em>
              </p>
            )}
            {product.variants ? (
              <ul className={styles.variants}>
                {product.variants.map((v) => (
                  <li key={v.label}>
                    <span className={styles.weight}>{v.label}</span>
                    <span className={styles.price}>{v.price}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.weight}>{product.weight}</p>
              </>
            )}
            <p className={styles.description}>{product.longDescription}</p>

            <div className={styles.benefits}>
              <h3>Key Benefits</h3>
              <ul>
                {product.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className={styles.orderRow}>
              <a
                href={getWhatsAppOrderLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Order via WhatsApp
              </a>
              {STORE_LINKS.map((store) => (
                <a
                  key={store.href}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  {store.label}
                </a>
              ))}
            </div>
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

      {product.faqs && <FaqList faqs={product.faqs} />}

      {reads.length > 0 && (
        <section className={`section ${styles.reads}`}>
          <div className="container">
            <span className="section-label">Read More</span>
            <ul className={styles.readList}>
              {reads.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}/`}>{post.title} →</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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