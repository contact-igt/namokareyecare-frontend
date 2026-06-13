import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Preloader() {
  const [phase, setPhase] = useState("filling"); // filling → splitting → done

  useEffect(() => {
    // After logo fills up, start the wipe-away split
    const splitTimer = setTimeout(() => setPhase("splitting"), 1800);
    // After split is complete, unmount
    const doneTimer = setTimeout(() => setPhase("done"), 2700);
    return () => {
      clearTimeout(splitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`${styles.preloader} ${phase === "splitting" ? styles.splitting : ""}`} aria-hidden="true">
      {/* Left panel */}
      <div className={`${styles.panel} ${styles.panelLeft}`} />
      {/* Right panel */}
      <div className={`${styles.panel} ${styles.panelRight}`} />

      {/* Centered logo with liquid fill */}
      <div className={`${styles.logoWrap} ${phase === "splitting" ? styles.logoFade : ""}`}>
        <div className={styles.liquidContainer}>
          {/* Liquid fill layer */}
          <div className={styles.liquidFill} />
          {/* Logo rendered on top */}
          <Image
            src="/assets/Header/LOGO.png"
            alt="Namokar Eye"
            width={220}
            height={84}
            className={styles.logo}
            priority
          />
        </div>

        {/* Progress ring */}
        <div className={styles.ringWrap}>
          <svg className={styles.ring} viewBox="0 0 80 80" fill="none">
            <circle className={styles.ringTrack} cx="40" cy="40" r="34" />
            <circle className={styles.ringFill} cx="40" cy="40" r="34" />
          </svg>
        </div>
      </div>
    </div>
  );
}
