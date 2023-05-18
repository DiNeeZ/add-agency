import { useState } from "react";
import Link from "next/link";

import Title from "../title/title";
import Button from "../button/button";
import Input from "../input/input";

import styles from "./register-form.module.scss";
import SmallButton from "../small-button/small-button";
import CloseIcon from "@/assets/images/icons/close.svg";

const defaultFormFields = {
  email: "",
  password: "",
};

const RegisterForm = ({ handleClose, handleRedirect }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [activeTab, setActiveTab] = useState("advertiser");
  const { email, password } = formFields;

  const handleTabClick = (event) =>
    setActiveTab(event.target.dataset.buttonName);

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
        theme={activeTab === "advertiser" ? "purple" : "teal"}
        style={{ position: "absolute", top: "1.25rem", right: "1.25rem" }}
        aria-label="Close modal"
        onClick={handleClose}
      >
        <CloseIcon />
      </SmallButton>
      <Title
        style={{ transition: "color 0.3s ease-in-out" }}
        size="md"
        theme={activeTab === "advertiser" ? "purple" : "teal"}
      >
        Register as
      </Title>
      <p className={styles.redirect}>
        Already have an account?{" "}
        <button
          style={{ cursor: "pointer" }}
          href="/"
          className={
            activeTab === "advertiser" ? styles.purpleLink : styles.tealLink
          }
          onClick={handleRedirect}
        >
          Log In
        </button>
      </p>
      <div className={styles.buttons}>
        <button
          data-button-name="advertiser"
          className={`
            ${styles.tab} 
            ${styles.advertiser}
            ${activeTab === "advertiser" ? styles.active : ""}`}
          onClick={handleTabClick}
        >
          Advertiser
        </button>
        <button
          data-button-name="webmaster"
          className={`
            ${styles.tab} 
            ${styles.webmaster} 
            ${activeTab === "webmaster" ? styles.active : ""}`}
          onClick={handleTabClick}
        >
          Webmaster
        </button>
      </div>

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
        <Button theme={activeTab === "advertiser" ? "purple" : "teal"}>
          Register
        </Button>
        <div className={styles.policy}>
          By clicking &quot;register&quot; I agree to{" "}
          <Link
            href="/"
            target={"_blank"}
            className={
              activeTab === "advertiser" ? styles.purpleLink : styles.tealLink
            }
          >
            the processing of personal data
          </Link>{" "}
          and the{" "}
          <Link
            href="/"
            target={"_blank"}
            className={
              activeTab === "advertiser" ? styles.purpleLink : styles.tealLink
            }
          >
            privacy policy
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
