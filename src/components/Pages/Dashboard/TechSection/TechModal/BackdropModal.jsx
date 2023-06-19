import React from 'react';
import { StyledBackdrop } from './ModalStyles/StyledBackdrop';

export const BackdropModal = ({ closeModal }) => {
  return <StyledBackdrop onClick={closeModal} />;
};
