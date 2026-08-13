import styles from "./ProcessSection.module.css";

const steps = [
  {
    number: "01",
    title: "Select Premium Ingredients",
    description: "We source the finest seasonal produce and herbs from trusted Sri Lankan suppliers.",
  },
  {
    number: "02",
    title: "Low-Temperature Dehydration",
    description: "Advanced dehydration technology locks in nutrients while preserving vibrant natural flavors.",
  },
  {
    number: "03",
    title: "Quality Packaging",
    description: "Carefully packaged to preserve freshness for up to 12 months in cool, dry storage.",
  },
  {
    number: "04",
    title: "Delivered to Your Doorstep",
    description: "Order via WhatsApp and get premium natural snacks delivered directly to you.",
  },
];

export default function ProcessSection() {
  return (
    <section className={`section ${styles.section}`} id="process">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Our Process</span>
          <h2 className="section-title">
            Precision <em>Dehydration</em> Excellence
          </h2>
          <p className="section-subtitle">
            Our mission is to empower your daily wellness journey with products that honor
            the natural essence of every ingredient.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}