import { forwardRef } from 'react';
import styles from "./paragraph.module.scss";

const Paragraph = forwardRef(({ children }, ref) => {
  return <p ref={ref} className={styles.paragraph}>{children}</p>;
})

Paragraph.displayName = 'Paragraph'

export default Paragraph;
