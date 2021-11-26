import { useState } from "react";
import InputAuth from "../InputAuth/InputAuth";
import Logo from "../Logo/Logo";
import {
  Button,
  ButtonAndText,
  Inputs,
  LinkLogin,
  RegisterContainer,
  Text,
  Title,
} from "./Register.style";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleChangeName(evt: React.FormEvent<HTMLInputElement>) {
    setName(evt.currentTarget.value);
  }

  function handleChangeEmail(evt: React.FormEvent<HTMLInputElement>) {
    setEmail(evt.currentTarget.value);
  }

  function handleChangePass(evt: React.FormEvent<HTMLInputElement>) {
    setPass(evt.currentTarget.value);
  }

  return (
    <RegisterContainer>
      <div>
        <Logo />
        <Title>Добро пожаловать!</Title>
        <Inputs>
          <InputAuth
            label="Имя"
            type="text"
            value={name}
            handleChange={handleChangeName}
          />
          <InputAuth
            label="E-mail"
            type="email"
            value={email}
            handleChange={handleChangeEmail}
          />
          <InputAuth
            label="Пароль"
            type="password"
            value={pass}
            handleChange={handleChangePass}
          />
        </Inputs>
      </div>
      <ButtonAndText>
        <Button>Зарегистрироваться</Button>
        <Text>
          Уже зарегистрированы?<LinkLogin to="/signin">Войти</LinkLogin>
        </Text>
      </ButtonAndText>
    </RegisterContainer>
  );
}

export default Register;
