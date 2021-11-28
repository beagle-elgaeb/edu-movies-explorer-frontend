import { ChangeEventHandler } from "react";
import { Input, Label, InputAuthContainer, Error } from "./InputAuth.style";

type PropsType = {
  label: string;
  type: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  erroneous?: boolean;
  showError?: () => void;
};

function InputAuth({
  label,
  type,
  value,
  handleChange,
  erroneous,
  showError,
}: PropsType) {
  return (
    <InputAuthContainer>
      <Label>{label}</Label>
      <Input
        value={value}
        type={type}
        placeholder={label}
        onChange={handleChange}
        erroneous={erroneous}
        onBlur={showError}
      />
      <Error erroneous={erroneous}>Что-то пошло не так...</Error>
    </InputAuthContainer>
  );
}

export default InputAuth;
