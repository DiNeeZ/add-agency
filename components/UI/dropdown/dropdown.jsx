import { useState, useEffect, useRef } from "react";

import Chevron from "@/assets/images/icons/chevron.svg";

import styles from "./dropdown.module.scss";
import ChildrenBlur from "../children-blur/children-blur";

const Dropdown = ({ options, selected, handleSelect }) => {
  const [open, setOpen] = useState(false);
  const controlButtonRef = useRef(null);

  const closeDropdown = (event) => {
    event.preventDefault();

    if (
      !event.target.classList.contains(styles.dropdown) &&
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

  const handleMenuClick = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  const selectItem = (event) => {
    event.preventDefault();
    const selectedTextNode = event.target.childNodes[0].nodeValue;
    const selectedOptionIndex = options.findIndex(
      (option) => option === selectedTextNode
    );

    handleSelect(options[selectedOptionIndex]);
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
        onClick={handleMenuClick}
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
