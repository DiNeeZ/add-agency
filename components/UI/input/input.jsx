import styles from "./input.module.scss";

const Input = ({ handleChange, values, ...otherProps }) => {
  return (
    <div className={styles.inputWrapper}>
      <input onChange={handleChange} className={styles.input} {...otherProps} />
    </div>
  );
};

export default Input;
