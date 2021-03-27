import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";

import { useFirebase } from "../../context/firebaseContext";

import "./sign-in.styles.css";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { auth, googleProvider } = useFirebase();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I have already an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <div>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="email"
            handleChange={handleChange}
            required
          />
        </div>
        <div>
          <FormInput
            name="password"
            type="password"
            value={password}
            label="password"
            handleChange={handleChange}
            required
          />
        </div>

        <CustomButton type="submit" value="Submit">
          Sign In
        </CustomButton>

        <CustomButton onClick={() => auth.signInWithPopup(googleProvider)}>
          Sign In With Google
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
