import "./App.css";

import FirebaseProvider from "./context/firebaseContext";
import CheckIfUserIsLoggedIn from "./components/userManagement";

function App() {
  return (
    <FirebaseProvider>
      <CheckIfUserIsLoggedIn />
      <div className="App"></div>
    </FirebaseProvider>
  );
}

export default App;

// function FakeApp() {
//   return (
//     <div>
//       <Route />
//     </div>
//   );
// }
