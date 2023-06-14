import React from "react";
import Template from "../../../Template/Template";
import LoginForm from "./LoginForm";
import { CustomToastContainer } from "../../../../../styles/StyledToasts";

const LoginPage = () => {
  return (
    <Template page={"login"}>
      <CustomToastContainer />
      <LoginForm />
    </Template>
  );
};

export default LoginPage;
