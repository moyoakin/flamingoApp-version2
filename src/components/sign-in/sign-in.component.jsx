import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cutom-button.component";
//import AuthenticatedHome from "./components/authenticated.component"

import { useFirebase } from "../../context/firebaseContext";

import "./sign-in.styles.css";

const SignIn = ({ history }) => {
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { auth, googleProvider } = useFirebase();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const rawResponse = await fetch("https://flamingo-restapi-199004.herokuapp.com/api/users/login",{
        method: "Post",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          email:email,
          password:password
        })
      });
      const user = await rawResponse.json()
      console.log(user)
      if (user !== null) {
        history.replace("/userhome");
      }

      setEmail("");
      setPassword("");
      setDisplayName("");
    } catch (error) {
      console.log(error);
    }
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

        <div className="buttons">
          <CustomButton type="submit" value="Submit">
            Sign In
          </CustomButton>

          <CustomButton
            onClick={() => auth.signInWithPopup(googleProvider)}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
      <div className="small-gap">
        <input type="submit" onClick={() => auth.signOut()} value="Sign Out" />
      </div>
    </div>
  );
};

export default SignIn;
