import styles from "./page.module.css";
import Image from "next/image";
import coffee from "@/public/images/coffee-view.png";
import cartIcon from "@/public/images/cart-icon.png";
import heartIcon from "@/public/images/heart-icon.png";

const products = [
  {
    name: "Americano",
    description: "100% Natural Arabica or Robusta, 30 ml cup",
    price: "$2.50",
  },
  {
    name: "Cappuccino",
    description: "Coffee 50%, milk 50%, 280 ml",
    price: "$2.50",
  },
];

export default function Shop() {
  return (
    <section className={styles.shop}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.cards}>
            {products.map((product) => (
              <article key={product.name} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={coffee}
                    alt={product.name}
                    width={220}
                    height={220}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{product.name}</h3>
                  <p className={styles.cardText}>{product.description}</p>
                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={styles.actionButton}
                      aria-label="Add to cart"
                    >
                      <Image
                        src={cartIcon}
                        alt=""
                        width={22}
                        height={22}
                        className={styles.actionIcon}
                      />
                    </button>
                    <button
                      type="button"
                      className={styles.actionButton}
                      aria-label="Favorite"
                    >
                      <Image
                        src={heartIcon}
                        alt=""
                        width={22}
                        height={22}
                        className={styles.actionIcon}
                      />
                    </button>
                  </div>
                </div>
                <span className={styles.price}>{product.price}</span>
              </article>
            ))}
          </div>

          <div className={styles.info}>
            <h2 className={styles.infoTitle}>
              Lorem Ipsum is simply
              <br />
              dummy text of the printing
              <br />
              and typesetting industry.
            </h2>
            <p className={styles.infoText}>
              Lorem Ipsum has been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button type="button" className={styles.learnMore}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
