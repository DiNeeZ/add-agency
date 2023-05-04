import { motion } from "framer-motion";

import Title from "../UI/title/title";
import Subtitle from "../UI/subtitle/subtitle";
import Button from "../UI/button/button";
import SmallCard from "../UI/small-card/small-card";
import { webmasterBenefits, webmasterCards } from "@/data";
import { textAnimation } from "@/utils/motion";

import styles from "./webmaster.module.scss";

const MotionTitle = motion(Title);
const MotionSubtitle = motion(Subtitle);

const renderBenefit = (benefit) => {
  const { id, text, icon: Icon } = benefit;

  return (
    <li key={id} className={styles.benefit}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <p className={styles.benefitText}>{text}</p>
    </li>
  );
};

const renderCard = (card) => (
  <li key={card.id} className={styles.card}>
    <SmallCard title={card.title} subtitle={card.subtitle} icon={card.icon} />
  </li>
);

const Webmaster = () => {
  return (
    <section id="webmaster" className={styles.webmaster}>
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.heading}
        >
          <MotionSubtitle theme="teal" custom={1} variants={textAnimation()}>
            Webmaster
          </MotionSubtitle>
          <MotionTitle custom={2} variants={textAnimation()}>
            Earn more with us
          </MotionTitle>
        </motion.div>

        <div className={styles.content}>
          <ul className={styles.benefits}>
            {webmasterBenefits.map((benefit) => renderBenefit(benefit))}
          </ul>

          <ul className={styles.cards}>
            {webmasterCards.map((card) => renderCard(card))}
          </ul>
        </div>

        <div className={styles.bottom}>
          <Button theme="teal">Make more</Button>

          <Button theme="transparent-teal">
            Register as
            <br /> an webmaster
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Webmaster;
