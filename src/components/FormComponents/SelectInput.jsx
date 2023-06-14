import { useFormContext } from "react-hook-form";
import { StyledFieldSet } from "../../../styles/StyledFieldSet";
import { StyledDiv } from "../Pages/Register/stylesRegister/SelectArea";

export const SelectInput = ({ label, name, options }) => {
    const { register, formState: { errors }} = useFormContext();
  
    return (
      <StyledFieldSet>
        <label>{label}</label>
        <StyledDiv>
          <select {...register(name)}>
            <option value="">Selecione...</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </StyledDiv>
        {errors[name] && <span>{errors[name].message}</span>}
      </StyledFieldSet>
    );
  };