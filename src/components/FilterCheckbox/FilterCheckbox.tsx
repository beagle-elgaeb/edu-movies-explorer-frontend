import { InputHTMLAttributes } from "react";
import { Check, CheckContainer, CheckInput } from "./FilterCheckbox.style";

function FilterCheckbox(props: InputHTMLAttributes<unknown>) {
  return (
    <CheckContainer>
      <CheckInput type="checkbox" {...props}></CheckInput>
      <Check>Короткометражки</Check>
    </CheckContainer>
  );
}

export default FilterCheckbox;
