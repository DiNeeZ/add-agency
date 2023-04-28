import styles from "./subtitle.module.scss";

const Subtitle = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>;
};

export default Subtitle;
