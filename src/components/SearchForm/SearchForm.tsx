import { useFormik } from "formik";
import * as Yup from "yup";
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
  const formik = useFormik({
    initialValues: {
      movie: "",
      checkShort: false,
    },
    validationSchema: Yup.object({
      movie: Yup.string().required("Нужно ввести ключевое слово"),
    }),
    onSubmit: (values) => {
      searchMovies({ searchQuery: values.movie, short: values.checkShort });
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
        />
        {formik.touched.movie && formik.errors.movie ? (
          <Error>{formik.errors.movie}</Error>
        ) : null}

        <Button type="submit" disabled={!formik.isValid} onClick={() => {}}>
          <ButtonIcon></ButtonIcon>
        </Button>
      </InputContainer>
      <FilterCheckbox {...formik.getFieldProps("checkShort")} />
    </SearchFormContainer>
  );
}

export default SearchForm;
