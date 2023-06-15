import React, { useContext } from "react";
import { StyledHeader } from "./StyledHeader";
import { StyledAnchor } from "../../../styles/StyledAnchors";
import { Link } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";

const Header = ({ page }) => {
  const { updateUser } = useContext(UserContext);
  
  const handleCleanSessions = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    updateUser(null);
  };

  return (
    <StyledHeader page={page}>
      <img src="/Logo.svg" alt="logo-kenziehub" />
      {page === "register" && (
          <StyledAnchor  to="/" variant={"headerBtn"}>Voltar</StyledAnchor>
      )}
      {page === "dashboard" && (
          <StyledAnchor
            to="/"
            variant={"headerBtn"}
            onClick={handleCleanSessions}
          >
            Sair
          </StyledAnchor>
      )}
    </StyledHeader>
  );
};

export default Header;
