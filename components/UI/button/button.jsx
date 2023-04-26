import styles from "./button.module.scss";

const Button = ({
  children,
  handleClick,
  variant = "primary",
  theme = "purple",
}) => {
  const variantClass = variant === "secondary" ? "secondary" : false;
  const themeClass = theme === "teal" ? "teal" : false;

  const getButtonClassName = (variant, theme) => {
    if ([variant, theme].every(Boolean))
      return `${styles.button} ${styles[variantClass]} ${styles[themeClass]}`;

    if ([variant, theme].some(Boolean)) {
      return variant === false
        ? `${styles.button} ${styles[themeClass]}`
        : `${styles.button} ${styles[variantClass]}`;
    }

    return `${styles.button}`;
  };

  const buttonClassname = getButtonClassName(variantClass, themeClass);

  return (
    <button className={buttonClassname} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
