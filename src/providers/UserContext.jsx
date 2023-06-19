import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();
const { Provider} = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techModal, setTechModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState([]) 
  
  const updateUser = (userData) => {
    setUser(userData);
  };
  const updateModalState = (modalState) => {
    setTechModal(modalState);
  }

  const editModalState = (modalState) => {
    setEditModal(modalState);
  }
  return (
    <Provider value={{ user, updateUser, techModal, updateModalState, editModal, editModalState, selectedTech, setSelectedTech}}>
      {children}
    </Provider>
  );
};

const useUserContext = () =>{
  return useContext(UserContext);
}

export { UserProvider, useUserContext };
