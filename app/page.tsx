import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.shell}>
      <Header />
      <Hero />
      <Shop />
      <Footer />
    </main>
  );
}
