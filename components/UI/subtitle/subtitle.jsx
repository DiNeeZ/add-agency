import { forwardRef } from "react";
import styles from "./subtitle.module.scss";

const Subtitle = forwardRef(({ children, size = "sm" }, ref) => {
  return (
    <p
      ref={ref}
      className={
        size === "l" ? `${styles.subtitle} ${styles.xl}` : styles.subtitle
      }
    >
      {children}
    </p>
  );
});

Subtitle.displayName = "Subtitle";

export default Subtitle;
