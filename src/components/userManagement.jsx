import React from "react";

import { useFirebase } from "../context/firebaseContext";

export default function CheckIfUserIsLoggedIn() {
  const { user, loadingUser, firebaseApp, auth } = useFirebase();
  console.log(`User:${user}`, `Is loading User: ${loadingUser}`);

  return (
    <div>
      <button onClick={() => googleSignIn(firebaseApp, auth)}>
        Sign In (Google)
      </button>
      <button onClick={() => googleSignOut(auth)}>Sign Out</button>
    </div>
  );
}

export function useSignInWithEmailAndPassword(email, password) {
  const { auth } = useFirebase();
  auth
    ?.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(`Credential: ${userCredential.user}`);
    })
    .catch((error) => {
      console.log(`Error code: ${error.code}`);
      console.log(`Error message: ${error.message}`);
    });
}

export function googleSignIn(firebaseApp, auth) {
  // const { firebaseApp, auth } = useFirebase();

  if (firebaseApp) {
    var provider = new firebaseApp.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(`provider`, provider);
}

export function googleSignOut(auth) {
  // const { auth } = useFirebase();
  if (auth) {
    auth
      .signOut()
      .then(() => console.log("sign out successful"))
      .catch((error) => console.log("sing out error", error));
  }
}
