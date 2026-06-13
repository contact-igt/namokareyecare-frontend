import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

export default function ProcessSteps() {
  const { eyebrow, title, steps } = homeContent.processSteps;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.24 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.process} ${isVisible ? styles.visible : ""}`}
      aria-labelledby="home-process-title"
    >
      <span className={styles.ringOuter} aria-hidden="true" />
      <span className={styles.ringMiddle} aria-hidden="true" />
      <span className={styles.ringInner} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span>{eyebrow}</span>
          <span className={styles.eyebrowLine} aria-hidden="true" />
        </div>

        <h2 id="home-process-title" className={styles.title}>
          {title}
        </h2>

        <div className={styles.timeline} aria-label="Treatment process steps">
          <svg
            className={styles.arrows}
            viewBox="0 0 1640 180"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="process-arrow"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="5"
                orient="auto"
              >
                <path d="M0 0L10 5L0 10Z" fill="#45bef6" />
              </marker>
            </defs>
            <path
              className={`${styles.arrowPath} ${styles.arrowOne}`}
              d="M285 78C362 33 464 34 527 91"
              markerEnd="url(#process-arrow)"
            />
            <path
              className={`${styles.arrowPath} ${styles.arrowTwo}`}
              d="M704 123C803 169 903 165 953 96"
              markerEnd="url(#process-arrow)"
            />
            <path
              className={`${styles.arrowPath} ${styles.arrowThree}`}
              d="M1130 78C1220 31 1327 34 1365 92"
              markerEnd="url(#process-arrow)"
            />
            {isVisible ? (
              <>
                <g className={`${styles.movingArrow} ${styles.movingArrowOne}`}>
                  <circle className={styles.movingArrowCircle} r="18" />
                  <path
                    className={styles.movingArrowIcon}
                    d="M-4 -7L5 0L-4 7"
                  />
                  <animateMotion
                    dur="3.6s"
                    begin="0.25s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M285 78C362 33 464 34 527 91"
                  />
                </g>
                <g className={`${styles.movingArrow} ${styles.movingArrowTwo}`}>
                  <circle className={styles.movingArrowCircle} r="18" />
                  <path
                    className={styles.movingArrowIcon}
                    d="M-4 -7L5 0L-4 7"
                  />
                  <animateMotion
                    dur="3.6s"
                    begin="0.75s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M704 123C803 169 903 165 953 96"
                  />
                </g>
                <g
                  className={`${styles.movingArrow} ${styles.movingArrowThree}`}
                >
                  <circle className={styles.movingArrowCircle} r="18" />
                  <path
                    className={styles.movingArrowIcon}
                    d="M-4 -7L5 0L-4 7"
                  />
                  <animateMotion
                    dur="3.6s"
                    begin="1.25s"
                    repeatCount="indefinite"
                    rotate="auto"
                    path="M1130 78C1220 31 1327 34 1365 92"
                  />
                </g>
              </>
            ) : null}
          </svg>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article
                key={step.number}
                className={styles.step}
                style={{ "--delay": `${index * 120}ms` }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    width={170}
                    height={170}
                    className={styles.stepImage}
                  />
                  <span className={styles.badge}>{step.number}</span>
                </div>

                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
