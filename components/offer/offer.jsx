import { motion } from "framer-motion";

import Title from "../UI/title/title";

import { offers } from "@/data";
import { zoomIn } from "@/utils/motion";
import styles from "./offer.module.scss";

const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            officia! Suscipit exercitationem vel ea reprehenderit voluptates
            eligendi quasi temporibus hic cupiditate optio, distinctio obcaecati
            velit nobis itaque officiis quas similique!
          </motion.p>
          <Title>We Offer</Title>
          <ul className={styles.list}>
            {offers.map((offer, index) => {
              const { label, descr, icon: Icon } = offer;
              return (
                <motion.li
                  key={`offer-${label}`}
                  className={styles.item}
                  variants={zoomIn(300, 300)}
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
    </section>
  );
};

export default Offer;
