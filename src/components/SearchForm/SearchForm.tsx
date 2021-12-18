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
  searchMovies: (searchQuery: string) => void;
}) {
  const formik = useFormik({
    initialValues: {
      movie: "",
    },
    validationSchema: Yup.object({
      movie: Yup.string().required("Нужно ввести ключевое слово"),
    }),
    onSubmit: (values) => {
      searchMovies(values.movie);
    },
  });

  return (
    <SearchFormContainer onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Input
          type="text"
          placeholder="Фильм"
          {...formik.getFieldProps("movie")}
          name="movie"
          value={formik.values.movie}
          autoComplete="off"
        />
        {formik.touched.movie && formik.errors.movie ? (
          <Error>{formik.errors.movie}</Error>
        ) : null}

        <Button type="submit" disabled={!formik.isValid} onClick={() => {}}>
          <ButtonIcon></ButtonIcon>
        </Button>
      </InputContainer>
      <FilterCheckbox />
    </SearchFormContainer>
  );
}

export default SearchForm;
