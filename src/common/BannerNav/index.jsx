import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { headerContent } from "@/constant/navContent";
import styles from "./styles.module.css";

const itemsWithChevrons = new Set(["Home", "Doctors", "Services"]);

export default function BannerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, badge, navItems, appointment } = headerContent;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={logo.alt}>
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={styles.logo}
            priority
          />
          <span className={styles.badgeShell} aria-label={badge.alt}>
            <Image
              src={badge.src}
              alt={badge.alt}
              width={badge.width}
              height={badge.height}
              className={styles.badge}
              priority
            />
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.navLink}>
              {item.label}
              {itemsWithChevrons.has(item.label) && (
                <ChevronDown size={17} strokeWidth={2.4} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        <Link href={appointment.href} className={styles.appointment}>
          {appointment.label}
          <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              {itemsWithChevrons.has(item.label) && (
                <ChevronDown size={18} strokeWidth={2.3} aria-hidden="true" />
              )}
            </Link>
          ))}
          <Link
            href={appointment.href}
            className={styles.mobileAppointment}
            onClick={() => setIsOpen(false)}
          >
            {appointment.label}
            <ArrowRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
