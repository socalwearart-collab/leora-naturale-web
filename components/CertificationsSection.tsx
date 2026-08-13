import styles from "./CertificationsSection.module.css";

const certifications = [
  { name: "100% Natural", description: "No artificial preservatives, colors, or additives" },
  { name: "Chemical-Free", description: "Zero chemical processing in our dehydration" },
  { name: "Vegetarian", description: "All products free from animal-derived components" },
  { name: "Locally Sourced", description: "Ingredients from trusted Sri Lankan suppliers" },
];

export default function CertificationsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Standards & Certifications</span>
          <h2 className="section-title">Our Quality <em>Promise</em></h2>
        </div>
        <div className={styles.grid}>
          {certifications.map((cert) => (
            <div key={cert.name} className={styles.card}>
              <div className={styles.icon}>✦</div>
              <h3>{cert.name}</h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}