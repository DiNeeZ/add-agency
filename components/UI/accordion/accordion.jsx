import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ChevronIcon from "@/assets/images/icons/chevron.svg";
import styles from "./accordion.module.scss";

const AccordionSection = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const btnId = `btn-${section.id}`;
  const textId = `text-${section.id}`;

  return (
    <>
      <button
        id={btnId}
        aria-controls={textId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.button}
      >
        <h3 className={styles.title}>{section.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={styles.iconWrapper}
        >
          <ChevronIcon className={styles.icon} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            id={textId}
            aria-labelledby={btnId}
            initial={{ opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={styles.text}
          >
            <div className={styles.textInner}>{section.answer}</div>
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
};

const Accordion = ({ list }) => {
  return (
    <ul className={styles.accordion}>
      {list.map((item, index) => {
        return (
          <li key={item.id} className={styles.item}>
            <AccordionSection section={item} open={index === 0} />
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
