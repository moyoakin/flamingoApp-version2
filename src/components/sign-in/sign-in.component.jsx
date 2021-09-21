import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";
import AuthenticatedHome from "../authenticated-home/authenticated.component.jsx";
import { Link } from "react-router-dom";

import { useRestApi } from "../../context/restApiContext";

import "./sign-in.styles.css";

const SignIn = ({ history }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { user, login } = useRestApi();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(email, password);

    console.log(user);
    if (user !== null) {
      history.push("/home");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>Sign in to your account</h2>
      <span>Don't have an account </span> <Link> Create an account </Link>
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

        <div className="buttons">
          <CustomButton type="submit" value="Submit">
            Sign In
          </CustomButton>

          <CustomButton isGoogleSignIn>Google Sign in</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
