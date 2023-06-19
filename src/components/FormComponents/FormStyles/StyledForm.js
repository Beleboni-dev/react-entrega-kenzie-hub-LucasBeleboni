import { styled } from "styled-components";
import { theme } from "../../../../styles/Theme";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 369px;
  margin: 0 auto;
  background-color: ${theme.colors.grey3};
  margin-top: 35px;
  padding: 32px 22px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 4px;
  margin-bottom: 10%;
  color: ${theme.colors.grey0};
  h2 {
    text-align: center;
  }
  h3 {
    color: ${theme.colors.grey1};
    text-align: center;
    margin-bottom: 22px;
  }
  
 @media(max-width: 768px){
  
 }
`;
