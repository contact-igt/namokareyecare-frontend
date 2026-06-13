import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

function PhotoPanel({ image }) {
  return (
    <div
      className={`${styles.photo} ${styles[image.variant]}`}
      role="img"
      aria-label={image.alt}
      style={{ "--photo-src": `url(${image.src})` }}
    />
  );
}

export default function WhyChoose() {
  const { eyebrow, title, description, cta, highlights, images } =
    homeContent.whyChoose;

  return (
    <section className={styles.whyChoose} aria-labelledby="why-choose-title">
      <span className={styles.leftGlow} aria-hidden="true" />
      <span className={styles.circleOne} aria-hidden="true" />
      <span className={styles.circleTwo} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.collage}>
          {images.map((image) => (
            <PhotoPanel key={image.variant} image={image} />
          ))}
        </div>

        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h2 id="why-choose-title" className={styles.title}>
            {title}
          </h2>

          <p className={styles.description}>{description}</p>

          <ul className={styles.list}>
            {highlights.map((item) => (
              <li key={item} className={styles.listItem}>
                <Copy className={styles.listIcon} size={19} strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href={cta.href} className={styles.cta}>
            {cta.label}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
