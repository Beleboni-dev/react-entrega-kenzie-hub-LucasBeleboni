import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();
const { Provider} = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techModal, setTechModal] = useState(false);

  const updateUser = (userData) => {
    setUser(userData);
  };
  const updateModalState = (modalState) => {
    setTechModal(modalState);
  }

  return (
    <Provider value={{ user, updateUser, techModal, updateModalState }}>
      {children}
    </Provider>
  );
};

const useUserContext = () =>{
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
