import { useState } from "react";
import {
  Button,
  Check,
  CheckInput,
  CheckLabel,
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

      <CheckLabel>
        <CheckInput type="checkbox"></CheckInput>
        <Check>Короткометражки</Check>
      </CheckLabel>
    </SearchFormContainer>
  );
}

export default SearchForm;
