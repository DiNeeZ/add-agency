import { forwardRef } from "react";
import styles from "./title.module.scss";

const Title = forwardRef(
  ({ children, variant = "h2", size, theme, ...otherProps }, ref) => {
    const HeadingVariant = variant === "h1" ? "h1" : "h2";

    const getTitleClassName = () => {
      if ([size, theme].every(Boolean))
        return `${styles.title} ${styles[size]} ${styles[theme]}`;

      if ([size, theme].some(Boolean)) {
        return size === undefined
          ? `${styles.title} ${styles[theme]}`
          : `${styles.title} ${styles[size]}`;
      }

      return `${styles.subtitle}`;
    };

    return (
      <HeadingVariant ref={ref} className={getTitleClassName()} {...otherProps}>
        {children}
      </HeadingVariant>
    );
  }
);

Title.displayName = "Title";

export default Title;
