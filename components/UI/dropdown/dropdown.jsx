import { useState, useEffect, useRef } from "react";

import Chevron from "@/assets/images/icons/chevron.svg";

import styles from "./dropdown.module.scss";
import ChildrenBlur from "../children-blur/children-blur";

const Dropdown = ({ options, label }) => {
  const [selected, setSelected] = useState(label);
  const [open, setOpen] = useState(false);
  const controlButtonRef = useRef(null);

  const closeDropdown = (event) => {
    if (
      !event.target.classList.contains(styles.dropdown) &&
      !event.target.classList.contains(styles.button)
    ) {
      setOpen(false);
      console.log("Close");
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", closeDropdown);
    }

    if (!open) return;

    return () => document.removeEventListener("click", closeDropdown);
  }, [open]);

  const selectItem = (event) => {
    const selectedTextNode = event.target.childNodes[0].nodeValue;
    const selectedOptionIndex = options.findIndex(
      (option) => option === selectedTextNode
    );

    setSelected(options[selectedOptionIndex]);
    controlButtonRef.current.focus();
    setOpen(!open);
  };

  return (
    <ChildrenBlur
      className={open ? `${styles.dropdown} ${styles.opened}` : styles.dropdown}
      onBlur={() => setOpen(false)}
    >
      <button
        ref={controlButtonRef}
        className={styles.button}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="dropwown-menu"
      >
        {selected}
        <Chevron className={styles.icon} />
      </button>
      {open && (
        <ul className={styles.list} role="menu" id="dropwown-menu">
          {options
            .filter((option) => option !== selected)
            .map((option, index) => (
              <li className={styles.item} key={`${option}-${index}`}>
                <button onClick={selectItem} className={styles.itemBtn}>
                  {option}
                </button>
              </li>
            ))}
        </ul>
      )}
    </ChildrenBlur>
  );
};

export default Dropdown;
