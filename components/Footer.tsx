import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL, CONTACT_PHONE, BRAND_TAGLINE_SINHALA } from "@/lib/data";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <div className={styles.brand}>
            <Logo variant="footer" />
            <p className={styles.tagline}>{BRAND_TAGLINE_SINHALA}</p>
            <p>Premium dehydrated snacks &amp; herbal wellness from Sri Lanka.</p>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/products">Our Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#process">Our Process</Link></li>
            <li><Link href="/#impact">Our Impact</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Be the first to know about new collections and exclusive offers.</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Leora Naturale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}