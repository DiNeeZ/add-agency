import styles from "./button.module.scss";

const Button = ({
  children,
  handleClick,
  variant = "primary",
  theme = "purple",
}) => {
  const variantClass = variant === "secondary" ? "secondary" : "primary";
  const themeClass = theme === "teal" ? "teal" : "purple";
  const buttonClassname = `${styles.button} ${styles[variantClass]} ${styles[themeClass]}`;

  return (
    <button className={buttonClassname} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
