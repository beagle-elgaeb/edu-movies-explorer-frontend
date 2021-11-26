import { Check, CheckContainer, CheckInput } from "./FilterCheckbox.style";

function FilterCheckbox() {
  return (
    <CheckContainer>
      <CheckInput type="checkbox"></CheckInput>
      <Check>Короткометражки</Check>
    </CheckContainer>
  );
}

export default FilterCheckbox;
