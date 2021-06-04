import React from "react";

import "./contact.styles.css";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";

function Contact() {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [contactMessage, setContactMessage] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "fullName"
      ? setFullName(value)
      : name === "email"
      ? setEmail(value)
      : name === "contactMessage"
      ? setContactMessage(value)
      : setContactMessage(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-form">
      <div className="main-contact">
        <h2 className="title">We want to hear from you</h2>
        <hr className="title-underline"  />
        <form className="contact" onSubmit={handleSubmit}>
          <FormInput
            onChange={handleChange}
            type="text"
            name="fullName"
            value={fullName}
            label="Full Name"
            required
          ></FormInput>

          <FormInput
            onChange={handleChange}
            type="text"
            name="email"
            value={email}
            label="Email"
            required
          ></FormInput>

          <FormInput
            onChange={handleChange}
            type="text"
            name="phone"
            value={phone}
            label="Phone"
            required
          ></FormInput>
          <textarea
            className="text-box"
            placeholder="Message"
            maxLength="500"
            value={contactMessage}
            rows="5"
            cols="20"
          ></textarea>
          <br />
          <br />
          <CustomButton type="submit"> Send Now </CustomButton>
        </form>
      </div>
    </div>
  );
}

export default Contact;
