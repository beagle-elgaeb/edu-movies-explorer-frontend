import { useEffect, useState } from "react";
import InputAuth from "../InputAuth/InputAuth";
import Logo from "../Logo/Logo";
import {
  Button,
  ButtonAndText,
  Inputs,
  LinkRegister,
  LoginContainer,
  ErrorContainer,
  Error,
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

  // Временно, для наблюдения всех сообщений об ошибке ------------------------
  // (нажатие клавиш 1, 2 и 3 включает и выключает ошибки) --------------------

  const [errors, setErrors] = useState({ 1: false, 2: false, 3: false });

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);

    function onKeydown({ key }: { key: string }) {
      console.log(key);

      if (key === "1" || key === "2" || key === "3") {
        setErrors((state) => ({ ...state, [key]: !state[key] }));
      }
    }

    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  // --------------------------------------------------------------------------

  return (
    <LoginContainer>
      <ErrorContainer>
        <Error visible={errors[1]}>
          Вы ввели неправильный логин или пароль.
        </Error>

        <Error visible={errors[2]}>
          При авторизации произошла ошибка. Токен не передан или передан не в
          том формате.
        </Error>
        <Error visible={errors[3]}>
          При авторизации произошла ошибка. Переданный токен некорректен.
        </Error>
      </ErrorContainer>
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
