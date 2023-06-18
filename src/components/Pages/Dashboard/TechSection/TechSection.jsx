import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React, {  useState } from "react";
import { StyledPlusIcon } from "./TechStyles/StyledPlusButton";
import { StyledTechSection } from "./TechStyles/StyledTechSection";
import { StyledList } from "./TechStyles/StyledList";
import {  useUserContext } from "../../../../hooks/UserContext";
import { BackdropModal } from "./NewTechModal/BackdropModal";
import { Title1 } from "../../../../../styles/StyledTypography";

export const TechSection = () => {
  const { user } = useUserContext();
  const [techModal, setTechModal] = useState(false);

  const handleNewTech = () => {
    setTechModal(true);
  };

  return (
    <StyledTechSection>
      <div>
        <Title1>Tecnologias</Title1>
        <div onClick={handleNewTech}>
          <StyledPlusIcon icon={faPlus} />
        </div>
      </div>
      {
        techModal && (
          <BackdropModal closeModal={()=>setTechModal(false)} />
          
        )
      }
      <StyledList>
        {user.techs.length > 0 ? (
          user.techs.map((tech, index) => (
            <li key={index}>
              <h2>{tech.name}</h2>
              <span>{tech.status}</span>
            </li>
          ))
        ) : (
          <h2>Nenhuma tecnologia cadastrada</h2>
        )}
      </StyledList>
    </StyledTechSection>
  );
};
