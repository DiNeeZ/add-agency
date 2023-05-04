import { motion } from "framer-motion";

import Title from "../UI/title/title";
import Subtitle from "../UI/subtitle/subtitle";
import Button from "../UI/button/button";
import SmallCard from "../UI/small-card/small-card";
import { tematic, numsOfAdvantages, advantageCards } from "@/data";
import { textAnimation, cascade } from "@/utils/motion";

import styles from "./advertiser.module.scss";

const renderTematicItem = (item) => {
  const { id, label, icon: Icon } = item;
  return (
    <li key={id} className={styles.tematicItem}>
      <Icon className={styles.tematicIcon} />
      <span className={styles.tematicLabel}>{label} </span>
    </li>
  );
};

const renderNum = (item, index) => {
  const { id, label, num } = item;
  const abbreviateNumFlag = 1_000_000;

  return (
    <motion.li
      custom={index}
      variants={cascade()}
      key={id}
      className={styles.numsListItem}
    >
      <div className={styles.numWrapper}>
        {num >= abbreviateNumFlag ? (
          <>
            <span className={styles.num}>
              {Math.trunc(num / abbreviateNumFlag)}+
            </span>
            <span className={styles.mills}>mills</span>
          </>
        ) : (
          <span className={styles.num}>{num}+</span>
        )}
      </div>
      <p className={styles.numsLabel}>{label}</p>
    </motion.li>
  );
};

const renderCard = (card, index) => (
  <motion.li
    key={card.id}
    custom={index}
    variants={cascade()}
    className={styles.listCardsItem}
  >
    <SmallCard title={card.title} subtitle={card.subtitle} icon={card.icon} />
  </motion.li>
);

const MotionTitle = motion(Title);
const MotionSubtitle = motion(Subtitle);

const Advertiser = () => (
  <section id="advertiser" className={styles.advertiser}>
    <div className={styles.container}>
      <div className={styles.heading}>
        <MotionSubtitle custom={1} variants={textAnimation()}>
          Advertiser
        </MotionSubtitle>
        <MotionTitle custom={2} variants={textAnimation("right")}>
          Pump up your business
        </MotionTitle>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.columns}
      >
        <motion.div variants={textAnimation()} className={styles.only}>
          <h3 className={styles.title}>
            Thematic traffic by different categories
          </h3>

          <ul className={styles.tematicList}>
            {tematic.map((item, index) => renderTematicItem(item, index))}
          </ul>
        </motion.div>

        <div className={styles.double}>
          <ul className={styles.numsList}>
            {numsOfAdvantages.map((num, index) => renderNum(num, index))}
          </ul>

          <ul className={styles.listCards}>
            {advantageCards.map((card, index) => renderCard(card, index))}
          </ul>
        </div>
      </motion.div>

      <div className={styles.bottom}>
        <Button>Pump the business</Button>
        <Button theme="transparent">
          Register as
          <br /> an advertiser
        </Button>
      </div>
    </div>
  </section>
);

export default Advertiser;
