import styles from "./page.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={120} height={50} />
        </div>
        <nav className={styles.nav}>
          <ul>
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
              <Link href="/">Coffee Shop</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
