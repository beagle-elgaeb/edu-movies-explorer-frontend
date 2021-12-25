import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { sleep } from "../../utils/utils";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {
  Button,
  ButtonIcon,
  Input,
  Error,
  InputContainer,
  SearchFormContainer,
} from "./SearchForm.style";

function SearchForm({
  searchMovies,
}: {
  searchMovies: (values: { searchQuery: string; short: boolean }) => void;
}) {
  const [inProgress, setInProgress] = useState(false);

  const formik = useFormik({
    initialValues: {
      movie: "",
      checkShort: false,
    },
    validationSchema: Yup.object({
      movie: Yup.string().required("Нужно ввести ключевое слово"),
    }),
    onSubmit: async (values) => {
      setInProgress(true);
      await searchMovies({
        searchQuery: values.movie,
        short: values.checkShort,
      });
      setInProgress(false);
    },
  });

  return (
    <SearchFormContainer onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          placeholder="Фильм"
          {...formik.getFieldProps("movie")}
          autoComplete="off"
          readOnly={inProgress}
        />
        {formik.touched.movie && formik.errors.movie ? (
          <Error>{formik.errors.movie}</Error>
        ) : null}

        <Button
          type="submit"
          disabled={!formik.isValid || inProgress}
          onClick={() => {}}
        >
          <ButtonIcon></ButtonIcon>
        </Button>
      </InputContainer>
      <FilterCheckbox {...formik.getFieldProps("checkShort")} />
    </SearchFormContainer>
  );
}

export default SearchForm;
