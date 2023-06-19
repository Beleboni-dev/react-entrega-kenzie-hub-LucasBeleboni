  import React, { useState } from "react";
  import { FormProvider, useForm } from "react-hook-form";
  import { TextInput } from "../../../../FormComponents/TextInput";
  import { StyledTechForm } from "../NewTechModal/ModalStyles/StyledTechForm";
  import { SelectInput } from "../../../../FormComponents/SelectInput";
  import { StyledButton } from "../../../../Buttons/StyledButton";
  import { api, endpoints } from "../../../../../api/api";
  import { useUserContext } from "../../../../../providers/UserContext";
import { Spinner, SpinnerContainer } from "../../../../../../styles/StyledSpinner";

  export const TechForm = () => {
    const methods = useForm();
    const { handleSubmit } = methods;
    const {updateUser, updateModalState} = useUserContext()
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (formData) => {
      try {
        setIsLoading(true);
        await api.post(endpoints.techs, formData);
        const userData = await api.get(endpoints.profile);
        updateUser(userData.data)
        updateModalState(false)
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    if(isLoading){
      return <SpinnerContainer techSpinner>
        <Spinner />
      </SpinnerContainer>
    }

    return (
    
      <FormProvider {...methods}>
        <StyledTechForm onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label={"Nome"}
            name={"title"}
            placeholder={"Digite o nome da tecnologia"}
          />
          <SelectInput
            label={"Selecionar o status"}
            name={"status"}
            options={["Iniciante", "Intermediário", "Avançado"]}
          />
          <StyledButton type="submit" primary={"primary"}>
            Cadastrar Tecnologia
          </StyledButton>
        </StyledTechForm>
      </FormProvider>
    );
  };
