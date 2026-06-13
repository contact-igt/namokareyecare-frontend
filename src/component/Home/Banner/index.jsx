import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

export default function Banner() {
  const { eyebrow, title, description, cta, image } = homeContent.banner;

  return (
    <section className={styles.hero} aria-label="Namokar Eye hero">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h1 className={styles.title}>
            {title.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h1>
          <p className={styles.description}>{description}</p>

          <Link href={cta.href} className={styles.cta}>
            {cta.label}
            <ArrowRight size={20} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.visual} aria-label={image.alt}>
          <span className={styles.imageHalo} aria-hidden="true" />
          <span className={styles.accentOne} aria-hidden="true" />
          <span className={styles.accentTwo} aria-hidden="true" />
          <span className={styles.accentThree} aria-hidden="true" />
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
