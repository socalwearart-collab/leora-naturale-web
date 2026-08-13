"use client";

import { useState } from "react";
import { getFaqs } from "@/lib/data";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const faqs = getFaqs();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">
            Common <em>Questions</em>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div key={faq.question} className={styles.item}>
              <button
                type="button"
                className={styles.question}
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
