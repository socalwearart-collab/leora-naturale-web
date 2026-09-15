import { ORDER_CHANNELS } from "@/lib/site";
import styles from "./StoreBar.module.css";

type Props = { variant?: "top" | "bottom" };

export default function StoreBar({ variant = "top" }: Props) {
  return (
    <section className={`${styles.section} ${styles[variant]}`} id="order" aria-label="How to order">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Orders</p>
        <h2 className={styles.title}>
          Three ways to <em>order</em>
        </h2>
        <p className={styles.lead}>
          WhatsApp is the fastest. Serendib Market and Daraz are ready if you prefer to pay online.
        </p>
        <div className={styles.cards}>
          {ORDER_CHANNELS.map((channel) => (
            <a
              key={channel.href}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <span className={styles.cardLabel}>Order on</span>
              <span className={styles.cardName}>{channel.label}</span>
              <span className={styles.cardNote}>{channel.note}</span>
              <span className={styles.cardCta}>Open →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
