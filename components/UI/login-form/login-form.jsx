import { useState } from "react";

import Button from "../button/button";
import Input from "../input/input";
import SmallButton from "../small-button/small-button";
import Title from "../title/title";
import CloseIcon from "@/assets/images/icons/close.svg";

import styles from "./login-form.module.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = ({ handleClose, handleRedirect }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className={styles.wrapper}>
      <SmallButton
        style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}
        aria-label="Close modal"
        onClick={handleClose}
      >
        <CloseIcon />
      </SmallButton>
      <Title size="md">Log In</Title>
      <p className={styles.redirect}>
        Don&#39;t have an account?{" "}
        <button style={{ cursor: "pointer" }} onClick={handleRedirect}>
          Get Started!
        </button>
      </p>
      <form className={styles.form}>
        {/* email input */}
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          handleChange={handleChange}
        />
        {/* password input */}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          handleChange={handleChange}
        />
      </form>
      <div className={styles.bottom}>
        <Button>Log In</Button>
      </div>
    </div>
  );
};

export default LoginForm;
