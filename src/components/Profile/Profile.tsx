import { useState } from "react";
import InputProfile from "../InputProfile/InputProfile";
import {
  Buttons,
  Edit,
  Exit,
  Greeting,
  Inputs,
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
          <InputProfile
            label="Имя"
            type="text"
            value={name}
            handleChange={handleChangeName}
          />
          <InputProfile
            label="E-mail"
            type="email"
            value={email}
            handleChange={handleChangeEmail}
          />
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
