import { useState } from "react";
import Link from "next/link";

import Logo from "../UI/logo/logo";
import LanguageSelector from "../UI/language-switcher/language-switcher";
import Button from "../UI/button/button";
import MobileMenuBtn from "../UI/mobile-menu-btn/mobile-menu-btn";
import MobileLoginBtn from "../UI/mobile-login-btn/mobile-login-btn";
import MobileMenu from "../mobile-menu/mobile-menu";
import NavLink from "../UI/navlink/navlink";

import styles from "./header.module.scss";
import AuthBtns from "../UI/auth-btns/auth-btns";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const laguageList = ["Eng", "Rus"];

  const handleMobileMenuClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        handleClose={handleMobileMenuClick}
      />
      <div className={styles.container}>
        <MobileMenuBtn
          isOpen={isMobileMenuOpen}
          handleClick={handleMobileMenuClick}
        />

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
              <AuthBtns colors={"light"} />
            </li>
          </ul>
        </nav>
        <MobileLoginBtn />
      </div>
    </header>
  );
};

export default Header;
