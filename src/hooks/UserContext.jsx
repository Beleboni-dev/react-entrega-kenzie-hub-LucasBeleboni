import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
const { Provider} = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <Provider value={{ user, updateUser }}>
      {children}
    </Provider>
  );
};

const useUserContext = () =>{
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
