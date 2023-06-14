
import { useFormContext } from "react-hook-form";
import { StyledFieldSet } from "../../../styles/StyledFieldSet";

export const EmailInput = ({ label, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <StyledFieldSet>
      <label htmlFor={label}>{label}</label>
      <input
        type='email'
        autoComplete='email'
        id={label}
        placeholder='Digite seu email'
        {...register(name)}
        {...rest}
      />
      {errors.email && <span>{errors.email.message}</span>}
    </StyledFieldSet>
  );
};


