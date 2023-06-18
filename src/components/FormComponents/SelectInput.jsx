import { useFormContext } from "react-hook-form";
import { StyledFieldSet } from "./FormStyles/StyledFieldSet";
import { StyledSelectWrapper } from "../Pages/Register/RegisterStyles/SelectArea";

export const SelectInput = ({ label, name, options }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <StyledFieldSet>
      <label>{label}</label>
      <StyledSelectWrapper>
        <select {...register(name)}>
          <option value="">Selecione...</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </StyledSelectWrapper>
      {errors[name] && <span>{errors[name].message}</span>}
    </StyledFieldSet>
  );
};
