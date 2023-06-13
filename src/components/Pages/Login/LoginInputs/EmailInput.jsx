import { zodResolver } from '@hookform/resolvers/zod';
import { useFormContext } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email({ message: 'Insira um email válido' }).nonempty({ message: 'O email é obrigatório' }),
});

const EmailInput = ({label,...rest}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <fieldset>
      <label htmlFor={label}>{label}</label>
      <input type="email" name={label} id={label} autoComplete="email" {...register('email', { resolver: zodResolver(schema) })} {...rest}/>
      {errors.email && <span>{errors.email.message}</span>}
    </fieldset>
  );
};

export default EmailInput;
