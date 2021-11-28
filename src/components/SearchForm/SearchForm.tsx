import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Preloader from "../Preloader/Preloader";
import {
  Button,
  Input,
  InputContainer,
  SearchFormContainer,
} from "./SearchForm.style";

type PropsType = {
  search?: boolean;
  handleSearch?: () => void;
};

function SearchForm({ search, handleSearch }: PropsType) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChangeSearchQuery(evt: React.FormEvent<HTMLInputElement>) {
    setSearchQuery(evt.currentTarget.value);
  }

  return (
    <SearchFormContainer>
      <InputContainer>
        <Input
          value={searchQuery}
          type="text"
          placeholder="Фильм"
          onChange={handleChangeSearchQuery}
        />
        {search ? (
          <Preloader />
        ) : (
          <Button type="button" onClick={handleSearch}>
            &#8250;
          </Button>
        )}
      </InputContainer>
      <FilterCheckbox />
    </SearchFormContainer>
  );
}

export default SearchForm;
