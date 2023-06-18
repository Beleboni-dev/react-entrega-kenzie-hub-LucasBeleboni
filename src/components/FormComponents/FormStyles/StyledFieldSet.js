import { styled } from "styled-components";
import { theme } from "../../../../styles/Theme";


export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  position: relative;

  label {
    font-size: 12.81px;
    margin-bottom: 16px;
  }

  input,
  select {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0 16px;
    background-color: ${theme.colors.grey4};
    border: 1px solid ${theme.colors.grey4};
    outline: none;
    color: ${theme.colors.grey0};
  }
  select {
    width: 99%;
    cursor: pointer;
    color: ${theme.colors.grey0};
  }

  input:hover,
  input:focus {
    border: 1px solid ${theme.colors.grey0};
  }

  span {
    font-size: 12px;
    color: ${theme.colors.grey1};
    margin-top: 9px;
  }
`;
