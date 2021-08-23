import { useState, createContext, useContext } from "react";
import { userLogin } from "./utils/user.utils";
import { getAllMenuItems, deleteMenu, newMenu } from "./utils/menu.utils";

//Create context for the Api
export const RestApiContext = createContext();

export default function RestApiProvider({ children }) {
  const [user, setUser] = useState(null);
  const [menuList, setMenuList] = useState([]);
  const [err, setErr] = useState(null);

  async function login(emailAddress, password) {
    const returnedUser = await userLogin(emailAddress, password);
    const { firstName, lastName, email, token } = returnedUser;
    setUser({ firstName, lastName, email, token });
    console.log(user);
  }

  const allMenuList = async () => {
    resetErrorState();
    const response = await getAllMenuItems();

    if (response.status === 200) {
      const result = await response.json();
      setMenuList(result);
    } else {
      setErrorState(response);
    }
  };

  const addNewMenu = async (itemName, itemDescription, itemPrice) => {
    const addedMenu = await newMenu(itemName, itemDescription, itemPrice);
    return addedMenu;
  };

  function setErrorState(response) {
    const status = response.status;
    const message = response.caughtError ? response.message : response.json();
    setErr({ status, message });
  }

  function resetErrorState() {
    setErr(null);
  }

  return (
    <RestApiContext.Provider
      value={{
        user,
        login,
        allMenuList,
        deleteMenu,
        menuList,
        newMenu,
        addNewMenu,
        setMenuList,
        err,
      }}
    >
      {children}
    </RestApiContext.Provider>
  );
}

export const useRestApi = () => useContext(RestApiContext);
