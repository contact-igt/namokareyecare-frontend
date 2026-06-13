import Image from "next/image";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

function StarCluster() {
  return (
    <svg
      className={styles.starCluster}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.8 1.7 11.3 7l5.7 1.1-4.2 4 1 5.8-5-2.8-5.1 2.8 1-5.8-4.1-4L6.2 7l2.6-5.3Z"
        fill="#FF614A"
      />
      <path
        d="m20.3 8.4 1.7 3.5 3.8.7-2.8 2.7.7 3.8-3.4-1.8-3.4 1.8.7-3.8-2.8-2.7 3.8-.7 1.7-3.5Z"
        fill="#2DB47D"
      />
      <path
        d="m10.5 18.2 1.2 2.5 2.8.5-2 2 .4 2.8-2.4-1.3L8 26l.5-2.8-2-2 2.7-.5 1.3-2.5Z"
        fill="#FFC84A"
      />
      <path
        d="m18.8 20.2 1 2.1 2.3.4-1.7 1.7.4 2.3-2-1.1-2.1 1.1.4-2.3-1.7-1.7 2.4-.4 1-2.1Z"
        fill="#35A8FF"
      />
    </svg>
  );
}

export default function Stats() {
  const { eyebrow, title, background, heart, items } = homeContent.stats;

  return (
    <section className={styles.stats} aria-labelledby="stats-title">
      <div className={styles.inner}>
        <Image
          src={background.src}
          alt={background.alt}
          width={background.width}
          height={background.height}
          className={styles.map}
          aria-hidden="true"
          priority={false}
        />

        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span>{eyebrow}</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </div>

        <StarCluster />

        <Image
          src={heart.src}
          alt={heart.alt}
          width={heart.width}
          height={heart.height}
          className={styles.heart}
          aria-hidden="true"
        />

        <h2 id="stats-title" className={styles.title}>
          {title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className={styles.grid}>
          {items.map((item) => (
            <article className={styles.item} key={item.label}>
              <Image
                src={item.icon.src}
                alt={item.icon.alt}
                width={item.icon.width}
                height={item.icon.height}
                className={styles.icon}
                aria-hidden="true"
              />
              <strong className={styles.value}>{item.value}</strong>
              <span className={styles.label}>{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
