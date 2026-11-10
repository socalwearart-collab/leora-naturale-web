import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import styles from "./FaqList.module.css";

export type Faq = { question: string; answer: string };

/** Question-and-answer list plus FAQPage structured data (answer-first, for search and AI answers). */
export default function FaqList({ faqs, title = "Common Questions" }: { faqs: Faq[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <section className={`section ${styles.section}`}>
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <details key={f.question} className={styles.item} open={i === 0}>
              <summary className={styles.question}>
                {f.question}
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>{f.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
