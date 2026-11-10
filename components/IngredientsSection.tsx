import SiteImage from "./SiteImage";
import { IMAGES } from "@/lib/images";
import styles from "./IngredientsSection.module.css";

const ingredients = [
  {
    name: "Jackfruit",
    latin: "Artocarpus heterophyllus",
    description:
      "Mature kos from Sri Lankan trees, dehydrated as Kiri Kos. Soak it and cook a proper kos curry anywhere in the world.",
    image: IMAGES.ingredients.Jackfruit,
  },
  {
    name: "Heen Bovitiya",
    latin: "Osbeckia octandra",
    description:
      "A native shrub used in Sri Lankan herbal drinks. Offered as a caffeine-free tea and as a fine leaf powder.",
    image: IMAGES.ingredients["Heen Bovitiya"],
  },
  {
    name: "Butterfly Pea",
    latin: "Clitoria ternatea",
    description:
      "Nil katarolu flowers that brew a vivid blue, caffeine-free drink and colour string hoppers, rice and desserts naturally.",
    image: IMAGES.ingredients["Butterfly Pea"],
  },
  {
    name: "Chai Spices",
    latin: "Cinnamomum verum · Elettaria cardamomum",
    description:
      "Sri Lankan cinnamon, cardamom, cloves, ginger, nutmeg, fennel and pepper, ground together for masala tea.",
    image: IMAGES.ingredients["Chai Spices"],
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
