import styles from "./button.module.scss";

const Button = ({ children, handleClick, variant, theme }) => {
  const getButtonClassName = () => {
    if ([variant, theme].every(Boolean))
      return `${styles.button} ${styles[variant]} ${styles[theme]}`;

    if ([variant, theme].some(Boolean)) {
      return variant === undefined
        ? `${styles.button} ${styles[theme]}`
        : `${styles.button} ${styles[variant]}`;
    }

    return `${styles.button}`;
  };

  return (
    <button className={getButtonClassName()} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
