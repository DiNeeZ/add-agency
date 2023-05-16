import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Footer from "../footer/footer";
import Title from "../UI/title/title";
import MobileMenuBtn from "../UI/mobile-menu-btn/mobile-menu-btn";
import NavLink from "../UI/navlink/navlink";
import AuthBtns from "../UI/auth-btns/auth-btns";

import styles from "./mobile-menu.module.scss";
import Button from "../UI/button/button";

const MobileMenu = ({ isOpen, handleClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.toggle("dis-scroll");
    }

    return () => document.body.classList.remove("dis-scroll");
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
            <MobileMenuBtn handleClick={handleClose} close />
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
