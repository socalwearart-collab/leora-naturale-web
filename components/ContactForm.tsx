"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL, CONTACT_PHONE, getWhatsAppOrderLink } from "@/lib/data";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">We&apos;d Love to <em>Hear From You</em></h2>
          <p className="section-subtitle">
            Have questions about our products or want to place a bulk order?
            Reach out and we&apos;ll respond as soon as possible.
          </p>

          <div className={styles.details}>
            <div>
              <h4>Email Us</h4>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
            <div>
              <h4>Call Us</h4>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
            </div>
            <div>
              <h4>Order on WhatsApp</h4>
              <a href={getWhatsAppOrderLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
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
            <textarea id="message" name="message" required rows={5} placeholder="How can we help you?" />
          </div>

          {status === "success" && (
            <p className={styles.success}>Thank you! We&apos;ll get back to you shortly.</p>
          )}
          {status === "error" && (
            <p className={styles.error}>{errorMessage}</p>
          )}

          <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}