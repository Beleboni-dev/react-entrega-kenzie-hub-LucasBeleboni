import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { EyeIcons } from "../StylesLogin/EyeIcon";

const PasswordField = ({ name, label, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const schema = z
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "A senha deve conter letras, números e pelo menos um caractere especial."
    );

  const passwordFieldProps = register(name, {
    required: "Campo obrigatório.",
    resolver: zodResolver(schema),
  });

  return (
    <fieldset>
      <label htmlFor={name}>{label}</label>
      <div>
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        id={name}
        autoComplete="current-password"
        {...passwordFieldProps}
        {...rest}
      />
        {showPassword ? (
          <EyeIcons icon={faEye} onClick={toggleShowPassword} />
        ) : (
          <EyeIcons icon={faEyeSlash} onClick={toggleShowPassword} />
        )}
      </div>
      {errors[name] && <span>{errors[name].message}</span>}
    </fieldset>
  );
};

export default PasswordField;
