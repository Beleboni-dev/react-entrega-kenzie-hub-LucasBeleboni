import { useFormContext } from "react-hook-form";
import { StyledFieldSet } from "../../../../../styles/StyledFieldSet";

export const RegisterPassField = ({ label, name , ...rest}) => {
  const { register, formState: { errors } } = useFormContext();
  return (
    <StyledFieldSet>
      <label htmlFor={name}>{label}</label>
      <input
        type="password"
        id={name}
        {...register(name)}
        {...rest}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </StyledFieldSet>
  );
};
