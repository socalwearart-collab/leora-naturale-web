import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    quote: "The dehydrated jackfruit is absolutely delicious — naturally sweet with the perfect chewy-crisp texture. A guilt-free snack I keep reordering!",
    author: "Priya Fernando",
    location: "Colombo, Sri Lanka",
  },
  {
    quote: "As someone who values preservative-free food, Leora Naturale has become my go-to. The Heen Bovitiya tea is wonderfully soothing.",
    author: "Andrew Traveller",
    location: "New Zealand",
  },
  {
    quote: "The bitter gourd chips are crisp and authentic. It's wonderful to find traditional Sri Lankan flavors preserved so naturally.",
    author: "Hong Kong Customer",
    location: "Hong Kong",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Customer <em>Testimonials</em></h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <blockquote key={item.author} className={styles.card}>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <strong>{item.author}</strong>
                <span>{item.location}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}