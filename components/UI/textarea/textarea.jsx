import styles from "./textarea.module.scss";

const Textarea = ({ handleChange, ...otherProps }) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        value={otherProps.value}
        className={styles.textarea}
        rows={"5"}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Textarea;
