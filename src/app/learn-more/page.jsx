import Image from "next/image";
import styles from "./learn-more.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
        Aptent torquent risus lobortis convallis ornare pharetra dis.
        </h1>
        <p className={styles.desc}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Donec lacinia potenti sodales in tincidunt maecenas etiam. 
        Hac arcu justo phasellus vehicula magnis ultricies ipsum. Dis amet purus gravida nibh pharetra class? Dignissim 
        feugiat adipiscing lorem finibus feugiat commodo vulputate conubia mattis. Vitae ultricies sociosqu dolor nam 
        cubilia bibendum elit enim. Arcu donec nullam curabitur taciti magnis; blandit praesent metus. Vivamus bibendum 
        at dignissim hac vulputate class.
        </p>
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
