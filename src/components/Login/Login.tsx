import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import InputAuth from "../InputAuth/InputAuth";
import Logo from "../Logo/Logo";
import {
  Button,
  ButtonAndText,
  Error,
  ErrorContainer,
  FormWithoutButton,
  Inputs,
  LinkRegister,
  LoginContainer,
  Text,
  Title,
} from "./Login.style";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Некорректный e-mail")
        .required("Введите, пожалуйста, e-mail"),
      password: Yup.string()
        .min(8, "Пароль не должен быть короче 8 символов")
        .max(15, "Пароль не должен быть длиннее 15 символов")
        .required("Введите, пожалуйста, пароль"),
    }),
    onSubmit: () => {},
    validateOnBlur: true,
  });

  // Временно, для наблюдения всех сообщений об ошибке ------------------------
  // (нажатие клавиш 1, 2 и 3 включает и выключает ошибки) --------------------

  const [errors, setErrors] = useState({ 1: false, 2: false, 3: false });

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);

    function onKeydown({ key }: { key: string }) {
      if (key === "1" || key === "2" || key === "3") {
        setErrors((state) => ({ ...state, [key]: !state[key] }));
      }
    }

    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  // --------------------------------------------------------------------------

  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

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
      <FormWithoutButton>
        <Logo />
        <Title>Рады видеть!</Title>
        <Inputs>
          <InputAuth
            label="E-mail"
            type="email"
            {...formik.getFieldProps("email")}
            errorText={getError("email")}
          />
          <InputAuth
            label="Пароль"
            type="password"
            {...formik.getFieldProps("password")}
            errorText={getError("password")}
          />
        </Inputs>
      </FormWithoutButton>
      <ButtonAndText>
        <Button disabled={!formik.isValid}>Войти</Button>
        <Text>
          Ещё не зарегистрированы?
          <LinkRegister to="/signup">Регистрация</LinkRegister>
        </Text>
      </ButtonAndText>
    </LoginContainer>
  );
}

export default Login;
