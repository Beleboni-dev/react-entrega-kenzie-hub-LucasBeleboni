import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    grey4: "#121214",
    grey3: "#212529",
    grey2: "#343B41",
    grey1: "#868E96",
    grey0: "#F8F9FA",
    success: "#3FE864",
    negative: "#E83F5B",
    colorPrimary: "#FF577F",
    colorPrimaryFocus: "#FF427F",
    colorPrimaryNegative: "#59323F",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body {
    background-color: ${theme.colors.grey4};
  }
`;

