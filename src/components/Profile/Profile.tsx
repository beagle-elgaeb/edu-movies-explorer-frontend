import { useState } from "react";
import {
  Buttons,
  Edit,
  Exit,
  Greeting,
  Input,
  InputContainer,
  Inputs,
  Label,
  ProfileContainer,
} from "./Profile.style";

function Profile() {
  const [name, setName] = useState("Евгения");
  const [email, setEmail] = useState("be@ya.ru");

  function handleChangeName(evt: React.FormEvent<HTMLInputElement>) {
    setName(evt.currentTarget.value);
  }

  function handleChangeEmail(evt: React.FormEvent<HTMLInputElement>) {
    setEmail(evt.currentTarget.value);
  }

  return (
    <ProfileContainer>
      <div>
        <Greeting>Привет, Евгения!</Greeting>
        <Inputs>
          <InputContainer>
            <Label>Имя</Label>
            <Input value={name} type="text" onChange={handleChangeName} />
          </InputContainer>
          <InputContainer>
            <Label>E-mail</Label>
            <Input value={email} type="email" onChange={handleChangeEmail} />
          </InputContainer>
        </Inputs>
      </div>
      <Buttons>
        <Edit>Редактировать</Edit>
        <Exit>Выйти из аккаунта</Exit>
      </Buttons>
    </ProfileContainer>
  );
}

export default Profile;
