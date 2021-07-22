import { useState, createContext, useContext } from "react";
import { userLogin } from "./utils/user.utils";
import { allMenuItems, deleteMenu, newMenu } from "./utils/menu.utils";

//Create context for the Api
export const RestApiContext = createContext();

export default function RestApiProvider({ children }) {
  const [user, setUser] = useState(null);
  const [menuList, setMenuList] = useState([]);

  async function login(emailAddress, password) {
    const returnedUser = await userLogin(emailAddress, password);
    const { firstName, lastName, email, token } = returnedUser;
    setUser({ firstName, lastName, email, token });
    console.log(user);
  }

  const allMenuList = async () => {
    const menuResult = await allMenuItems();
    setMenuList(menuResult);
    return menuResult;
  };

  const addNewMenu = async (itemName, itemDescription, itemPrice) => {
    const addedMenu = await newMenu(itemName, itemDescription, itemPrice);
    return addedMenu;
  };

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
      }}
    >
      {children}
    </RestApiContext.Provider>
  );
}

export const useRestApi = () => useContext(RestApiContext);
