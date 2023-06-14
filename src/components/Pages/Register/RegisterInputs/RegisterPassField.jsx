import { useFormContext } from "react-hook-form";
import { StyledFieldSet } from "../../../../../styles/StyledFieldSet";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { EyeIcons } from "../../../../../styles/EyeIcon";

export const RegisterPassField = ({ label, name, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <StyledFieldSet>
      <label htmlFor={name}>{label}</label>
      <div style={{ display: "inline-block", position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          {...register(name)}
          {...rest}
        />
        <EyeIcons
          icon={showPassword ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
        />
      </div>
      {errors[name] && <span>{errors[name].message}</span>}
    </StyledFieldSet>
  );
};
