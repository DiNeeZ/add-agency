import Link from "next/link";

import Logo from "../UI/logo/logo";
import Telegram from "@/assets/images/icons/telegram.svg";
import Mail from "@/assets/images/icons/mail.svg";
import Skype from "@/assets/images/icons/skype.svg";
import LinkedIn from "@/assets/images/icons/linkedin.svg";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.navigation}>
            <h3 className={styles.title}>Navigation</h3>
            <ul className={styles.navLinks}>
              <li>
                <Link
                  className={styles.navLink}
                  href="#advertiser"
                  scroll={false}
                >
                  To the Advertiser
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navLink}
                  href="#webmaster"
                  scroll={false}
                >
                  To the Webmaster
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href="#formats" scroll={false}>
                  Formats
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} href="#faq" scroll={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className={styles.navLink}
                  href="#contacts"
                  scroll={false}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles.title}>Contacts</h3>
            <ul className={styles.contactList}>
              <li className={styles.contact}>
                <Link
                  target="_blank"
                  href="https://web.telegram.org/"
                  className={styles.contactLink}
                >
                  <Telegram className={styles.icon} />
                  <span className={styles.contactLinkText}>@telegram</span>
                </Link>
              </li>
              <li className={styles.contact}>
                <Link
                  target="_blank"
                  href="https://gmail.com/"
                  className={styles.contactLink}
                >
                  <Mail className={styles.icon} />
                  <span className={styles.contactLinkText}>
                    support@marketbyte.com
                  </span>
                </Link>
              </li>
              <li className={styles.contact}>
                <Link
                  target="_blank"
                  href="https://www.skype.com/"
                  className={styles.contactLink}
                >
                  <Skype className={styles.icon} />
                  <span className={styles.contactLinkText}>
                    live:11111111111111abc
                  </span>
                </Link>
              </li>
              <li className={styles.contact}>
                <Link
                  target="_blank"
                  href="https://linkedin.com/"
                  className={styles.contactLink}
                >
                  <LinkedIn className={styles.icon} />
                  <span className={styles.contactLinkText}>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.logo}>
            <Logo color="white" />
            <span className={styles.year}>2023</span>
          </div>
          <ul className={styles.terms}>
            <li className={styles.term}>
              <Link href="/" className={styles.termLink}>
                Cookies Policy
              </Link>
            </li>
            <li className={styles.term}>
              <Link href="/" className={styles.termLink}>
                Terms
              </Link>
            </li>
            <li className={styles.term}>
              <Link href="/" className={styles.termLink}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
