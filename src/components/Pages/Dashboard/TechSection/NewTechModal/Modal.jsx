import React from 'react';
import { StyledModal } from './ModalStyles/StyledModal';
import { Title3 } from '../../../../../../styles/StyledTypography';
import { useUserContext } from '../../../../../providers/UserContext';
import { useForm } from 'react-hook-form';
import { TechForm } from '../TechForm/TechForm';

export const Modal = () => {
  const { techModal, updateModalState } = useUserContext();
  const toggleModalState = () => {
    updateModalState(!techModal);
  };

  return (
    <StyledModal>
      <div>
        <Title3>Cadastrar tecnologia</Title3>
        <img src='/X.svg' alt='closeModal' onClick={toggleModalState} />
      </div>
      <TechForm />
    </StyledModal>
  );
};
