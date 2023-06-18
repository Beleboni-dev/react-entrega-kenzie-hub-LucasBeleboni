import { styled } from "styled-components";
import { theme } from "../../../../../../styles/Theme";

export const StyledTechSection = styled.section`
  max-width: 768px;
  margin: 0 auto;
  margin-top: 11px;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 21px;
  }


  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    padding: 11px;
    background-color: ${theme.colors.grey3};
    cursor: pointer;
  }
  h2{
    color: ${theme.colors.grey0}
  }

  @media (max-width: 768px) {
    padding: 0 5%;
    font-size: 12px;
  }
`;
