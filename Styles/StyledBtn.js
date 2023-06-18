import styled, { css } from "styled-components";
import { theme } from "./Theme";


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

export const StyledBtn = styled.button`
  border-radius: 4px;
  height: 48px;
  padding: 0px 16px;
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.grey0};
  cursor: pointer;

  ${(props) => props.variant === "registerBtn" && registerBtnStyles};
`;
