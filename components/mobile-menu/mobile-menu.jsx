import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "../footer/footer";
import Title from "../UI/title/title";
import SmallButton from "../UI/small-button/small-button";
import NavLink from "../UI/navlink/navlink";
import AuthBtns from "../UI/auth-btns/auth-btns";
import CloseIcon from "@/assets/images/icons/close.svg";

import styles from "./mobile-menu.module.scss";

const MobileMenu = ({ isOpen, handleClose }) => {
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ x: "-100%" }}
          animate={{ x: 0, transition: { type: "tween" } }}
          exit={{ x: "-100%", transition: { type: "tween" } }}
          className={styles.mobileMenu}
        >
          <header className={styles.header}>
            <Title>Menu</Title>
            <SmallButton onClick={handleClose} aria-label="Close mobile menu">
              <CloseIcon />
            </SmallButton>
          </header>
          <nav className={styles.navigation}>
            <div className={styles.linksGroup}>
              <ul className={`${styles.navList} ${styles.buttons}`}>
                <li className={styles.navItem}>
                  <AuthBtns />
                </li>
              </ul>

              <ul className={styles.navList}>
                <li onClick={handleClose} className={styles.navItem}>
                  <NavLink href="advertiser">Advertiser</NavLink>
                </li>
                <li onClick={handleClose} className={styles.navItem}>
                  <NavLink href="webmaster">Webmaster</NavLink>
                </li>
                <li onClick={handleClose} className={styles.navItem}>
                  <NavLink href="formats">Formats</NavLink>
                </li>
                <li onClick={handleClose} className={styles.navItem}>
                  <NavLink href="faq">FAQ</NavLink>
                </li>
                <li onClick={handleClose} className={styles.navItem}>
                  <NavLink href="contacts">Contacts</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Footer />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
