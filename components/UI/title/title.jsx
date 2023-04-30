import { forwardRef } from 'react';
import styles from "./title.module.scss";

const Title = forwardRef(({ children, variant = "h2", ...otherProps }, ref) => {
  const HeadingVariant = variant === "h1" ? "h1" : "h2";

  return (
    <HeadingVariant ref={ref} className={styles.title} {...otherProps}>
      {children}
    </HeadingVariant>
  );
})

Title.displayName = 'Title'

export default Title;
