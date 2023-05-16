import MobileMenuIcon from "@/assets/images/icons/mobile-menu.svg";
import MobileMenuIconClose from "@/assets/images/icons/close.svg";

import styles from "./mobile-menu-btn.module.scss";

const MobileMenuBtn = ({ isOpen, handleClick, close }) => {
  return (
    <button
      className={styles.btn}
      aria-label={`${isOpen ? "Close" : "Open"} mobile menu`}
      onClick={handleClick}
    >
      {close ? (
        <MobileMenuIconClose className={styles.icon} />
      ) : (
        <MobileMenuIcon className={styles.icon} />
      )}
    </button>
  );
};

export default MobileMenuBtn;
