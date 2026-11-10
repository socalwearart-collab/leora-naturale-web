import styles from "./RichText.module.css";

/**
 * Renders plain-text post content. Blocks are separated by a blank line.
 * "## " starts a heading; a block whose lines all start "- " or "1. " is a list.
 */
export default function RichText({ text }: { text: string }) {
  return (
    <div className={styles.rich}>
      {text.split("\n\n").map((block, i) => {
        const lines = block.split("\n");
        if (block.startsWith("## ")) return <h2 key={i}>{block.slice(3)}</h2>;
        if (lines.every((l) => /^\d+\.\s/.test(l)))
          return (
            <ol key={i}>
              {lines.map((l) => (
                <li key={l}>{l.replace(/^\d+\.\s/, "")}</li>
              ))}
            </ol>
          );
        if (lines.every((l) => l.startsWith("- ")))
          return (
            <ul key={i}>
              {lines.map((l) => (
                <li key={l}>{l.slice(2)}</li>
              ))}
            </ul>
          );
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
