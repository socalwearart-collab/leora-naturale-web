import { STORE_LINKS } from "@/lib/site";
import styles from "./StoreBar.module.css";

type Props = { variant?: "top" | "bottom" };

export default function StoreBar({ variant = "top" }: Props) {
  return (
    <section className={`${styles.bar} ${styles[variant]}`} aria-label="Order from our stores">
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>Order from our stores</p>
        <div className={styles.links}>
          {STORE_LINKS.map((store) => (
            <a
              key={store.href}
              href={store.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {store.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
