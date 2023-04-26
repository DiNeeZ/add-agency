import { useState } from "react";
import Chevron from "@/assets/images/icons/chevron-small.svg";
import styles from "./dropdown.module.scss";

const Dropdown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.button} onClick={() => setOpen(!open)}>
        {selected}
        <Chevron
          className={open ? `${styles.icon} ${styles.opened}` : styles.icon}
        />
      </button>
      {open && (
        <ul className={styles.list}>
          {options
            .filter((option) => option !== selected)
            .map((option, index) => (
              <li className={styles.item} key={`${option}-${index}`}>
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
