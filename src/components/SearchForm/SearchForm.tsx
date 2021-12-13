import { useFormik } from "formik";
import * as Yup from "yup";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import {
  Button,
  ButtonIcon,
  Input,
  InputContainer,
  SearchFormContainer,
} from "./SearchForm.style";

type PropsType = {
  search?: boolean;
  handleSearch?: () => void;
};

function SearchForm({ search, handleSearch }: PropsType) {
  const formik = useFormik({
    initialValues: {
      movie: "",
    },
    validationSchema: Yup.object({
      movie: Yup.string().required(),
    }),
    onSubmit: () => {},
  });

  return (
    <SearchFormContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="Фильм"
          {...formik.getFieldProps("movie")}
        />
        {search ? (
          <Preloader />
        ) : (
          <Button
            type="button"
            onClick={handleSearch}
            disabled={!formik.isValid}
          >
            <ButtonIcon></ButtonIcon>
          </Button>
        )}
      </InputContainer>
      <FilterCheckbox />
    </SearchFormContainer>
  );
}

export default SearchForm;
