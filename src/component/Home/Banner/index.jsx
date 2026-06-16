import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function Banner() {
  const { eyebrow, title, description, cta } = homeContent.banner;

  return (
    <section className={styles.hero} aria-label="Namokar Eye hero">
      <div className={styles.heroInner}>
        <div className={styles.copy}>
          <RevealOnView variant="fadeUp" delay={0}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
          </RevealOnView>

          <h1 className={styles.title}>
            {title.map((line, i) => (
              <WordReveal
                key={line}
                text={line}
                tag="span"
                delay={i * 120}
                className={styles.titleLine}
              />
            ))}
          </h1>

          <RevealOnView variant="fadeUp" delay={350}>
            <p className={styles.description}>{description}</p>
          </RevealOnView>

          <RevealOnView variant="fadeUp" delay={480}>
            <Link href={cta.href} className={styles.cta}>
              {cta.label}
              <ArrowRight size={20} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </RevealOnView>
        </div>
      </div>

      <div className={styles.sparkles} aria-hidden="true">
        <span className={styles.sparkle} />
        <span className={styles.sparkle} />
        <span className={styles.sparkle} />
        <span className={styles.sparkle} />
      </div>
    </section>
  );
}
