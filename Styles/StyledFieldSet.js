
import { styled } from "styled-components";
import { theme } from "./GlobalStyles";


export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  position: relative;

  label{
    font-size: 12.81px
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
select{
    width: 99%;
    cursor: pointer;
    color: ${theme.colors.grey0};
}


input{
    margin: 22px 0 9px;

}

  input:hover,
  input:focus{
    border: 1px solid ${theme.colors.grey0};
  }

  span {
    font-size: 12px;
    color: ${theme.colors.grey1};
  }

`;
