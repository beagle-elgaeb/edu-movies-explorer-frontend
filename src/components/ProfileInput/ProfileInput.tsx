import { ChangeEventHandler } from "react";
import { Input, Label, ProfileInputContainer } from "./ProfileInput.style";

function ProfileInput({
  label,
  value,
  handleChange,
}: {
  label: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <ProfileInputContainer>
      <Label>{label}</Label>
      <Input value={value} onChange={handleChange} />
    </ProfileInputContainer>
  );
}

export default ProfileInput;
