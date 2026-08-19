import { STORE_LINKS } from "@/lib/site";
import styles from "./StoreBar.module.css";

type Props = { variant?: "top" | "bottom" };

export default function StoreBar({ variant = "top" }: Props) {
  return (
    <section className={`${styles.section} ${styles[variant]}`} aria-label="Order from our stores">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Buy online</p>
        <h2 className={styles.title}>
          Order Leora Naturale from <em>our stores</em>
        </h2>
        <p className={styles.lead}>
          Same packs, same prices. Shop on Serendib Market or Daraz — or order on WhatsApp.
        </p>
        <div className={styles.cards}>
          {STORE_LINKS.map((store) => (
            <a
              key={store.href}
              href={store.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <span className={styles.cardLabel}>Shop on</span>
              <span className={styles.cardName}>{store.label}</span>
              <span className={styles.cardCta}>Open store →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
