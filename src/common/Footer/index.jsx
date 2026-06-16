import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/constant/footerContent";
import styles from "./styles.module.css";

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.2h2.44l.36-2.8H13.5V9.21c0-.81.24-1.36 1.4-1.36h1.5V5.34c-.26-.03-1.14-.11-2.16-.11-2.14 0-3.6 1.3-3.6 3.7V11H8.2v2.8h2.44V21h2.86Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.62 8.85A1.68 1.68 0 1 0 6.6 5.5a1.68 1.68 0 0 0 .02 3.35ZM5.2 18.6h2.84V10H5.2v8.6Zm4.43 0h2.83v-4.8c0-1.26.24-2.47 1.8-2.47 1.54 0 1.56 1.44 1.56 2.56v4.7h2.83v-5.3c0-2.6-.56-4.58-3.6-4.58-1.46 0-2.44.8-2.84 1.56h-.04V10H9.63c.03.7 0 8.6 0 8.6Z" />
    </svg>
  ),
};

export default function Footer() {
  const { logo, tagline, links, hours, contact, copyright, socials } = footerContent;

  return (
    <footer className={styles.footer}>
      <div className={styles.frame}>
        <div className={styles.inner}>
          <div className={styles.brandCol}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={styles.logo}
              priority={false}
            />
            <p className={styles.tagline}>{tagline}</p>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>{links.title}</h3>
            <ul className={styles.linkList}>
              {links.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.hoursCol}>
            <h3 className={styles.colTitle}>{hours.title}</h3>
            <ul className={styles.hoursList}>
              {hours.schedule.map((item) => (
                <li key={item.days} className={styles.hourRow}>
                  <span className={styles.days}>{item.days}</span>
                  <span className={styles.hoursVal}>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactCol}>
            <div className={styles.subCol}>
              <h3 className={styles.colTitle}>{contact.address.title}</h3>
              <p className={styles.addressText}>{contact.address.value}</p>
            </div>
            <div className={styles.subCol}>
              <h3 className={`${styles.colTitle} ${styles.phoneTitle}`}>{contact.phone.title}</h3>
              <ul className={styles.phoneList}>
                {contact.phone.numbers.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone}`} className={styles.phoneLink}>
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={social.platform}
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
