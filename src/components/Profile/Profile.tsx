import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Buttons,
  Edit,
  Error,
  Exit,
  Greeting,
  Input,
  InputContainer,
  Inputs,
  Label,
  ProfileContainer,
  Save,
} from "./Profile.style";

function Profile() {
  let navigate = useNavigate();

  const [name, setName] = useState("Евгения");
  const [email, setEmail] = useState("be@ya.ru");
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState(false);

  function handleChangeName(evt: React.FormEvent<HTMLInputElement>) {
    setName(evt.currentTarget.value);
  }

  function handleChangeEmail(evt: React.FormEvent<HTMLInputElement>) {
    setEmail(evt.currentTarget.value);
  }

  function handleChangeError() {
    setError(!error);
  }

  function handleChanged() {
    setChanged(true);
  }

  return (
    <ProfileContainer>
      <div>
        <Greeting>Привет, Евгения!</Greeting>
        <Inputs>
          <InputContainer>
            <Label>Имя</Label>
            <Input
              value={name}
              type="text"
              placeholder="Имя"
              onChange={handleChangeName}
            />
          </InputContainer>
          <InputContainer>
            <Label>E-mail</Label>
            <Input
              value={email}
              type="email"
              placeholder="E-mail"
              onChange={handleChangeEmail}
            />
          </InputContainer>
        </Inputs>
      </div>

      {changed ? (
        <Buttons>
          {error ? (
            <>
              <Error visible={false}>
                Пользователь с таким email уже существует.
              </Error>
              <Error visible={true}>
                При обновлении профиля произошла ошибка.
              </Error>
            </>
          ) : (
            <></>
          )}
          <Save type="button" onClick={handleChangeError} erroneous={error}>
            Сохранить
          </Save>
        </Buttons>
      ) : (
        <Buttons>
          <Edit onClick={handleChanged}>Редактировать</Edit>
          <Exit onClick={() => navigate("/signin")}>Выйти из аккаунта</Exit>
        </Buttons>
      )}
    </ProfileContainer>
  );
}

export default Profile;
