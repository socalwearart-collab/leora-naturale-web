import Link from "next/link";
import Logo from "./Logo";
import { CONTACT_EMAIL, BRAND_TAGLINE_SINHALA } from "@/lib/data";
import { ORDER_CHANNELS, SOCIAL_LINKS } from "@/lib/site";
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
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact &amp; social</h4>
          <ul>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.href}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Order</h4>
          <ul>
            {ORDER_CHANNELS.map((channel) => (
              <li key={channel.href}>
                <a href={channel.href} target="_blank" rel="noopener noreferrer">
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
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