import MobileLoginIcon from "@/assets/images/icons/mobile-login.svg";

import styles from "./mobile-login-btn.module.scss";

const MobileLoginBtn = () => {
  return (
    <button className={styles.btn} aria-label="Open login menu">
      <MobileLoginIcon className={styles.icon} />
    </button>
  );
};

export default MobileLoginBtn;
