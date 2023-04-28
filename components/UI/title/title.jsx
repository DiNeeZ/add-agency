import styles from "./title.module.scss";

const Title = ({ children, variant = "h2", ...otherProps }) => {
  const HeadingVariant = variant === "h1" ? "h1" : "h2";

  return (
    <HeadingVariant className={styles.title} {...otherProps}>
      {children}
    </HeadingVariant>
  );
};

export default Title;
