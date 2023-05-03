import styles from "./small-card.module.scss";

const SmallCard = ({ title, subtitle, icon }) => {
  const Icon = icon;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default SmallCard;
