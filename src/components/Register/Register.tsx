import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authorize, register } from "../../utils/MainApi";
import InputAuth from "../InputAuth/InputAuth";
import Logo from "../Logo/Logo";
import {
  Button,
  ButtonAndText,
  Error,
  FormWithoutButton,
  Inputs,
  LinkLogin,
  RegisterContainer,
  Text,
  Title,
} from "./Register.style";

function Register({ loadProfile }: { loadProfile: () => void }) {
  let navigate = useNavigate();

  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Имя не должно быть короче 2 символов")
        .max(60, "Имя не должно быть длиннее 60 символов")
        .required("Введите, пожалуйста, имя"),
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
        await register(values);
        await authorize({ email: values.email, password: values.password });
        await loadProfile();

        navigate("/movies");
      } catch (err) {
        const errorCode = (err as Error).message.match(/\d+/)!.toString();

        setError(errorCode);

        console.log(err);
      }
    },
  });

  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

  return (
    <RegisterContainer onSubmit={formik.handleSubmit}>
      <FormWithoutButton>
        <Logo />
        <Title>Добро пожаловать!</Title>
        <Inputs>
          <InputAuth
            label="Имя"
            type="text"
            {...formik.getFieldProps("name")}
            errorText={getError("name")}
          />
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
        {error === "409" ? (
          <Error>Пользователь с таким email уже существует.</Error>
        ) : null}
        {error === "400" ? (
          <Error>При регистрации пользователя произошла ошибка.</Error>
        ) : null}
        <Button type="submit" disabled={!formik.isValid}>
          Зарегистрироваться
        </Button>
        <Text>
          Уже зарегистрированы?<LinkLogin to="/signin">Войти</LinkLogin>
        </Text>
      </ButtonAndText>
    </RegisterContainer>
  );
}

export default Register;
