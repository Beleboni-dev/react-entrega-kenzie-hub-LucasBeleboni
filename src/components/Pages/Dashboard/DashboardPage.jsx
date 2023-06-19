import React from "react";
import Template from "../../Template/Template";
import { StyledContainer } from "./DashStyles/StyledContainer";
import { useUserContext } from "../../../providers/UserContext";
import { HeadlineBold, Title1 } from "../../../../styles/StyledTypography";
import { TechSection } from "./TechSection/TechSection";

const DashboardPage = () => {
  const { user } = useUserContext();

  return (
    <Template page={"dashboard"}>
      <StyledContainer>
        <div>
          {user && <Title1>Olá, {user.name}</Title1>}
          {user && <HeadlineBold>{user.course_module}</HeadlineBold>}
        </div>
      </StyledContainer>
      <TechSection />
    </Template>
  );
};

export default DashboardPage;
