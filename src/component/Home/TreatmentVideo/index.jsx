import Image from "next/image";
import { Clock3, Copy, Microscope, Stethoscope } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

const cardIcons = {
  copy: Copy,
  microscope: Microscope,
  stethoscope: Stethoscope,
  support: Clock3,
};

export default function TreatmentVideo() {
  const { eyebrow, title, cards, media, sparkle, arrow } =
    homeContent.treatmentVideo;

  return (
    <section
      className={styles.treatmentVideo}
      aria-labelledby="treatment-video-title"
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h2 id="treatment-video-title" className={styles.title}>
            {title}
          </h2>

          <Image
            src={sparkle.src}
            alt={sparkle.alt}
            width={sparkle.width}
            height={sparkle.height}
            className={styles.sparkle}
            aria-hidden="true"
          />

          <div className={styles.cards}>
            {cards.map((card) => {
              const Icon = cardIcons[card.icon] ?? Copy;

              return (
                <article
                  key={card.title}
                  className={`${styles.card} ${styles[card.variant]}`}
                >
                  <div className={styles.cardHeader}>
                    <span className={styles.iconBox} aria-hidden="true">
                      <Icon size={28} strokeWidth={1.9} />
                    </span>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                  </div>
                  <p className={styles.cardText}>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.videoWrap}>
            <iframe
              className={styles.youtubeFrame}
              src={media.youtubeEmbedUrl}
              title="Namokar Eye video"
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Curved Arrow Image */}
          {arrow && (
            <Image
              src={arrow.src}
              alt={arrow.alt}
              width={arrow.width}
              height={arrow.height}
              className={styles.arrow}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
}
