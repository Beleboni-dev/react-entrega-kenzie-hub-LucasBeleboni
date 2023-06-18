import React, { useContext } from "react";
import { StyledHeader } from "./HeaderStyles/StyledHeader";
import { StyledBtn } from "../../../styles/StyledBtn";
import { Link } from "react-router-dom";
import { useUserContext } from "../../hooks/UserContext";
import { StyledLink } from "./HeaderStyles/StyledLink";


const Header = ({ page }) => {
  const { updateUser } = useUserContext();
  
  const handleCleanSessions = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    updateUser(null);
  };

  return (
    <StyledHeader page={page}>
      <img src="/Logo.svg" alt="logo-kenziehub" />
      {page === "register" && (
          <StyledLink  to="/">Voltar</StyledLink>
      )}
      {page === "dashboard" && (
          <StyledLink
            to="/"
            onClick={handleCleanSessions}
          >
            Sair
          </StyledLink>
      )}
    </StyledHeader>
  );
};

export default Header;
