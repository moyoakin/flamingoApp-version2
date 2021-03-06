import "./App.css";
import { Route, Switch } from "react-router-dom";
import AuthenticatedHome from "./components/authenticated-home/authenticated.component";
import dotenv from "dotenv";

import RestApiProvider from "./context/restApiContext";
//import CheckIfUserIsLoggedIn from "./components/userManagement";

import SignInPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import SignUpPage from "./pages/sign-up-page/sign-up.component";
import Header from "./components/header/header-component";
import UnAuthenticatedHome from "./pages/onauthenticatedhome/unauthenticatedhome.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";
import MenuList from "./pages/menuList/menuList-component";
import MenuAdmin from "./pages/menu/menu.admin.component";

function App() {
  dotenv.config();
  return (
    <RestApiProvider>
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={AuthenticatedHome} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/" component={UnAuthenticatedHome} />
          <Route path="/menu" component={MenuList} />
          <Route path="/managemenu" component={MenuAdmin} />
        </Switch>
        <Footer twitter="twitter.svg" />
      </div>
    </RestApiProvider>
  );
}

export default App;
