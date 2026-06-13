import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, Clock3 } from "lucide-react";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

export default function DoctorsAppointment() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { eyebrow, title, allDoctors, doctors, appointment } =
    homeContent.doctorsAppointment;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.doctorsSection} ${isVisible ? styles.visible : ""}`}
      aria-labelledby="doctors-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} aria-hidden="true" />
              <span>{eyebrow}</span>
            </div>
            <h2 id="doctors-title" className={styles.title}>
              {title}
            </h2>
          </div>

          <Link href={allDoctors.href} className={styles.allDoctors}>
            <span>{allDoctors.label}</span>
            <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.body}>
          <div className={styles.cards} aria-label="Experienced doctors">
            {doctors.map((doctor, index) => (
              <article
                className={styles.doctorCard}
                key={doctor.name}
                style={{ "--delay": `${index * 130}ms` }}
              >
                <div className={styles.doctorImageWrap}>
                  <Image
                    src={doctor.image.src}
                    alt={doctor.image.alt}
                    width={doctor.image.width}
                    height={doctor.image.height}
                    className={styles.doctorImage}
                    loading="lazy"
                    sizes="(max-width: 768px) 78vw, 230px"
                  />
                </div>
                <h3 className={styles.doctorName}>{doctor.name}</h3>
                <p className={styles.doctorDesignation}>
                  {doctor.designation}
                </p>
                <Link href="/appointment" className={styles.cardButton}>
                  Get Appointment
                </Link>
              </article>
            ))}
          </div>

          <form
            className={styles.formCard}
            aria-label={appointment.title}
            onSubmit={handleSubmit}
          >
            <div className={styles.formHeader}>
              <h3>{appointment.title}</h3>
            </div>

            <div className={styles.formBody}>
              <label className={styles.field}>
                <span className={styles.label}>
                  {appointment.fields.doctor}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
                <span className={styles.selectShell}>
                  <select defaultValue="">
                    <option value="" disabled>
                      {appointment.fields.doctorPlaceholder}
                    </option>
                    {doctors.map((doctor) => (
                      <option value={doctor.name} key={doctor.name}>
                        {doctor.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className={styles.fieldIcon}
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </label>

              <label className={styles.field}>
                <span className={styles.label}>
                  {appointment.fields.name}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
                <input type="text" />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>
                  {appointment.fields.phone}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
                <input type="tel" />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>{appointment.fields.date}</span>
                <span className={styles.inputShell}>
                  <input
                    type="text"
                    placeholder={appointment.fields.datePlaceholder}
                  />
                  <CalendarDays
                    className={styles.fieldIcon}
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </label>

              <label className={styles.field}>
                <span className={styles.label}>
                  {appointment.fields.time}
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
                <span className={styles.inputShell}>
                  <input type="text" placeholder="-  :  -" />
                  <Clock3
                    className={styles.fieldIcon}
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
              </label>

              <button className={styles.submitButton} type="submit">
                {appointment.submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
