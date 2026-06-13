import Image from "next/image";
import Link from "next/link";
import { footerContent } from "@/constant/footerContent";
import styles from "./styles.module.css";

export default function Footer() {
  const { logo, badge, tagline, links, hours, contact, copyright } = footerContent;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left Section: Branding */}
        <div className={styles.brandCol}>
          <div className={styles.logos}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={styles.logo}
            />
            <Image
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              className={styles.badge}
            />
          </div>
          <p className={styles.tagline}>{tagline}</p>
        </div>

        {/* Links Column */}
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

        {/* Opening Hours Column */}
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

        {/* Address and Phone Column */}
        <div className={styles.contactCol}>
          <div className={styles.subCol}>
            <h3 className={styles.colTitle}>{contact.address.title}</h3>
            <p className={styles.addressText}>{contact.address.value}</p>
          </div>
          <div className={styles.subCol}>
            <h3 className={`${styles.colTitle} ${styles.phoneTitle}`}>{contact.phone.title}</h3>
            <ul className={styles.phoneList}>
              {contact.phone.numbers.map((phone, idx) => (
                <li key={idx}>
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

      {/* Footer Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.socials}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3h-3.5V6.5c0-.83.67-1.5 1.5-1.5h2V2h-3C10.79 2 9 4.21 9 7v1z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.95 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.92 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.95 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Pinterest">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.63 11.16-.1-.95-.2-2.4.04-3.43.22-1 .1.91 1.4 4.3 1.22 3.1 3.96 4.96 7.42 4.96 9.42 0 16.71-8.59 16.71-16.14 0-10.45-7.48-15.02-15.05-15.02-9.28 0-15.42 6.57-15.42 14.52 0 2.8 1.07 5.8 2.42 7.43.27.32.3.43.2.81-.07.3-.23 1-.3.1.13-.03.11-.3-.22-.67-.78-.96-3.11-1.39-3.51-3.23-1.39-7.25-1.39-4.8 0-4.04 8.24-11.45 13.91-11.45 19.53 0 10.15 0 10.63 8.32 10.63 11.53 0 5.75-8.22 10.15-13.91 10.15-12.01 0-8.59-17.15-1.92-17.15 6 0 5.51 5.09 5.51 7.91 0 4.99-2.88 8.98-7.14 8.98-1.4 0-2.73-.73-3.18-1.55l-.87 3.32c-.31 1.2-.93 2.41-1.4 3.17C17.06 23.47 19.42 24 22 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
