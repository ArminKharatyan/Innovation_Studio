import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Studio</h2>
        <h1 className={styles.title}>
        Turning Vision into Innovation
        </h1>
        <p className={styles.desc}>
        Suspendisse fusce interdum hac; magnis eleifend auctor. 
        Eleifend fusce taciti sit velit nulla ultrices suscipit. 
        Himenaeos dolor venenatis vel sodales vitae posuere sit volutpat congue. 
        Vitae aliquam per vivamus netus consequat pulvinar inceptos. 
        Tincidunt est tincidunt ex convallis sem donec auctor. Consequat gravida massa enim interdum, augue per.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Aptent torquent</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Ad finibus ligula</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Curae habitant</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;
