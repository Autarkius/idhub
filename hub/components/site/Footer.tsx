import { MapPin, Phone } from "lucide-react";
import type { Contact } from "@/lib/site";
import BrandIcon from "./BrandIcon";
import styles from "./Footer.module.css";

export default function Footer({ contact }: { contact: Contact }) {
  const { social, apps, branches } = contact;
  const hasApps = Boolean(apps.microsoft || apps.googlePlay || apps.appStore);

  return (
    <footer id="contact" className={styles.footer}>
      {/* المنحنى اللي فوق الفوتر */}
      <div className={styles.reveal} aria-hidden>
        <svg viewBox="0 0 1920 95.2" preserveAspectRatio="none">
          <path d="M0 0H1920C1600 63 1290 95.2 960 95.2S320 63 0 0Z" />
        </svg>
      </div>

      <div className={styles.cta}>
        <p className={`eyebrow ${styles.ctaEyebrow}`}>{contact.ctaEyebrow}</p>
        <h2 className={styles.ctaTitle}>{contact.ctaTitle}</h2>
      </div>
      <a href={contact.ctaHref} className={`ring-link ${styles.ctaButton}`} target="_blank" rel="noreferrer">
        {contact.ctaButton}
      </a>

      <div className={styles.grid}>
        <div className={styles.col}>
          <h3 className={styles.colTitle}>التواصل</h3>
          {contact.whatsapp ? (
            <a href={contact.whatsapp} className={styles.whatsapp} target="_blank" rel="noreferrer">
              <BrandIcon name="whatsapp" size={15.3} color="var(--whatsapp)" />
              WhatsApp
            </a>
          ) : null}
          {contact.phone ? (
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className={styles.whatsapp}>
              <Phone size={14.6} strokeWidth={1.9} />
              <bdi dir="ltr">{contact.phone}</bdi>
            </a>
          ) : null}
          {social.instagram && !contact.email ? (
            <a href={social.instagram} className={styles.whatsapp} target="_blank" rel="noreferrer">
              <BrandIcon name="instagram" size={14} />
              Instagram
            </a>
          ) : null}
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className={styles.email}>
              E : {contact.email}
            </a>
          ) : null}
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>العنوان</h3>
          {branches.map((b, i) => (
            <div key={b.address} className={styles.branch}>
              <p className={`${styles.line} ${i > 0 ? styles.sep : ""}`}>{b.address}</p>
              {b.zip ? <p className={`${styles.line} ${i === branches.length - 1 ? styles.zipLast : styles.zip}`}>{b.zip}</p> : null}
            </div>
          ))}
        </div>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>تابعنا</h3>
          <div className={styles.social}>
            {[...branches].reverse().map((b, i) =>
              b.map ? (
                <a key={b.address} href={b.map} aria-label={`الفرع ${branches.length - i} على الخريطة`}>
                  <MapPin size={14.6} strokeWidth={1.9} />
                </a>
              ) : null,
            )}
            {social.facebook ? (
              <a href={social.facebook} aria-label="Facebook">
                <BrandIcon name="facebook" size={14.6} />
              </a>
            ) : null}
            {social.instagram ? (
              <a href={social.instagram} aria-label="Instagram">
                <BrandIcon name="instagram" size={14.6} />
              </a>
            ) : null}
            {social.x ? (
              <a href={social.x} aria-label="X">
                <BrandIcon name="x" size={13} />
              </a>
            ) : null}
            {social.linkedin ? (
              <a href={social.linkedin} aria-label="LinkedIn">
                <BrandIcon name="linkedin" size={14.6} />
              </a>
            ) : null}
            {social.snapchat ? (
              <a href={social.snapchat} aria-label="Snapchat">
                <BrandIcon name="snapchat" size={14.6} />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {hasApps ? (
        <div className={styles.app}>
          <span className={styles.appLabel}>حمّل التطبيق</span>
          <div className={styles.appLinks}>
            {apps.microsoft ? (
              <a href={apps.microsoft} aria-label="Get it from Microsoft Store">
                <span>Microsoft Store</span>
                <BrandIcon name="microsoft" size={14.7} />
              </a>
            ) : null}
            {apps.googlePlay ? (
              <a href={apps.googlePlay} aria-label="Get it on Google Play">
                <span>Google Play</span>
                <BrandIcon name="googleplay" size={16} />
              </a>
            ) : null}
            {apps.appStore ? (
              <a href={apps.appStore} aria-label="Download on the App Store">
                <span>App Store</span>
                <BrandIcon name="appstore" size={16} />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}

      <button type="button" className={styles.lang} aria-label="اللغة: العربية">
        <span className={styles.chevron} aria-hidden>
          ⌄
        </span>
        <span className={styles.langText}>العربية</span>
        <span className={styles.flag}>SA</span>
      </button>

      <p className={styles.copyright} dir="ltr">
        {contact.copyright}
      </p>
    </footer>
  );
}
