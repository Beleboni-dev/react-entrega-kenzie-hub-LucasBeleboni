import { ToastContainer } from "react-toastify";
import { styled } from "styled-components";
import { theme } from "./Theme";

export const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast--success {
    color: ${theme.colors.grey0};
    background-color: ${theme.colors.grey2};
    font-size: 14px;
    font-weight: 700;
    .Toastify__toast-body {
      svg {
        fill: ${theme.colors.success};
      }
    }
    .Toastify__progress-bar--success {
      background-color: ${theme.colors.success};
    }
  }

`;
