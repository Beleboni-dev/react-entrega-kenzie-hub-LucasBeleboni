import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { StyledPlusIcon } from './TechStyles/StyledPlusButton';
import { StyledTechSection } from './TechStyles/StyledTechSection';
import { StyledList } from './TechStyles/StyledList';
import { useUserContext } from '../../../../providers/UserContext';
import { BackdropModal } from './NewTechModal/BackdropModal';
import { HeadlineBold, Title1 } from '../../../../../styles/StyledTypography';
import { Modal } from './NewTechModal/Modal';

export const TechSection = () => {
  const { user, techModal, updateModalState } = useUserContext();

  const toggleModalState = () => {
    updateModalState(!techModal);
  };

  return (
    <StyledTechSection>
      <div>
        <Title1>Tecnologias</Title1>
        <div onClick={toggleModalState}>
          <StyledPlusIcon icon={faPlus} />
        </div>
      </div>
      {techModal && (
        <>
          <BackdropModal closeModal={toggleModalState} />
          <Modal />
        </>
      )}
      {user.techs.length > 0 ? (
        <StyledList>
          {user.techs.map((tech, index) => (
            <li key={index}>
              <h2>{tech.title}</h2>
              <span>{tech.status}</span>
            </li>
          ))}
        </StyledList>
      ) : (
        <HeadlineBold>Nenhuma tecnologia cadastrada</HeadlineBold>
      )}
    </StyledTechSection>
  );
};
