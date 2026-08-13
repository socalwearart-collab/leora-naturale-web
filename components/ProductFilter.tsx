"use client";

import { useState } from "react";
import { Product, getCategories } from "@/lib/data";
import ProductCard from "./ProductCard";
import styles from "./ProductFilter.module.css";

type Props = {
  products: Product[];
};

export default function ProductFilter({ products }: Props) {
  const categories = ["All", ...getCategories()];
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <div>
      <div className={styles.filters}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`${styles.filterBtn} ${active === category ? styles.active : ""}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className={styles.empty}>No products found in this category.</p>
      )}
    </div>
  );
}