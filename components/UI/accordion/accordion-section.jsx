import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChevronIcon from "@/assets/images/icons/chevron.svg";

import styles from "./accordion.module.scss";

const AccordionSection = ({ section, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.section}>
      <button onClick={toggle} className={styles.button}>
        <h3 className={styles.title}>{section.title}</h3>
        <ChevronIcon className={styles.icon} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ height: 125, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles.text}
          >
            {section.text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionSection;
