import Button from "../button/button";
import usePortal from "@/hooks/usePortal";

import styles from "./auth-btns.module.scss";

const AuthBtns = ({ colors }) => {
  const Portal = usePortal("modal");

  console.log(Portal);

  return (
    <div className={styles.btnGroup}>
      {colors === "light" ? (
        <>
          <Button variant="secondary">Log In</Button>
          <Button variant="secondary" theme="teal">
            Registration
          </Button>
        </>
      ) : (
        <Portal>
          <Button>Log In</Button>
          <Button theme="teal">Registration</Button>
        </Portal>
      )}
    </div>
  );
};

export default AuthBtns;
