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
        <Link to="/">
          <StyledAnchor variant={"headerBtn"}>Voltar</StyledAnchor>
        </Link>
      )}
      {page === "dashboard" && (
        <Link to="/">
          <StyledAnchor
            variant={"headerBtn"}
            onClick={handleCleanSessions}
          >
            Sair
          </StyledAnchor>
        </Link>
      )}
    </StyledHeader>
  );
};

export default Header;
