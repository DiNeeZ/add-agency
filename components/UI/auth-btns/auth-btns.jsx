import Button from "../button/button";

import styles from "./auth-btns.module.scss";

const AuthBtns = ({ colors }) => {
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
        <>
          <Button>Log In</Button>
          <Button theme="teal">Registration</Button>
        </>
      )}
    </div>
  );
};

export default AuthBtns;
