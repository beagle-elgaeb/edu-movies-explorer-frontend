import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authorize } from "../../utils/MainApi";
import InputAuth from "../InputAuth/InputAuth";
import Logo from "../Logo/Logo";
import {
  Button,
  ButtonAndText,
  Error,
  FormWithoutButton,
  Inputs,
  LinkRegister,
  LoginContainer,
  Text,
  Title,
} from "./Login.style";

function Login({
  loadProfile,
}: {
  loadProfile: () => void;
}) {
  let navigate = useNavigate();

  const [error, setError] = useState("");

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
    onSubmit: async (values) => {
      try {
        await authorize({ email: values.email, password: values.password });
        await loadProfile();

        navigate("/movies");
      } catch (err) {
        const errorCode = (err as Error).message.match(/\d+/)!.toString();

        setError(errorCode);

        console.log(err);
      }
    },
    validateOnBlur: true,
  });

  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

  return (
    <LoginContainer onSubmit={formik.handleSubmit}>
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
        {error === "401" ? (
          <Error>Вы ввели неправильный логин или пароль.</Error>
        ) : null}
        {error === "400" ? (
          <Error>
            При авторизации произошла ошибка. Токен не передан или передан не в
            том формате.
          </Error>
        ) : null}
        {error === "400" ? (
          <Error>
            При авторизации произошла ошибка. Переданный токен некорректен.
          </Error>
        ) : null}
        <Button type="submit" disabled={!formik.isValid}>
          Войти
        </Button>
        <Text>
          Ещё не зарегистрированы?
          <LinkRegister to="/signup">Регистрация</LinkRegister>
        </Text>
      </ButtonAndText>
    </LoginContainer>
  );
}

export default Login;
