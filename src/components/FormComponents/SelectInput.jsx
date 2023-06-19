import { useFormContext } from "react-hook-form";
import { StyledFieldSet } from "./FormStyles/StyledFieldSet";
import { StyledSelectWrapper } from "../../../styles/SelectArea";

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
