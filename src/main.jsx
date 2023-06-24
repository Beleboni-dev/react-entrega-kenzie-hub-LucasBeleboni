import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { UserProvider } from "./providers/UserContext.jsx";
import { theme } from "./styles/Theme.js";
import "react-toastify/dist/ReactToastify.css";
import { TechProvider } from "./providers/TechContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <UserProvider>
          <TechProvider>
            <App />
          </TechProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
