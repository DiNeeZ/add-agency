import { forwardRef } from 'react';
import styles from "./subtitle.module.scss";

const Subtitle = forwardRef(({ children }, ref) => {
  return <p ref={ref} className={styles.subtitle}>{children}</p>;
})

Subtitle.displayName = 'Subtitle'

export default Subtitle;
