import { useFormik } from "formik";
import { useContext } from "react";
import { useState } from "react";
import * as Yup from "yup";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { editProfileData } from "../../utils/MainApi";
import {
  Buttons,
  Edit,
  Error,
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

function Profile({
  loadProfile,
  handleLogout,
}: {
  loadProfile: () => void;
  handleLogout: () => void;
}) {
  const user = useContext(CurrentUserContext)!;

  const [changed, setChanged] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Имя не должно быть короче 2 символов")
        .max(60, "Имя не должно быть длиннее 60 символов")
        .required("Введите, пожалуйста, имя"),
      email: Yup.string()
        .email("Некорректный e-mail")
        .required("Введите, пожалуйста, e-mail"),
    }),
    onSubmit: async (values) => {
      try {
        await editProfileData({ name: values.name, email: values.email });
        await loadProfile();

        setChanged(false);
      } catch (err) {
        const errorCode = (err as Error).message.match(/\d+/)!.toString();

        setError(errorCode);

        console.log(err);
      }
    },
  });

  function handleChanged() {
    setChanged(true);
  }

  return (
    <ProfileContainer onSubmit={formik.handleSubmit}>
      <FormWithoutButtonPattern>
        <Greeting>Привет{user ? `, ${user.name}` : null}!</Greeting>
        <Inputs>
          <InputContainer>
            <Label>Имя</Label>
            <Input
              type="text"
              placeholder="Имя"
              {...formik.getFieldProps("name")}
              autoComplete="off"
              readOnly={!changed}
            />
          </InputContainer>
          <InputContainer>
            <Label>E-mail</Label>
            <Input
              type="email"
              placeholder="E-mail"
              {...formik.getFieldProps("email")}
              autoComplete="off"
              readOnly={!changed}
            />
          </InputContainer>
        </Inputs>
      </FormWithoutButtonPattern>
      {error === "409" ? (
        <Error>Пользователь с таким email уже существует.</Error>
      ) : null}
      {error === "400" ? (
        <Error>При обновлении профиля произошла ошибка.</Error>
      ) : null}
      {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
      {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
      {changed ? (
        <Buttons>
          <Save type="submit" disabled={!formik.isValid}>
            Сохранить
          </Save>
        </Buttons>
      ) : (
        <Buttons>
          <Edit type="button" onClick={handleChanged}>
            Редактировать
          </Edit>
          <Exit type="button" onClick={handleLogout}>
            Выйти из аккаунта
          </Exit>
        </Buttons>
      )}
    </ProfileContainer>
  );
}

export default Profile;
