import styled, { css } from "styled-components";
import { theme } from "../../../../../styles/GlobalStyles";

const headerBtnStyles = css`
  height: 40px;
  width: 67px;
  background-color: ${theme.colors.grey3};
  border: none;
`;
const registerBtnStyles = css`
  height: 48px;
  width: 100%;
  background-color: ${(props) => props.valid === 'true' ? `${theme.colors.colorPrimary}`: `${theme.colors.colorPrimaryNegative}`};
  border: none;

  &:hover{
    background-color: ${(props) => props.valid === 'true'? `${theme.colors.colorPrimaryFocus}`: `${theme.colors.colorPrimaryNegative}`};
    transition: 0.3s;
  }


`;

export const StyledRegisterBtn = styled.button`
  border-radius: 4px;
  padding: 0px 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.grey0};
  cursor: pointer;

  ${(props) => props.variant === "headerBtn" && headerBtnStyles};
  ${(props) => props.variant === "registerBtn" && registerBtnStyles};
`;
