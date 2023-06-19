import { styled } from "styled-components";
import { theme } from "../../../../../../../styles/Theme";

export const StyledTechForm = styled.form`
  width: 100%;
  max-width: 369px;
  margin-bottom: 32px;
  padding: 0 22px;

  div:nth-child(3) {
    display: flex;
    justify-content: space-between;
  }
  div:nth-child(2) {
    padding: 0;
    border: 1px solid ${theme.colors.grey2};
    background-color: ${theme.colors.grey2};
    margin-bottom: 20px;

    &:hover,
    &:focus {
      border: 1px solid ${theme.colors.grey0};
    }
  }

  label {
    color: ${theme.colors.grey0};
    margin-top: 22px;
  }
  input {
    background-color: ${theme.colors.grey2};
    border: 1px solid ${theme.colors.grey2};
  }
  select {
    background-color: ${theme.colors.grey2};
    border: none;
  }
`;
