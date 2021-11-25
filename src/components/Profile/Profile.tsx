import { useState } from "react";
import ProfileInput from "../ProfileInput/ProfileInput";
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
          <ProfileInput
            label="Имя"
            value={name}
            handleChange={handleChangeName}
          />
          <ProfileInput
            label="E-mail"
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
