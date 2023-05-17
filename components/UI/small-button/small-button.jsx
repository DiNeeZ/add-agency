import styles from "./small-button.module.scss";

const SmallButton = ({ children, theme, onClick, ...otherProps }) => {
  const buttonClass =
    theme === "teal" ? `${styles.button} ${styles.teal}` : styles.button;

  return (
    <button className={buttonClass} onClick={onClick} {...otherProps}>
      {children}
    </button>
  );
};

export default SmallButton;
