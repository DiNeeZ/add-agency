import { useEffect } from "react";
import { motion } from "framer-motion";
import FocusTrap from "focus-trap-react";

import ReactPortal from "../react-portal/react-portal";

import styles from "./modal.module.scss";

const Modal = ({ children, isOpen, handleClose }) => {
  useEffect(() => {
    //close modal on escape key press
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    //disable scroll on modal load
    if (isOpen) {
      document.body.style.overflow = "hidden";
      console.log("hidden");

      return () => (document.body.style.overflow = "unset");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal">
      <FocusTrap>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ease: "linear", duration: 0.15 },
          }}
          className={styles.modal}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { ease: "linear", duration: 0.15 },
            }}
            className={styles.contentWrapper}
          >
            <div className={styles.content}>{children}</div>
          </motion.div>
        </motion.div>
      </FocusTrap>
    </ReactPortal>
  );
};
export default Modal;
