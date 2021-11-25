import styled from "@emotion/styled/macro";
import { useState } from "react";
import ProfileInput from "../ProfileInput/ProfileInput";
import { Greeting, Inputs, ProfileContainer } from "./Profile.style";

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

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  line-height: 16px;

  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
    margin: 0;
  }
`;

export const Edit = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 16px;
`;

export const Exit = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-weight: 500;
  color: #ee3465;
`;
