import { forwardRef } from 'react'
import styles from "./button.module.scss";

const Button = forwardRef(({ children, handleClick, variant, theme }, ref) => {
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
    <button ref={ref} className={getButtonClassName()} onClick={handleClick}>
      {children}
    </button>
  );
})

Button.displayName = 'Button'

export default Button;
