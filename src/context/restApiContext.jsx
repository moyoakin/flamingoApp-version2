import { useState, createContext, useContext } from "react";

//Api Url

const APIURL = "https://flamingo-restapi-199004.herokuapp.com/api";

//Create context for the Api
export const RestApiContext = createContext();

export default function RestApiProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (emailAddress, password) => {
    try {
      const rawResponse = await fetch(`${APIURL}/users/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: emailAddress,
          password: password,
        }),
      });
      const returnedUser = await rawResponse.json();
      console.log(returnedUser);
      const { firstName, lastName, email, token } = returnedUser;
      setUser({ firstName, lastName, email, token });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  

  return (
    <RestApiContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </RestApiContext.Provider>
  );
}

export const useRestApi = () => useContext(RestApiContext);
