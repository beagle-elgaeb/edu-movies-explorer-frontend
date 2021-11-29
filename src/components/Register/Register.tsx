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
  Inputs,
  LinkLogin,
  RegisterContainer,
  Text,
  Title,
} from "./Register.style";

function Register() {
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
    onSubmit: () => {},
  });

  // Временно, для наблюдения всех сообщений об ошибке ------------------------
  // (нажатие клавиш 1 и 2 включает и выключает ошибки) -----------------------

  const [errors, setErrors] = useState({ 1: false, 2: false });

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);

    function onKeydown({ key }: { key: string }) {
      if (key === "1" || key === "2") {
        setErrors((state) => ({ ...state, [key]: !state[key] }));
      }
    }

    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  // --------------------------------------------------------------------------

  const getError = (name: keyof typeof formik.values) =>
    formik.touched[name] ? formik.errors[name] : undefined;

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
      </div>
      <ButtonAndText>
        <Button disabled={!formik.isValid}>Зарегистрироваться</Button>
        <Text>
          Уже зарегистрированы?<LinkLogin to="/signin">Войти</LinkLogin>
        </Text>
      </ButtonAndText>
    </RegisterContainer>
  );
}

export default Register;
