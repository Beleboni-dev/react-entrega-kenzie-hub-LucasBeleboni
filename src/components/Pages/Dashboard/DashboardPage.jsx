import React from "react";
import Template from "../../Template/Template";
import { StyledContainer } from "./DashStyles/StyledContainer";
import {  useUserContext } from "../../../hooks/UserContext";
import { HeadlineBold, Title1 } from "../../../../styles/StyledTypography";

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
    </Template>
  );
};

export default DashboardPage;
