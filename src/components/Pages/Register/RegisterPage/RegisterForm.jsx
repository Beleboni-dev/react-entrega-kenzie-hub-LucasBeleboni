import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { HeadlineBold, Title1 } from "../../../../../styles/StyledTypography";
import { TextInput } from "../../../FormComponents/TextInput";
import { SelectInput } from "../../../FormComponents/SelectInput";
import { EmailInput } from "../../../FormComponents/EmailInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../../../schemas/FormSchemas";
import { api, endpoints } from "../../../../api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { StyledBtn } from "../../../../../styles/StyledBtn";
import { StyledForm } from "../../../FormComponents/FormStyles/StyledForm";
import { RegisterPassField } from "../../../FormComponents/RegisterPassField";

const RegisterForm = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data)
    try {
      await api.post(endpoints.users, data);
      toast.success("Conta criada com sucesso", {
        autoClose: 700,
      });
      setShowToast(true);
    } catch {
      toast.error("Ops! Algo deu errado", {
        autoClose: 700,
      });
    }
  };

  useEffect(() => {
    if (showToast) {
      const timeout = setTimeout(() => {
        setShowToast(false);
        navigate("/");
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showToast]);

  return (
      <FormProvider {...methods}>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title1>Crie sua conta</Title1>
        <HeadlineBold>Rápido e gratis, vamos nessa </HeadlineBold>
        <TextInput
          label={"Nome"}
          placeholder={"Digite seu nome"}
          name={"name"}
        />
        <EmailInput label={"E-mail"} name={"email"} />
        <RegisterPassField
          placeholder={"Digite sua senha"}
          label="Senha"
          name="password"
        />
        <RegisterPassField
          placeholder={"Confirme sua senha"}
          label="Confirme senha"
          name="passwordConfirm"
        />
        <TextInput label={"Bio"} placeholder={"Fale sobre você"} name={"bio"} />
        <TextInput
          label={"Contato"}
          placeholder={"Opção de contato"}
          name={"contact"}
        />
        <SelectInput
          label="Selecionar módulo"
          name="course_module"
          options={[
            "Primeiro módulo (Introdução ao Frontend)",
            "Segundo módulo (Frontend Avançado)",
            "Terceiro módulo (Introdução ao Backend)",
            "Quarto módulo (Backend Avançado)",
          ]}
        />
        {isValid ? (
          <StyledBtn variant={"registerBtn"} valid={"true"} type="submit">
            Cadastrar
          </StyledBtn>
        ) : (
          <StyledBtn variant={"registerBtn"} type="submit">
            Cadastrar
          </StyledBtn>
        )}
    </StyledForm>
      </FormProvider>
  );
};

export default RegisterForm;
