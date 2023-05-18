import { useState } from "react";

import Button from "../button/button";
import Modal from "../modal/modal";
import RegisterForm from "../register-form/register-form";
import LoginForm from "../login-form/login-form";
import MobileLoginIcon from "@/assets/images/icons/mobile-login.svg";

import styles from "./auth-btns.module.scss";
import SmallButton from "../small-button/small-button";

const AuthBtns = ({ colors }) => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const buttonVariant = colors === "light" ? "secondary" : "primary";

  const handleRedirectFromRegister = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleRedirectFromLogin = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        <Button
          handleClick={() => setIsLoginModalOpen(!isLoginModalOpen)}
          variant={buttonVariant}
        >
          Log In
        </Button>
        <Button
          handleClick={() => setIsRegisterModalOpen(!isRegisterModalOpen)}
          variant={buttonVariant}
          theme="teal"
        >
          Registration
        </Button>
      </div>
      <div className={styles.loginMobile}>
        <SmallButton
          onClick={() => setIsRegisterModalOpen(!isRegisterModalOpen)}
          theme="teal"
          aria-label="Log in"
        >
          <MobileLoginIcon />
        </SmallButton>
      </div>

      <Modal
        handleClose={() => setIsRegisterModalOpen(false)}
        isOpen={isRegisterModalOpen}
      >
        <RegisterForm
          handleClose={() => setIsRegisterModalOpen(false)}
          handleRedirect={handleRedirectFromRegister}
        />
      </Modal>

      <Modal
        handleClose={() => setIsLoginModalOpen(false)}
        isOpen={isLoginModalOpen}
      >
        <LoginForm
          handleRedirect={handleRedirectFromLogin}
          handleClose={() => setIsLoginModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default AuthBtns;
