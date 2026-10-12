import styles from "./page.module.css";
import Image from "next/image";
import logo from "@/public/images/coffee-icon.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            Flavored <Image src={logo} alt="logo" width={25} height={25} />
          </Link>
          <span className={styles.logoSubtitle}>Wake up to something special</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Coffee Menu</Link>
            </li>
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/" className={styles.navAccent}>Coffee Shop</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
