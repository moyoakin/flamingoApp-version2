import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthenticatedHome from "./components/authenticated-home/authenticated.component";
//import SignIn from './components/sign-in'

import FirebaseProvider from "./context/firebaseContext";
//import CheckIfUserIsLoggedIn from "./components/userManagement";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <FirebaseProvider>
      <div>
        <Switch>
          <Route exact path="/" component={SignInAndSignUpPage} />
          <Route path="/userhome" component={AuthenticatedHome} />
        </Switch>
      </div>
    </FirebaseProvider>
  );
}

export default App;
