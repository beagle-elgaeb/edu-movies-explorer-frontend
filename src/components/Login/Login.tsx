import { useState } from "react";
import InputAuth from "../InputAuth/InputAuth";
import Logo from "../Logo/Logo";
import {
  Button,
  ButtonAndText,
  Inputs,
  LinkRegister,
  LoginContainer,
  Text,
  Title,
} from "./Login.style";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function handleChangeEmail(evt: React.FormEvent<HTMLInputElement>) {
    setEmail(evt.currentTarget.value);
  }

  function handleChangePass(evt: React.FormEvent<HTMLInputElement>) {
    setPass(evt.currentTarget.value);
  }

  return (
    <LoginContainer>
      <div>
        <Logo />
        <Title>Рады видеть!</Title>
        <Inputs>
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
        <Button>Войти</Button>
        <Text>
          Ещё не зарегистрированы?
          <LinkRegister to="/signup">Регистрация</LinkRegister>
        </Text>
      </ButtonAndText>
    </LoginContainer>
  );
}

export default Login;
