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
              <Link href="/" className={styles.navLink}>
                Рекламодателю
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Вебмастеру
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Форматы
              </Link>
            </li>
          </ul>

          <ul className={`${styles.navList} ${styles.colorLight}`}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Вебмастеру
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Форматы
              </Link>
            </li>
          </ul>

          <ul className={`${styles.navList} ${styles.buttons}`}>
            <li className={styles.navItem}>
              <LanguageSelector languages={laguageList} />
            </li>
            <li className={styles.navItem}>
              <div className={styles.btnGroup}>
                <Button variant="secondary">Войти</Button>
                <Button variant="secondary" theme="teal">
                  Регистрация
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
