import { useState } from "react";
import Link from "next/link";

import Logo from "../UI/logo/logo";
import LanguageSelector from "../UI/language-switcher/language-switcher";
import Button from "../UI/button/button";
import MobileMenuBtn from "../UI/mobile-menu-btn/mobile-menu-btn";
import MobileLoginBtn from "../UI/mobile-login-btn/mobile-login-btn";

import styles from "./header.module.scss";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const laguageList = ["Eng", "Rus"];

  const handleMobileMenuClick = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={styles.header}>
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
                <Link
                  href="#advertiser"
                  scroll={false}
                  className={styles.navLink}
                >
                  Advertiser
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  href="#webmaster"
                  scroll={false}
                  className={styles.navLink}
                >
                  Webmaster
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#formats" scroll={false} className={styles.navLink}>
                  Formats
                </Link>
              </li>
            </ul>

            <ul className={`${styles.navList} ${styles.colorLight}`}>
              <li className={styles.navItem}>
                <Link href="#faq" scroll={false} className={styles.navLink}>
                  FAQ
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#contacts" className={styles.navLink}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <ul className={`${styles.navList} ${styles.buttons}`}>
            <li className={styles.navItem}>
              <LanguageSelector languages={laguageList} />
            </li>
            <li className={styles.navItem}>
              <div className={styles.btnGroup}>
                <Button variant="secondary">Log In</Button>
                <Button variant="secondary" theme="teal">
                  Registration
                </Button>
              </div>
            </li>
          </ul>
        </nav>
        <MobileLoginBtn />
      </div>
    </header>
  );
};

export default Header;
