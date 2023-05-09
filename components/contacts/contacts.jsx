import Link from "next/link";

import ContactForm from "../UI/contact-form/contact-form";
import Telegram from "@/assets/images/icons/telegram.svg";
import Mail from "@/assets/images/icons/mail.svg";
import Skype from "@/assets/images/icons/skype.svg";
import LinkedIn from "@/assets/images/icons/linkedin.svg";

import styles from "./contacts.module.scss";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <h2 className={styles.hiddenTitle}>Contacts</h2>
        <div className={styles.linksBlock}>
          <div className={styles.shaped}>
            <h3 className={styles.linksTitle}>To contact us</h3>
            <ul className={styles.linksList}>
              <li className={styles.link}>
                <Link
                  target="_blank"
                  href="https://web.telegram.org/"
                  className={styles.contactLink}
                >
                  <Telegram className={styles.icon} />
                  <span className={styles.contactLinkText}>@telegram</span>
                </Link>
              </li>
              <li className={styles.link}>
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
              <li className={styles.link}>
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
              <li className={styles.link}>
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
          <p className={styles.additional}>
            Our team is always happy to help and answer all your questions
          </p>
        </div>
        <div className={styles.formBlock}>
          <div className={styles.formHeading}>
            <h3 className={styles.formTitle}>Leave a request</h3>
            <p className={styles.formSubtitle}>and we will get back to you</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
