import Image from "next/image";
import Link from 'next/link';   
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Innovation Studio</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
        <Link href="/learn-more">
            <button className={`${styles.button} ${styles.buttonPrimary}`}>
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className={`${styles.button} ${styles.buttonSecondary}`}>
              Contact
            </button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/image.png" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
