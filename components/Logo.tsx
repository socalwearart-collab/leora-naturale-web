import { LOGO_SRC } from "@/lib/data";
import SiteImage from "./SiteImage";
import styles from "./Logo.module.css";

type Props = {
  variant?: "header" | "footer" | "hero" | "section";
};

export default function Logo({ variant = "header" }: Props) {
  return (
    <SiteImage
      src={LOGO_SRC}
      alt="Leora Naturale"
      className={`${styles.logo} ${styles[variant]}`}
      priority={variant === "header" || variant === "hero"}
    />
  );
}