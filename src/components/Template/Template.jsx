import React from "react";
import Header from "../Header/Header";
import { StyledMain } from "./StyledMain";

const Template = ({ page, children }) => {
  return (
    <>
      <Header page={page} />
      <StyledMain page={page}>{children}</StyledMain>
    </>
  );
};
export default Template;
