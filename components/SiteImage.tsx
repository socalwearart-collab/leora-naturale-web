import { asset } from "@/lib/site";
import styles from "./SiteImage.module.css";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  width?: number;
  height?: number;
};

export default function SiteImage({
  src,
  alt,
  className = "",
  fill = false,
  priority = false,
  width,
  height,
}: Props) {
  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset(src)}
        alt={alt}
        className={`${styles.fill} ${className}`}
        width={width ?? 1200}
        height={height ?? 900}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        decoding="async"
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(src)}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
    />
  );
}