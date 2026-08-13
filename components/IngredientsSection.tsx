import SiteImage from "./SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./IngredientsSection.module.css";

const ingredients = [
  {
    name: "Jackfruit",
    latin: "Artocarpus heterophyllus",
    description:
      "Kos, polos, and waraka are three kitchen stages of the same Sri Lankan tree. Fibre-rich, naturally sweet when ripe, and savoury when young.",
    image: IMAGES.ingredients.Jackfruit,
  },
  {
    name: "Bitter Gourd",
    latin: "Momordica charantia",
    description:
      "Karavila, used across Sri Lankan homes for its earthy bitterness. Dehydrated into light chips or rehydrated for curry.",
    image: IMAGES.ingredients["Bitter Gourd"],
  },
  {
    name: "Heen Bovitiya",
    latin: "Osbeckia octandra",
    description:
      "A native shrub used in Sri Lankan herbal drinks. Offered as a caffeine-free tea and as a fine leaf powder.",
    image: IMAGES.ingredients["Heen Bovitiya"],
  },
  {
    name: "Banana & Sesame",
    latin: "Musa spp. · Sesamum indicum",
    description:
      "Ripe kesel dried without frying or added sugar, optionally finished with toasted sesame for crunch and protein.",
    image: IMAGES.ingredients["Banana & Sesame"],
  },
];

export default function IngredientsSection() {
  return (
    <section className={`section ${styles.section}`} id="ingredients">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Super Healthy Ingredients</span>
          <h2 className="section-title">
            Nature&apos;s Finest, <em>Preserved</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {ingredients.map((item) => (
            <div key={item.name} className={styles.card}>
              <div className={styles.imageWrap}>
                <SiteImage src={item.image} alt={`${item.name} (${item.latin})`} fill />
              </div>
              <h3>{item.name}</h3>
              <p className={styles.latin}>
                <em>{item.latin}</em>
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
