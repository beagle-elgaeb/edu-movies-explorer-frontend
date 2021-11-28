import { useEffect, useState } from "react";
import InputAuth from "../InputAuth/InputAuth";
import Logo from "../Logo/Logo";
import {
  Button,
  ButtonAndText,
  Error,
  ErrorContainer,
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

  const [errorName, setErrorName] = useState(false);

  function showError() {
    if (name === "Евгения") {
      setErrorName(false);
    } else {
      setErrorName(true);
    }
  }

  // Временно, для наблюдения всех сообщений об ошибке ------------------------
  // (нажатие клавиш 1 и 2 включает и выключает ошибки) -----------------------

  const [errors, setErrors] = useState({ 1: false, 2: false });

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);

    function onKeydown({ key }: { key: string }) {
      console.log(key);

      if (key === "1" || key === "2") {
        setErrors((state) => ({ ...state, [key]: !state[key] }));
      }
    }

    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  // --------------------------------------------------------------------------

  return (
    <RegisterContainer>
      <ErrorContainer>
        <Error visible={errors[1]}>
          Пользователь с таким email уже существует.
        </Error>

        <Error visible={errors[2]}>
          При регистрации пользователя произошла ошибка.
        </Error>
      </ErrorContainer>
      <div>
        <Logo />
        <Title>Добро пожаловать!</Title>
        <Inputs>
          <InputAuth
            label="Имя"
            type="text"
            value={name}
            handleChange={handleChangeName}
            erroneous={errorName}
            showError={showError}
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
        <Button disabled={errorName}>Зарегистрироваться</Button>
        <Text>
          Уже зарегистрированы?<LinkLogin to="/signin">Войти</LinkLogin>
        </Text>
      </ButtonAndText>
    </RegisterContainer>
  );
}

export default Register;
