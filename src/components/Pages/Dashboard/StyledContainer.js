import { styled } from "styled-components";
import { theme } from "../../../../styles/GlobalStyles";

export const StyledContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.grey3};
  border-top: 1px solid ${theme.colors.grey3};
  margin-top: 22px;
  div:nth-child(1) {
    height: 118px;
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    color: ${theme.colors.grey0};
  }
  h3 {
    color: ${theme.colors.grey1};
  }
`;
