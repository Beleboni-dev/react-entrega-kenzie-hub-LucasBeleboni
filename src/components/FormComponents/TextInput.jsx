import { useFormContext } from 'react-hook-form';
import { StyledFieldSet } from './FormStyles/StyledFieldSet';

export const TextInput = ({ label, placeholder, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <StyledFieldSet>
      <label htmlFor={name}>{label}</label>
      <input
        type='text'
        placeholder={placeholder}
        {...register(name)}
        id={name}
        {...rest}
      />
      {errors[name] && <span>{errors[name].message}</span>}
    </StyledFieldSet>
  );
};
