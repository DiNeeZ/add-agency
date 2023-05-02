import { useState } from "react";

import Title from "../UI/title/title";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { formats } from "@/data";

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
    <section className={styles.formats}>
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
          className={`${styles.scrollbar} kakak`}
          defer
        >
          <ul className={styles.buttons}>
            {formats.map((format) => {
              const { id, title, thumbnail: Thumbnail } = format;

              return (
                <li
                  key={id}
                  data-id={id}
                  onClick={handleButtonClick}
                  className={styles.button}
                >
                  <Thumbnail />
                  <h4 className={styles.buttonTitle}>{title}</h4>
                </li>
              );
            })}
          </ul>
        </OverlayScrollbarsComponent>
        <div className={styles.showcase}>
          <div className={styles.imageWraper}>
            <FormatImage className={styles.image} />
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formats;
