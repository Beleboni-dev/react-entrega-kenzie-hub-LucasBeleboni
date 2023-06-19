import React from "react";
import { StyledModal } from "./ModalStyles/StyledModal";
import { Title3 } from "../../../../../../styles/StyledTypography";
import { useUserContext } from "../../../../../providers/UserContext";
import { TechForm } from "../TechForm/TechForm";

export const Modal = ({ mode }) => {
  const { techModal, updateModalState, editModalState, editModal } =
    useUserContext();

  const toggleTechModal = () => {
    updateModalState(!techModal);
  };
  const toggleEditModal = () => {
    editModalState(!editModal);
  };
  return (
    <StyledModal>
      <div>
        <Title3>
          {mode === "edit" ? "Tecnologia Detalhes" : "Cadastrar tecnologia"}
        </Title3>
        <img
          src="/close-btn.png"
          alt="closeModal"
          onClick={mode === "edit" ? toggleEditModal : toggleTechModal}
        />
      </div>
      <TechForm mode={mode === "edit" ? "edit" : undefined} />
    </StyledModal>
  );
};
