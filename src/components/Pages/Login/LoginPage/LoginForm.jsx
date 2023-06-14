import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyledForm } from "../../../../../styles/StyledForm";
import { HeadlineBold, Title1 } from "../../../../../Styles/Typograph";
import { StyledButton } from "../LoginButtons/StyledButton";
import { Link } from "react-router-dom";
import { EmailInput } from "../../../FormComponents/EmailInput";
import { RegisterPassField } from "../../Register/RegisterInputs/RegisterPassField";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "../../../../schemas/LoginSchemas";

const LoginForm = () => {
  const methods = useForm({
    resolver: zodResolver(loginSchemas),
  });

  const {handleSubmit} = methods;

  const onSubmit = (data) => {
   console.log(data)
  };

  return (

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <FormProvider {...methods}>
      <Title1>Login</Title1>
      <EmailInput label={"E-mail"} name={"email"} />
      <RegisterPassField
          placeholder={"Digite sua senha"}
          label="Senha"
          name="password"
        />
      <StyledButton type="submit" primary={'primary'}>Entrar</StyledButton>
    </FormProvider>
    <div>
      <HeadlineBold>Ainda não possui uma conta?</HeadlineBold>
      <Link to='/register'><StyledButton type="button">Cadastre-se</StyledButton></Link>
    </div>
      </StyledForm>
  

  );
};

export default LoginForm;
