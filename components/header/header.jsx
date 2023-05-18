import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Logo from "../UI/logo/logo";
import LanguageSelector from "../UI/language-switcher/language-switcher";
import MobileMenu from "../mobile-menu/mobile-menu";
import NavLink from "../UI/navlink/navlink";
import AuthBtns from "../UI/auth-btns/auth-btns";
import SmallButton from "../UI/small-button/small-button";
import MobileMenuIcon from "@/assets/images/icons/mobile-menu.svg";

import useMedia from "@/hooks/useMedia.js";

import styles from "./header.module.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const isSmallTablet = useMedia("(max-width: 768px)");
  const laguageList = ["Eng", "Rus"];

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const screenHeight = window.innerHeight;

    if (currentScrollPos > screenHeight / 2) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleMobileMenuClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header
      key={isFixed}
      initial={{ y: isFixed ? -100 : 0, opacity: isFixed ? 0 : 1 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
      className={isFixed ? `${styles.header} ${styles.fixed}` : styles.header}
    >
      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleClose={handleMobileMenuClick}
      />
      <div className={styles.container}>
        {isSmallTablet && (
          <SmallButton
            onClick={handleMobileMenuClick}
            aria-label="Open mobile menu"
          >
            <MobileMenuIcon />
          </SmallButton>
        )}
        <Logo />

        <nav className={styles.navigation}>
          <div className={styles.linksGroup}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <NavLink href="advertiser">Advertiser</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink href="webmaster">Webmaster</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink href="formats">Formats</NavLink>
              </li>
            </ul>

            <ul className={`${styles.navList} ${styles.colorLight}`}>
              <li className={styles.navItem}>
                <NavLink href="faq">FAQ</NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink href="contacts">Contacts</NavLink>
              </li>
            </ul>
          </div>

          <ul className={`${styles.navList} ${styles.buttons}`}>
            <li className={styles.navItem}>
              <LanguageSelector languages={laguageList} />
            </li>
            <li className={styles.navItem}>
              <AuthBtns colors={isFixed ? "" : "light"} />
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
