import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/constant/footerContent";
import styles from "./styles.module.css";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
    <rect x="2" y="4" width="20" height="16" rx="2" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const socialIconMap = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export default function Footer() {
  const { logo, description, socials, expertCare, quickContact, location, copyright, poweredBy } =
    footerContent;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* Col 1 – Brand */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrap}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
                priority={false}
              />
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.socials}>
              {socials.map((s) => {
                const Icon = socialIconMap[s.platform];
                return (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label={s.ariaLabel}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2 – Expert Care */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{expertCare.title}</h4>
            <p className={styles.doctorName}>{expertCare.doctor.name}</p>
            <p className={styles.doctorInfo}>
              {expertCare.doctor.qualifications}
              <br />
              {expertCare.doctor.experience}
            </p>
          </div>

          {/* Col 3 – Quick Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{quickContact.title}</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.iconBox}>
                  <PhoneIcon />
                </span>
                <a href={`tel:${quickContact.phone}`} className={styles.contactLink}>
                  {quickContact.phone}
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.iconBox}>
                  <MailIcon />
                </span>
                <a href={`mailto:${quickContact.email}`} className={styles.contactLink}>
                  {quickContact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 – Location */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>{location.title}</h4>
            <div className={styles.locationItem}>
              <span className={`${styles.iconBox} ${styles.iconBoxTop}`}>
                <MapPinIcon />
              </span>
              <p className={styles.locationText}>{location.address}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{copyright}</p>
          <p className={styles.poweredBy}>
            Powered by{" "}
            <span className={styles.poweredByBrand}>{poweredBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

