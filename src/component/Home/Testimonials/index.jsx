import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star, StarHalf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsContent } from "@/constant/testimonialsContent";
import RevealOnView from "@/common/RevealOnView";
import styles from "./styles.module.css";

export default function Testimonials() {
  const { eyebrow, title, reviews } = testimonialsContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimer = useRef(null);

  const totalReviews = reviews.length;

  const stopAutoScroll = () => {
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = null;
    }
  };

  useEffect(() => {
    stopAutoScroll();

    if (isPaused) {
      return undefined;
    }

    autoScrollTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalReviews);
    }, 4500);

    return () => stopAutoScroll();
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  // Calculate visible range of 3 items for larger screens or sliding window
  const getVisibleReviews = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(reviews[(activeIndex + i) % totalReviews]);
    }
    return items;
  };

  return (
    <section className={styles.testimonialsSection} aria-labelledby="testimonials-section-title">
      <div className={styles.inner}>
        <RevealOnView variant="fadeUp">
          <div className={styles.header}>
            <div className={styles.left}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowLine} aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
              <h2 id="testimonials-section-title" className={styles.title}>
                {title}
              </h2>
            </div>

            <div className={styles.navButtons}>
              <button
                onClick={handlePrev}
                className={styles.navButton}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className={styles.navButton}
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </RevealOnView>

        {/* Carousel Tracks */}
        <div
          className={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {getVisibleReviews().map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={styles.testimonialWrapper}
                >
                {/* Review Card */}
                <div className={styles.card}>
                  <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, idx) => {
                      if (idx < Math.floor(review.stars)) {
                        return <Star key={idx} size={16} fill="#2aa7ff" color="#2aa7ff" className={styles.starIcon} />;
                      } else if (idx < Math.ceil(review.stars)) {
                        return <StarHalf key={idx} size={16} fill="#2aa7ff" color="#2aa7ff" className={styles.starIcon} />;
                      } else {
                        return <Star key={idx} size={16} color="#cfd8e3" className={styles.starIcon} />;
                      }
                    })}
                  </div>
                </div>

                {/* Author Metadata below the card aligned nicely with screenshot */}
                <div className={styles.authorMeta}>
                  <div className={styles.avatarWrap}>
                    <Image
                      src={review.author.image}
                      alt={review.author.name}
                      width={44}
                      height={44}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{review.author.name}</h4>
                    <p className={styles.authorRole}>{review.author.role}</p>
                  </div>
                </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
