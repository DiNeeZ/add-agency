import { useState, useEffect, useRef } from "react";

import ChildrenBlur from "../children-blur/children-blur";
import Chevron from "@/assets/images/icons/chevron-small.svg";

import styles from "./language-switcher.module.scss";

const LanguageSelector = ({ languages }) => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  const controlButtonRef = useRef(null);

  const closeDropdown = (event) => {
    if (
      !event.target.classList.contains(styles.selector) &&
      !event.target.classList.contains(styles.button)
    ) {
      setOpen(false);
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
    const selectedOptionIndex = languages.findIndex(
      (option) => option === selectedTextNode
    );

    setSelected(languages[selectedOptionIndex]);
    controlButtonRef.current.focus();
    setOpen(!open);
  };

  return (
    <ChildrenBlur
      className={open ? `${styles.selector} ${styles.opened}` : styles.selector}
      onBlur={() => setOpen(false)}
    >
      <button
        ref={controlButtonRef}
        className={styles.button}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="language-menu"
        id="language-control-btn"
      >
        {selected}
        <Chevron className={styles.icon} />
      </button>
      {open && (
        <ul
          className={styles.dropdown}
          role="menu"
          id="language-menu"
          aria-labelledby="language-control-btn"
        >
          {languages
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

export default LanguageSelector;
