import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../../../../FormComponents/TextInput";
import { SelectInput } from "../../../../FormComponents/SelectInput";
import { StyledButton } from "../../../../Buttons/StyledButton";
import { api, endpoints } from "../../../../../api/api";
import { useUserContext } from "../../../../../providers/UserContext";
import { toast } from "react-toastify";
import {
  Spinner,
  SpinnerContainer,
} from "../../../../../../styles/StyledSpinner";
import StyledTechForm from "../techModal/ModalStyles/StyledTechForm";

export const TechForm = ({ mode }) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const { updateUser, updateModalState, selectedTech, editModalState } =
    useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData) => {
    try {
      setIsLoading(true);
      const { status } = formData;
      if (mode === "edit") {
        await api.put(`/users/techs/${selectedTech.id}`, {
          status,
        });
        editModalState(false);
      } else {
        await api.post(endpoints.techs, formData);
      }
      const userData = await api.get(endpoints.profile);
      updateUser(userData.data);
      updateModalState(false);
      setIsLoading(false);
    } catch (err) {
      toast.error("Ops!... " + err.message, {
        autoClose: 500,
      });
      setIsLoading(false);
    }
  };

  const handleOnDelete = async () => {
    try {
      setIsLoading(true);
      await api.delete(`/users/techs/${selectedTech.id}`);
      const userData = await api.get(endpoints.profile);
      updateUser(userData.data);
      editModalState(false);
      setIsLoading(false);
    } catch (err) {
      toast.error("Ops!... " + err.message, {
        autoClose: 500,
      });
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <SpinnerContainer spinner={"true"}>
        <Spinner />
      </SpinnerContainer>
    );
  }

  return (
    <FormProvider {...methods}>
      <StyledTechForm onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label={mode === "edit" ? "Nome do projeto" : "Nome"}
          name={"title"}
          placeholder={
            mode === "edit"
              ? `${selectedTech.title}`
              : "Digite o nome da tecnologia"
          }
          disabled={mode === "edit"}
          required={mode === "edit" ? false : true}
        />
        <SelectInput
          label={mode === "edit" ? "Status" : "Selecionar o status"}
          name={"status"}
          options={["Iniciante", "Intermediário", "Avançado"]}
        />
        {mode === "edit" ? (
          <div>
            <StyledButton
              negative={"negative"}
              type="submit"
              width="65%"
              max="204px"
            >
              Salvar alterações
            </StyledButton>
            <StyledButton
              width="30%"
              max="98px"
              type="button"
              onClick={handleOnDelete}
            >
              Excluir
            </StyledButton>
          </div>
        ) : (
          <StyledButton type="submit" primary={"primary"} width="100%">
            Cadastrar Tecnologia
          </StyledButton>
        )}
      </StyledTechForm>
    </FormProvider>
  );
};
