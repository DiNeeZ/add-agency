import styles from "./textarea.module.scss";

const Textarea = ({ ...otherProps }) => {
  return (
    <div className={styles.wrapper}>
      <textarea className={styles.textarea} {...otherProps} rows={"5"} />
    </div>
  );
};

export default Textarea;
