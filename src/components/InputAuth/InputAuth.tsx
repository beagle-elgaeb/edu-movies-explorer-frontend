import { InputHTMLAttributes } from "react";
import { Error, Input, InputAuthContainer, Label } from "./InputAuth.style";

type PropsType = {
  label: string;
  errorText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function InputAuth({ label, errorText, ...rest }: PropsType) {
  return (
    <InputAuthContainer>
      <Label>{label}</Label>
      <Input placeholder={label} erroneous={!!errorText} {...rest} />
      <Error erroneous={!!errorText}>{errorText}</Error>
    </InputAuthContainer>
  );
}

export default InputAuth;
