import { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {
  Button,
  Input,
  InputContainer,
  SearchFormContainer,
} from "./SearchForm.style";

function SearchForm() {
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
        <Button>&#8250;</Button>
      </InputContainer>
      <FilterCheckbox />
    </SearchFormContainer>
  );
}

export default SearchForm;
