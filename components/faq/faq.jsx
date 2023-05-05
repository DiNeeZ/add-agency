import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Title from "../UI/title/title";
import Accordion from "../UI/accordion/accordion";
import { advertiserFAQ, webmasterFAQ } from "@/data";

import styles from "./faq.module.scss";

const FAQ = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabs = [
    {
      label: "Advertiser",
      data: advertiserFAQ,
    },
    {
      label: "Webmaster",
      data: webmasterFAQ,
    },
  ];

  const handleTabClick = (event) =>
    setCurrentTabIndex(Number(event.target.dataset.tabIndex));

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Title>Frequently Asked Questions</Title>
          <div className={styles.tabs}>
            <div className={styles.buttons}>
              <button
                className={
                  currentTabIndex === 0
                    ? `${styles.button} ${styles.active}`
                    : styles.button
                }
                onClick={handleTabClick}
                data-tab-index={0}
              >
                {tabs[0].label}
              </button>
              <button
                className={
                  currentTabIndex === 1
                    ? `${styles.button} ${styles.active}`
                    : styles.button
                }
                onClick={handleTabClick}
                data-tab-index={1}
              >
                {tabs[1].label}
              </button>
            </div>
            <motion.div
              key={currentTabIndex}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3 },
              }}
              style={{ width: "100%" }}
            >
              <Accordion list={tabs[currentTabIndex].data} />
            </motion.div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/faq.png"
            alt="coffe"
            width={777}
            height={738}
            aria-hidden={true}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
