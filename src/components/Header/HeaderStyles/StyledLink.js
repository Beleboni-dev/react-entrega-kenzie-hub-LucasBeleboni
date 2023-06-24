import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";

export const StyledLink = styled(Link)`
  height: ${(props) => (props.login ? "48px" : "40px")};
  width: ${(props) => (props.login ? "100%" : "67px")};
  background-color: ${(props) =>
    props.login ? `${theme.colors.grey2}` : `${theme.colors.grey3}`};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;
  outline: none;
  border-radius: 4px;
  padding: 0px 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.grey0};
  cursor: pointer;
`;
