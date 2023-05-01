import Title from "../UI/title/title";

import styles from "./formats.module.scss";

const Formats = () => {
  return (
    <section className={styles.formats}>
      <div className={styles.container}>
        <Title>Formats</Title>
        <p className={styles.subtitle}>
          we work with the most popular forms of advertising
        </p>
        <div className={styles.buttons}>Buttons</div>
        <div className={styles.showcase}>ShowCase</div>
      </div>
    </section>
  );
};

export default Formats;
