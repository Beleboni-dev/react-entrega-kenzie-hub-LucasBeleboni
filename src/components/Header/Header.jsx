import React, { useContext } from "react";
import { StyledHeader } from "./HeaderStyles/StyledHeader";
import { useUserContext } from "../../providers/UserContext";
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
