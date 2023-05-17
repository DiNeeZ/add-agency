import styles from "./modal-title.module.scss";

const ModalTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default ModalTitle;
