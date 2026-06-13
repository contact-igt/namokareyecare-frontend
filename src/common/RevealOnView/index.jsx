import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

/**
 * Lightweight scroll-reveal wrapper.
 *
 * Props:
 *  - variant: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "stagger"
 *  - delay: number in ms (default 0)
 *  - threshold: 0–1 (default 0.18)
 *  - once: boolean (default true) — animate once and keep visible
 */
export default function RevealOnView({
  children,
  variant = "fadeUp",
  delay = 0,
  threshold = 0.18,
  once = true,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.style.transitionDelay = `${delay}ms`;
          node.classList.add(styles.visible);
          if (once) observer.disconnect();
        } else if (!once) {
          node.classList.remove(styles.visible);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, threshold, once]);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * WordReveal — splits text into spans and reveals word by word.
 * Usage: <WordReveal text="Your headline here" tag="h2" className={...} />
 */
export function WordReveal({ text, tag: Tag = "p", className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const words = node.querySelectorAll("[data-word]");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((w, i) => {
            w.style.transitionDelay = `${delay + i * 55}ms`;
            w.classList.add(styles.wordVisible);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`${styles.wordRevealRoot} ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} data-word className={styles.word}>
          {word}&nbsp;
        </span>
      ))}
    </Tag>
  );
}
