import SiteImage from "./SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./IngredientsSection.module.css";

const ingredients = [
  {
    name: "Jackfruit",
    description: "A tropical superfruit rich in fiber, vitamins, and natural sweetness — perfect for guilt-free snacking.",
    image: IMAGES.ingredients.Jackfruit,
  },
  {
    name: "Bitter Gourd",
    description: "Known for its holistic health properties, preserving authentic earthy bitterness through gentle dehydration.",
    image: IMAGES.ingredients["Bitter Gourd"],
  },
  {
    name: "Heen Bovitiya",
    description: "A treasured Sri Lankan herb used in traditional wellness, offering floral notes and healing heritage.",
    image: IMAGES.ingredients["Heen Bovitiya"],
  },
  {
    name: "Banana & Sesame",
    description: "A delightful fusion of naturally sweet banana and nutrient-rich sesame seeds for a perfect crunch.",
    image: IMAGES.ingredients["Banana & Sesame"],
  },
];

export default function IngredientsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Super Healthy Ingredients</span>
          <h2 className="section-title">Nature&apos;s Finest, <em>Preserved</em></h2>
        </div>

        <div className={styles.grid}>
          {ingredients.map((item) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.imageWrap}>
                <SiteImage src={item.image} alt={item.name} fill />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}