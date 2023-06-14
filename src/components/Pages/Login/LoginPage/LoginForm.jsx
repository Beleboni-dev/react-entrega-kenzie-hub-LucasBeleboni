import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { StyledForm } from "../../../../../styles/StyledForm";
import { HeadlineBold, Title1 } from "../../../../../styles/Typograph";
import { StyledButton } from "../LoginButtons/StyledButton";
import { Link, useNavigate } from "react-router-dom";
import { EmailInput } from "../../../FormComponents/EmailInput";
import { RegisterPassField } from "../../Register/RegisterInputs/RegisterPassField";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchemas } from "../../../../schemas/LoginSchemas";
import { api, endpoints } from "../../../../api/api";
import { UserContext } from "../../../../hooks/UserContext";
import { toast } from "react-toastify";

const LoginForm = () => {
  const methods = useForm({
    resolver: zodResolver(loginSchemas),
  });
  const { updateUser } = useContext(UserContext);
  const { handleSubmit } = methods;
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await api.post(endpoints.sessions, data);
      updateUser(response.data.user);
      const { user, token } = response.data;
      localStorage.setItem("@USERID", user.id);
      localStorage.setItem("@TOKEN", token);
      toast.success("Login realizado com sucesso!", {
        autoClose: 600,
      });
      setShowToast(true);
    } catch (err) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 600,
      });
    }
  };

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
        navigate("/dashboard");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showToast]);

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
        <StyledButton type="submit" primary={"primary"}>
          Entrar
        </StyledButton>
      </FormProvider>
      <div>
        <HeadlineBold>Ainda não possui uma conta?</HeadlineBold>
        <Link to="/register">
          <StyledButton type="button">Cadastre-se</StyledButton>
        </Link>
      </div>
    </StyledForm>
  );
};

export default LoginForm;
