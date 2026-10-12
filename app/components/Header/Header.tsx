"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import logo from "@/public/images/coffee-icon.png";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "Coffee Menu" },
  { href: "/", label: "About Us" },
  { href: "/", label: "Contact Us" },
  { href: "/", label: "Coffee Shop", accent: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link
            href="/"
            className={styles.logoLink}
            onClick={() => setOpen(false)}
          >
            Flavored <Image src={logo} alt="logo" width={25} height={25} />
          </Link>
          <span className={styles.logoSubtitle}>
            Wake up to something special
          </span>
        </div>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={open ? styles.menuIconOpen : styles.menuIcon} />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={link.accent ? styles.navAccent : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
