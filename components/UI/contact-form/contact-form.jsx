import { useState } from "react";
import Link from "next/link";

import Button from "../button/button";
import Input from "../input/input";
import Dropdown from "../dropdown/dropdown";
import { contactsInputOptions } from "@/data";

import styles from "./contact-form.module.scss";
import Textarea from "../textarea/textarea";

const defaultFormFields = {
  name: "",
  contact: "",
  method: "",
};

const initSelected = {
  type: "text",
  label: "Choose yours",
  placeholder: "",
};

const ContactForm = ({}) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [selected, setSelected] = useState(initSelected);
  const { name, contact } = formFields;

  const handleSelect = (option) => {
    const selectedOption = contactsInputOptions.find(
      (item) => item.label === option
    );
    setSelected(selectedOption);
    setFormFields({
      ...formFields,
      contact: "",
      method: selectedOption.label,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <form className={styles.contactForm}>
      {/* name input */}
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        handleChange={handleChange}
      />
      {/* contact method input */}
      <div className={styles.inputWrapper}>
        <Dropdown
          selected={selected.label}
          options={contactsInputOptions.map((option) => option.label)}
          handleSelect={handleSelect}
        />

        <Input
          type={selected.type}
          name={"contact"}
          placeholder={selected.placeholder}
          value={contact}
          disabled={initSelected.label === selected.label}
          handleChange={handleChange}
        />
      </div>
      <Textarea placeholder="Message" />

      <div className={styles.formFooter}>
        <Button
          theme="teal"
          disabled={!(formFields.name.length && formFields.contact.length)}
        >
          Submit
        </Button>
        <p className={styles.agreement}>
          By clicking the {`"Submit"`} button, I agree to{" "}
          <Link href="/" className={styles.agreementLink}>
            the&nbsp;processing&nbsp;of&nbsp;personal&nbsp;data
          </Link>{" "}
          and{" "}
          <Link href="/" className={styles.agreementLink}>
            the&nbsp;privacy&nbsp;policy
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
