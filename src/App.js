import "./App.css";

import FirebaseProvider from "./context/firebaseContext";
//import CheckIfUserIsLoggedIn from "./components/userManagement";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <FirebaseProvider>
      <div className="App">
        <SignInAndSignUpPage />
      </div>
    </FirebaseProvider>
  );
}

export default App;
