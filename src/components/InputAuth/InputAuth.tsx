import { ChangeEventHandler } from "react";
import { Input, Label, InputAuthContainer } from "./InputAuth.style";

function InputAuth({
  label,
  type,
  value,
  handleChange,
}: {
  label: string;
  type: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <InputAuthContainer>
      <Label>{label}</Label>
      <Input value={value} type={type} onChange={handleChange} />
    </InputAuthContainer>
  );
}

export default InputAuth;
