import React from "react";
import EmailInput from "../LoginInputs/EmailInput";
import { FormProvider, useForm } from "react-hook-form";

import PasswordField from "../LoginInputs/PasswordInput";
import { StyledForm } from "../StylesLogin/StyledForm";
import { HeadlineBold, Title1 } from "../../../../../Styles/Typograph";
import { StyledButton } from "../LoginButtons/StyledButton";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
    <FormProvider {...methods}>
      <Title1>Login</Title1>
        <EmailInput label={'email-input'} placeholder={'Digite seu e-mail'}  />
        <PasswordField name="password" label="Senha" placeholder={'Digite sua senha'}  />
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
