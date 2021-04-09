import { useState, createContext, useContext, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

/**
 * useContext ->
 * create context - React.createContext()
 * create function contextProvider => <Context.Provider
 * Wrap everywhere in contextProvider
 *
 *
 * useContext
 *
 */

//client credentials
const firebaseConfig = {
  apiKey: "AIzaSyCbJQEZIl2JPaqSw6mUgVvYY_lHR2Uxt-o",
  authDomain: "asyncapp-7fca5.firebaseapp.com",
  projectId: "asyncapp-7fca5",
  storageBucket: "asyncapp-7fca5.appspot.com",
  messagingSenderId: "73388957213",
  appId: "1:73388957213:web:9025121b3f086243eaf0f4",
  measurementId: "G-NEJG6STRNN"
};
//

//creation
export const FirebaseContext = createContext();

//provider function
export default function FirebaseProvider({ children }) {
  //whole app
  const [firebaseApp, setFirebaseApp] = useState();
  //the DB
  const [db, setDb] = useState();
  //authentication
  const [auth, setAuth] = useState();
  //load current user
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [googleProvider, setGoogleProvider] = useState(null);

  useEffect(() => {
    //check if app is already running
    if (!firebaseApp && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    //check if analytics is up
    if ("measurementId" in firebaseConfig) {
      firebase.analytics();
    }
    setFirebaseApp(firebase);
    setDb(firebase.firestore());
    setAuth(firebase.auth());

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    setGoogleProvider(googleProvider);

    const unSubscribeFromAuth = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        try {
          if (user) {
            const { uid, displayName, email } = user;
            setUser({ uid, displayName, email });
            setLoadingUser(true);
            createUserProfileDocument(user);
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error(error);
        }
      });
    return unSubscribeFromAuth;
  }, [firebaseApp]);

  const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = db.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
     additionalData = additionalData ? {displayName, ...additionalData} : {displayName}

      try {
        await userRef.set({
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("Error creating USer", error.message);
      }
    }
    return userRef;
  };

  return (
    <FirebaseContext.Provider
      value={{
        firebaseApp,
        db,
        auth,
        user,
        setUser,
        loadingUser,
        googleProvider,
        createUserProfileDocument
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);
