import React from "react";
import Template from "../../../Template/Template";
import RegisterForm from "./RegisterForm";
import "react-toastify/dist/ReactToastify.css";
import { CustomToastContainer } from "../../../../../styles/StyledToasts";
const RegisterPage = () => {
  return (
    <Template page={"register"}>
      <CustomToastContainer />
      <RegisterForm />
    </Template>
  );
};

export default RegisterPage;
