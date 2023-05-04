import { forwardRef } from "react";
import styles from "./subtitle.module.scss";

const Subtitle = forwardRef(({ children, size, theme }, ref) => {
  const getSubtitleClassName = () => {
    if ([size, theme].every(Boolean))
      return `${styles.subtitle} ${styles[size]} ${styles[theme]}`;

    if ([size, theme].some(Boolean)) {
      return size === undefined
        ? `${styles.subtitle} ${styles[theme]}`
        : `${styles.subtitle} ${styles[size]}`;
    }

    return `${styles.subtitle}`;
  };

  return (
    <p ref={ref} className={getSubtitleClassName()}>
      {children}
    </p>
  );
});

Subtitle.displayName = "Subtitle";

export default Subtitle;
