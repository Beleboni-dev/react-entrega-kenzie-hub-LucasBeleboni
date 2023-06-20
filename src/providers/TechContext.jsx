import React, { createContext, useContext, useState } from 'react';

const TechContext = createContext();

const TechProvider = ({ children }) => {
  const [techModal, setTechModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedTech, setSelectedTech] = useState([]) 
  

  const updateModalState = (modalState) => {
    setTechModal(modalState);
  }

  const editModalState = (modalState) => {
    setEditModal(modalState);
  }
  return (
    <TechContext.Provider value={{techModal, updateModalState, editModal, editModalState, selectedTech, setSelectedTech}}>
      {children}
    </TechContext.Provider>
  );
};

const useTechContext = () =>{
  return useContext(TechContext);
}

export { TechProvider, useTechContext };
