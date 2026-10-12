import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/coffee-icon.png";

const services = ["Pricing", "Tracking", "Report a Bug", "Terms of Services"];
const company = ["Pricing", "Tracking", "Report a Bug", "Terms of Services"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logoLink}>
            Flavored{" "}
            <Image
              src={logo}
              alt=""
              width={22}
              height={22}
              className={styles.logoIcon}
            />
          </Link>
          <span className={styles.logoSubtitle}>
            Wake up to something special.
          </span>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Our Services</h3>
          <ul className={styles.linkList}>
            {services.map((item) => (
              <li key={`services-${item}`}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Our Company</h3>
          <ul className={styles.linkList}>
            {company.map((item) => (
              <li key={`company-${item}`}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Address</h3>
          <p className={styles.address}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
