import Link from "next/link";

import Logo from "../UI/logo/logo";
import LanguageSelector from "../UI/language-switcher/language-switcher";
import Button from "../UI/button/button";

import styles from "./header.module.scss";

const Header = () => {
  const laguageList = ["Eng", "Rus"];
  // const contactMethods = [
  //   "Phone",
  //   "Telegram",
  //   "WhatsApp",
  //   "Skype",
  //   "E-mail",
  //   "other",
  // ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="#advantages"
                scroll={false}
                className={styles.navLink}
              >
                To the Advertiser
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                To the Webmaster
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
              <Link href="/" className={styles.navLink}>
                FAQ
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Contacts
              </Link>
            </li>
          </ul>

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
      </div>
    </header>
  );
};

export default Header;
