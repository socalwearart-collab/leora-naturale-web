import Link from "next/link";
import SiteImage from "./SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={`section ${styles.section}`} id="explore">
      <div className={`container ${styles.grid}`}>
        <div className={styles.imageCol}>
          <SiteImage
            src={IMAGES.about}
            alt="Sri Lankan produce selected for Leora Naturale dehydration"
            className={styles.image}
          />
          <div className={styles.accent} />
        </div>

        <div className={styles.content}>
          <span className="section-label">Welcome to</span>
          <h2 className="section-title">
            Leora Naturale <em>Sri Lanka</em>
          </h2>
          <p>
            Leora Naturale is a Sri Lankan brand of dehydrated fruit, traditional vegetables,
            and herbal wellness. We take island harvests — pineapple, jackfruit, banana,
            karavila, kohila, and Heen Bovitiya — and preserve them with low-temperature
            dehydration so kitchens can cook, and snackers can eat, without chemicals.
          </p>
          <p>
            The range is labelled in English, Sinhala, and Tamil. Fruit packs are eaten as
            they are. Vegetable packs rehydrate in under an hour for curry, mallum, and
            tempering. Orders go through WhatsApp, not a shopping cart.
          </p>
          <Link href="/about" className="btn btn-primary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
