import { styled } from "styled-components";
import { theme } from "../../../../../Styles/GlobalStyles";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 369px;
  margin: 0 auto;
  background-color: ${theme.colors.grey3};
  margin-top: 35px;
  padding: 42px 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 4px;

  color: ${theme.colors.grey0};
  h2{
    text-align: center;
  }
  h3{
    color: ${theme.colors.grey1};
    text-align: center;
    margin-bottom: 22px;
  }
  
  fieldset{
    display: flex;
    flex-direction: column;
    border: none;
    gap: 22px;
  }
  div{
    position: relative;
  }
  input{
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0 16px;
    background-color: ${theme.colors.grey4};
    border: 1px solid ${theme.colors.grey4};
    outline: none;
    color: ${theme.colors.grey0};
  }
  input:hover,
  input:focus{
    border: 1px solid ${theme.colors.grey0};
  }
  
  
  `;
