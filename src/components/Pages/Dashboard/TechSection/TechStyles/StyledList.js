import { styled } from "styled-components";
import { theme } from "../../../../../../styles/Theme";

export const StyledList = styled.ul`
  width: 100%;
  max-width: 768px;
  margin: 0 auto 50px auto; 
  padding: 22px 26px 24px 23px;
  list-style: none;
  background-color: ${theme.colors.grey3};

  li {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 22px;
    justify-content: space-between;
    background-color: ${theme.colors.grey4};
    margin-top: 16px;
    height: 49px;
    border-radius: 4px;
    cursor: pointer;
    h3 {
      color: ${theme.colors.grey0};
      font-size: 14px;
      font-weight: 700;
      line-height: 22px;
    }
    span{
color: ${theme.colors.grey1};
      font-size: 12px;
font-weight: 400;

    }
  }
`;
