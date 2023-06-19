import styled from "styled-components";
import { theme } from "../../../../../../../styles/Theme";

export const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 369px;
  background-color: ${theme.colors.grey3};
  div:nth-child(1) {
    height: 50px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    background-color: ${theme.colors.grey2};

    h3 {
      color: ${theme.colors.grey0};
    }

    img {
      cursor: pointer;
    }
  }
`;
