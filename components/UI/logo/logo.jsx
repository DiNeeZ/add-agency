import Link from "next/link";

import LogoIcon from "@/assets/images/icons/logo.svg";
import LogoText from "@/assets/images/icons/logo-text.svg";
import LogoIconWhite from "@/assets/images/icons/logo-white.svg";
import LogoTextWhite from "@/assets/images/icons/logo-white-text.svg";

import styles from "./logo.module.scss";

const Logo = ({ color }) => {
  if (color === "white")
    return (
      <Link href="/" className={styles.logo}>
        <LogoIconWhite />
        <LogoTextWhite />
      </Link>
    );

  return (
    <Link href="/" className={styles.logo}>
      <div>
        <LogoIcon />
      </div>
      <LogoText />
    </Link>
  );
};

export default Logo;
