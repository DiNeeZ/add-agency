import Link from "next/link";

import LogoIcon from "@/assets/images/icons/logo.svg";
import LogoText from "@/assets/images/icons/logo-text.svg";

import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <LogoIcon />
      <LogoText />
    </Link>
  );
};

export default Logo;
