import { ChangeEventHandler } from "react";
import { Input, Label, InputProfileContainer } from "./InputProfile.style";

function InputProfile({
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
    <InputProfileContainer>
      <Label>{label}</Label>
      <Input value={value} type={type} onChange={handleChange} />
    </InputProfileContainer>
  );
}

export default InputProfile;
