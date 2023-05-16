import Link from "next/link";
import styles from "./navlink.module.scss";

const NavLink = ({ children, href, light }) => {
  const linkClass = light
    ? `${styles.navLink} ${styles.colorLight}`
    : styles.navLink;

  return (
    <Link className={linkClass} href={`#${href}`} scroll={false}>
      {children}
    </Link>
  );
};

export default NavLink;
