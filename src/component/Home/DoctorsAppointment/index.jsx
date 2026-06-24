"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { homeContent } from "@/constant/homeContent";
import styles from "./styles.module.css";

export default function DoctorsAppointment() {
  const { eyebrow, title, allDoctors, doctors, appointment } =
    homeContent.doctorsAppointment;

  const [largeDoctor, secondDoctor, thirdDoctor] = doctors;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section
      className={styles.doctorsSection}
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
          {/* Column 1: Large Doctor Card */}
          {largeDoctor && (
            <article className={`${styles.doctorCard} ${styles.largeCard}`} key={largeDoctor.name}>
              <div className={styles.largeDoctorImageWrap}>
                <Image
                  src={largeDoctor.image.src}
                  alt={largeDoctor.image.alt}
                  width={largeDoctor.image.width}
                  height={largeDoctor.image.height}
                  className={styles.doctorImage}
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <div className={styles.largeDoctorInfo}>
                <motion.h3
                  className={styles.doctorName}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  {largeDoctor.name}
                </motion.h3>
                <div className={styles.doctorDesignationWrap}>
                  {Array.isArray(largeDoctor.designation) ? (
                    largeDoctor.designation.map((line, idx) => (
                      <p key={idx} className={styles.doctorDesignation}>
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className={styles.doctorDesignation}>
                      {largeDoctor.designation}
                    </p>
                  )}
                </div>
                <Link href="/appointment" className={styles.cardButton}>
                  Get Appointment
                </Link>
              </div>
            </article>
          )}

          {/* Column 2: Stacked Small Doctor Cards */}
          <div className={styles.stackedColumn}>
            {[secondDoctor, thirdDoctor].filter(Boolean).map((doctor) => (
              <article className={`${styles.doctorCard} ${styles.smallCard}`} key={doctor.name}>
                <div className={styles.smallDoctorImageWrap}>
                  <Image
                    src={doctor.image.src}
                    alt={doctor.image.alt}
                    width={doctor.image.width}
                    height={doctor.image.height}
                    className={styles.smallDoctorImage}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 140px"
                  />
                </div>
                <div className={styles.smallDoctorInfo}>
                  <motion.h3
                    className={styles.doctorName}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {doctor.name}
                  </motion.h3>
                  <p className={styles.doctorDesignation}>
                    {doctor.designation}
                  </p>
                  <Link href="/appointment" className={styles.cardButton}>
                    Get Appointment
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Column 3: Book An Appointment Form */}
          <div className={styles.formWrapper}>
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
                  <span>{appointment.fields.doctor}</span>
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
                  <span>{appointment.fields.name}</span>
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
                <input type="text" />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>
                  <span>{appointment.fields.phone}</span>
                  <span className={styles.required} aria-hidden="true">
                    *
                  </span>
                </span>
                <input type="tel" />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>
                  <span>{appointment.fields.date}</span>
                </span>
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
                  <span>{appointment.fields.time}</span>
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
      </div>
    </section>
  );
}
