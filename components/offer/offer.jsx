import Image from "next/image";
import { motion } from "framer-motion";

import Title from "../UI/title/title";
import useMedia from "@/hooks/useMedia";
import { textAnimation } from "@/utils/motion";

import { offers } from "@/data";
import styles from "./offer.module.scss";

const Offer = () => {
  const isSmallTablet = useMedia("(max-width: 768px)");

  return (
    <section className={styles.offer}>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src="/images/offers.png"
          width={715}
          height={667}
          alt="phone with adds"
        />
        <motion.div className={styles.content}>
          <Title>We Offer</Title>
          <ul className={styles.list}>
            {offers.map((offer, index) => {
              const { label, descr, icon: Icon } = offer;
              return (
                <motion.li
                  key={`offer-${label}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: !isSmallTablet }}
                  custom={index}
                  variants={textAnimation("left", isSmallTablet ? 0 : 50)}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Offer;
