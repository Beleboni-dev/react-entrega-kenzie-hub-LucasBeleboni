import React from "react";
import PageTemplate from "../../../Template/Template";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <PageTemplate page={"register"}>
      <RegisterForm />
    </PageTemplate>
  );
};

export default RegisterPage;
