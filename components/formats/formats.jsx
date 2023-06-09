import { useState } from "react";
import { motion } from "framer-motion";

import Title from "../UI/title/title";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { formats } from "@/data";
import { fadeInY } from "@/utils/motion";

import "overlayscrollbars/overlayscrollbars.css";
import styles from "./formats.module.scss";

const Formats = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (event) => {
    const clickedElementId = event.currentTarget.dataset.id;
    const indexOfClickedElement = formats.findIndex(
      (format) => format.id === clickedElementId
    );

    setCurrentIndex(indexOfClickedElement);
  };

  const FormatImage = formats[currentIndex].image;

  return (
    <section id="formats" className={styles.formats}>
      <div className={styles.container}>
        <Title>Formats</Title>
        <p className={styles.subtitle}>
          we work with the most popular forms of advertising
        </p>
        <OverlayScrollbarsComponent
          element="div"
          options={{
            scrollbars: { autoHide: "never" },
          }}
          className={styles.scrollbar}
          defer
        >
          <ul className={styles.buttons}>
            {formats.map((format, index) => {
              const { id, title, thumbnail: Thumbnail } = format;

              return (
                <li
                  key={id}
                  data-id={id}
                  onClick={handleButtonClick}
                  className={
                    index === currentIndex
                      ? `${styles.button} ${styles.current}`
                      : `${styles.button}`
                  }
                >
                  <Thumbnail />
                  <h4 className={styles.buttonTitle}>{title}</h4>
                </li>
              );
            })}
          </ul>
        </OverlayScrollbarsComponent>
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          className={styles.showcase}
        >
          <motion.div
            custom={1}
            variants={fadeInY("up")}
            className={styles.imageWraper}
          >
            <h3 className={`${styles.formatTitle} ${styles.mobile}`}>
              {formats[currentIndex].title}
            </h3>
            <div className={styles.image}>
              <FormatImage className={styles.svg} />
              <div className={`${styles.descrFooter} ${styles.mobile}`}>
                <p className={styles.details}>
                  <span className={styles.detailsLabel}>Cost per click</span>
                  <span className={styles.detailsValue}>
                    from {formats[currentIndex].costPerClick}$ CPM
                  </span>
                </p>
                <p className={styles.details}>
                  <span className={styles.detailsLabel}>Daily volume</span>
                  <span className={styles.detailsValue}>
                    more than {formats[currentIndex].dailyVolume} views
                  </span>
                </p>
              </div>
            </div>
            <p className={`${styles.descr} ${styles.mobile}`}>
              {formats[currentIndex].descr}
            </p>
          </motion.div>
          <motion.div custom={2} variants={fadeInY("down")}>
            <h3 className={styles.formatTitle}>
              {formats[currentIndex].title}
            </h3>
            <p className={styles.descr}>{formats[currentIndex].descr}</p>
            <div className={styles.descrFooter}>
              <p className={styles.details}>
                <span className={styles.detailsLabel}>Cost per click</span>
                <span className={styles.detailsValue}>
                  from {formats[currentIndex].costPerClick}$ CPM
                </span>
              </p>
              <p className={styles.details}>
                <span className={styles.detailsLabel}>Daily volume</span>
                <span className={styles.detailsValue}>
                  more than {formats[currentIndex].dailyVolume} views
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Formats;
