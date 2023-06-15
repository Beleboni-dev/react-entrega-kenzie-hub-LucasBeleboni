import styled, { css } from "styled-components";
import { theme } from "./GlobalStyles";

const headerBtnStyles = css`
  height: 40px;
  width: 67px;
  background-color: ${theme.colors.grey3};


`;
const registerBtnStyles = css`
  height: 48px;
  width: 100%;
  background-color: ${(props) =>
    props.valid === "true"
      ? `${theme.colors.colorPrimary}`
      : `${theme.colors.colorPrimaryNegative}`};
  border: none;

  &:hover {
    background-color: ${(props) =>
      props.valid === "true"
        ? `${theme.colors.colorPrimaryFocus}`
        : `${theme.colors.colorPrimaryNegative}`};
    transition: 0.3s;
  }
`;

export const StyledAnchor = styled.a`
  border-radius: 4px;
  height: 48px;
  padding: 0px 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.grey0};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  text-decoration: none;
  outline: none;
  -webkit-text-decoration: none;
  ${(props) => props.variant === "headerBtn" && headerBtnStyles};
  ${(props) => props.variant === "registerBtn" && registerBtnStyles};
`;
