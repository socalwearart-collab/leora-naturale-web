"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";

const faqs = [
  {
    question: "How long do dehydrated snacks last?",
    answer: "Our products are carefully packaged to preserve freshness. When stored in a cool, dry place away from direct sunlight, they typically maintain their peak quality for up to 12 months.",
  },
  {
    question: "Are these snacks suitable for vegetarians?",
    answer: "Absolutely. We source our ingredients from ethical suppliers and ensure that all our value-added products are free from animal-derived components.",
  },
  {
    question: "Can I rehydrate these snacks?",
    answer: "Yes, many of our dehydrated snacks are designed to be rehydrated. Simply add a small amount of water to the package and let them sit for 45-60 minutes before beginning preparation.",
  },
  {
    question: "What is the nutritional profile of your snacks?",
    answer: "We focus on high nutrient density and low processing. Each snack is rich in vitamins, minerals, and antioxidants while being naturally low in sugar and sodium.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Common <em>Questions</em></h2>
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