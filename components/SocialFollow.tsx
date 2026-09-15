import { SOCIAL_LINKS, getWhatsAppOrderHref } from "@/lib/site";
import styles from "./SocialFollow.module.css";

export default function SocialFollow() {
  return (
    <section className={styles.section} aria-label="Social media">
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>Social</p>
        <h2 className={styles.title}>
          Follow <em>Leora Naturale</em>
        </h2>
        <p className={styles.lead}>
          Product updates, new packs, and order news go out on Facebook. WhatsApp is for orders.
        </p>
        <div className={styles.links}>
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebook}
            >
              {social.label}
            </a>
          ))}
          <a
            href={getWhatsAppOrderHref()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
