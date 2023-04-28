import Image from "next/image";

import Title from "../UI/title/title";
import Subtitle from "../UI/subtitle/subtitle";
import Paragraph from "../UI/paragraph/paragraph";
import Button from "../UI/button/button";

import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <Title variant="h1">Major advertising network</Title>
            <Subtitle>To buy and sell traffic</Subtitle>
          </div>
          <Paragraph className={styles.text}>
            uniting webmasters, arbitrageurs, website and app owners,
            media-bayers, advertisers and more
          </Paragraph>
          <Button className={styles.button}>Register</Button>
        </div>
        <Image
          src="/images/hero.png"
          width={724}
          height={467}
          alt="adds on webpage"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Hero;
