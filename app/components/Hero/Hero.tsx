import styles from "./page.module.css";
import Image from "next/image";
import coffee from "@/public/images/coffee-view.png";
import icon1 from "@/public/images/coffee-icon.png";
import icon2 from "@/public/images/coffee-icon-1.png";
import icon3 from "@/public/images/coffee-icon-2.png";
import icon4 from "@/public/images/coffee-icon-3.png";

const icons = [
  { label: "Hot coffee", src: icon1 },
  { label: "Iced coffee", src: icon2 },
  { label: "Cup", src: icon3 },
  { label: "Beans", src: icon4 },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h1 className={styles.title}>
              Coffee
              <span className={styles.titleSub}>The Best For You</span>
            </h1>
            <button type="button" className={styles.buttonMenu}>
              View Menu
            </button>
            <ul className={styles.iconList}>
              {icons.map((icon) => (
                <li key={icon.label}>
                  <button
                    type="button"
                    className={styles.iconButton}
                    aria-label={icon.label}
                  >
                    <Image
                      src={icon.src}
                      alt=""
                      width={24}
                      height={24}
                      className={styles.iconImage}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contentRight}>
            <Image
              src={coffee}
              alt="Cup of coffee with heart latte art"
              width={580}
              height={580}
              className={styles.coffeeImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
