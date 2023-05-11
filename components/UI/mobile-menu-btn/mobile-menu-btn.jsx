import MobileMenuIcon from "@/assets/images/icons/mobile-menu.svg";

import styles from "./mobile-menu-btn.module.scss";

const MobileMenuBtn = ({ isOpen, handleClick }) => {
  return (
    <button
      className={styles.btn}
      aria-label={`${isOpen ? "Close" : "Open"} mobile menu`}
      onClick={handleClick}
    >
      <MobileMenuIcon className={styles.icon} />
    </button>
  );
};

export default MobileMenuBtn;
