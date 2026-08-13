"use client";

import { FormEvent, useState } from "react";
import styles from "./NewsletterSection.module.css";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div>
          <h2>Subscribe to our emails</h2>
          <p>Be the first to know about new collections and exclusive offers.</p>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-gold">
            Subscribe
          </button>
        </form>
        {submitted && <p className={styles.thanks}>Thank you for subscribing!</p>}
      </div>
    </section>
  );
}