import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Buttons,
  Edit,
  Error,
  Errors,
  Exit,
  FormWithoutButtonPattern,
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

  const [changed, setChanged] = useState(false);
  const [error, setError] = useState(false);

  function handleChangeError() {
    setError(!error);
  }

  function handleChanged() {
    setChanged(true);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Имя не должно быть короче 2 символов")
        .max(60, "Имя не должно быть длиннее 60 символов"),
      email: Yup.string().email("Некорректный e-mail"),
    }),
    onSubmit: () => {},
  });

  return (
    <ProfileContainer>
      <FormWithoutButtonPattern>
        <Greeting>Привет, Евгения!</Greeting>
        <Inputs>
          <InputContainer>
            <Label>Имя</Label>
            <Input
              type="text"
              placeholder="Имя"
              {...formik.getFieldProps("name")}
            />
          </InputContainer>
          <InputContainer>
            <Label>E-mail</Label>
            <Input
              type="email"
              placeholder="E-mail"
              {...formik.getFieldProps("email")}
            />
          </InputContainer>
        </Inputs>
      </FormWithoutButtonPattern>

      {changed ? (
        <Buttons>
          {error ? (
            <Errors>
              <Error visible={true}>{formik.errors.name}</Error>
              <Error visible={false}>{formik.errors.email}</Error>
            </Errors>
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
