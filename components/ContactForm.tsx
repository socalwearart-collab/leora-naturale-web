"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL, getWhatsAppOrderLink } from "@/lib/data";
import { getWhatsAppLink } from "@/lib/site";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      `Hello Leora Naturale, I would like to get in touch.`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(getWhatsAppLink(text), "_blank", "noopener,noreferrer");
    setStatus("success");
    form.reset();
  }

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">
            We&apos;d Love to <em>Hear From You</em>
          </h2>
          <p className="section-subtitle">
            Orders, wholesale, and product questions go through WhatsApp or email.
            A person at Leora Naturale replies with pack sizes, price, and delivery.
          </p>

          <div className={styles.details}>
            <div>
              <h4>Email Us</h4>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div>
              <h4>Order on WhatsApp</h4>
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Phone (optional)</label>
            <input id="phone" name="phone" type="tel" placeholder="+94 71 123 4567" />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="How can we help you?"
            />
          </div>

          {status === "success" && (
            <p className={styles.success}>WhatsApp is opening with your message.</p>
          )}

          <button type="submit" className="btn btn-primary">
            Send on WhatsApp
          </button>
          <a className={styles.mailFallback} href={`mailto:${CONTACT_EMAIL}`}>
            or email {CONTACT_EMAIL}
          </a>
        </form>
      </div>
    </section>
  );
}
