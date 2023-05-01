import { motion } from "framer-motion";

import Title from "../UI/title/title";

import { offers } from "@/data";
import { stairsAnimation } from "@/utils/motion";
import styles from "./offer.module.scss";
import Image from "next/image";

const Offer = () => {
  return (
    <motion.section className={styles.offer}>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src="/images/offers.png"
          width={715}
          height={667}
          alt="phone with adds"
        />
        <div className={styles.content}>
          <Title>We Offer</Title>
          <ul className={styles.list}>
            {offers.map((offer, index) => {
              const { label, descr, icon: Icon } = offer;
              return (
                <motion.li
                  key={`offer-${label}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={stairsAnimation}
                  className={styles.item}
                >
                  <div className={styles.itemInfo}>
                    <h3 className={styles.itemTitle}>{label}</h3>
                    <p className={styles.itemSubtitle}>{descr}</p>
                  </div>
                  <Icon className={styles.icon} />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Offer;
