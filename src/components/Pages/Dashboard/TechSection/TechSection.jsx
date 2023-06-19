import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { StyledPlusIcon } from './TechStyles/StyledPlusButton';
import { StyledTechSection } from './TechStyles/StyledTechSection';
import { StyledList } from './TechStyles/StyledList';
import { useUserContext } from '../../../../providers/UserContext';
import { HeadlineBold, Title1 } from '../../../../../styles/StyledTypography';
import { BackdropModal } from './TechModal/BackdropModal';
import { Modal } from './TechModal/Modal';


export const TechSection = () => {
  const { user, techModal, updateModalState, editModalState, editModal, setSelectedTech} = useUserContext();

  const toggleTechModal = () => {
    updateModalState(!techModal);
  };
  const toggleEditModal = (tech) => {
    editModalState(!editModal);
    setSelectedTech(tech)
  }

  return (
    <StyledTechSection>
      <div>
        <Title1>Tecnologias</Title1>
        <div onClick={toggleTechModal}>
          <StyledPlusIcon icon={faPlus} />
        </div>
      </div>
      {techModal && (
        <>
          <BackdropModal closeModal={toggleTechModal} />
           <Modal />
        </>
      )}
      {
        editModal && (
          <>
          <BackdropModal closeModal={toggleEditModal} />
           <Modal mode={'edit'}/>
        </>
        )
      }
      {user.techs.length > 0 ? (
        <StyledList>
          {user.techs.map((tech, index) => (
            <li key={index} onClick={() => toggleEditModal(tech)}>
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
