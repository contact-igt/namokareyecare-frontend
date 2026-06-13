import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import RevealOnView, { WordReveal } from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function Banner() {
  const { eyebrow, title, description, cta, image } = homeContent.banner;

  return (
    <section className={styles.hero} aria-label="Namokar Eye hero">
      {/* Decorative floating shapes */}
      <span className="geo-blob" style={{ width: 340, height: 340, top: "8%", left: "-6%", opacity: 0.55 }} />
      <span className="geo-ring" style={{ width: 180, height: 180, top: "20%", right: "5%", opacity: 0.6 }} />
      <span className="geo-dot"  style={{ width: 60, height: 60, bottom: "18%", left: "12%", opacity: 0.7 }} />

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
              <WordReveal key={line} text={line} tag="span" delay={i * 120}
                className={styles.titleLine} />
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

        <RevealOnView variant="fadeLeft" delay={200}>
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
        </RevealOnView>
      </div>
    </section>
  );
}
