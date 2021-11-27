import { useState } from "react";
import { Check, CheckContainer, CheckInput } from "./FilterCheckbox.style";

function FilterCheckbox() {
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    setChecked(!checked);
  }

  return (
    <CheckContainer>
      <CheckInput
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      ></CheckInput>
      <Check>Короткометражки</Check>
    </CheckContainer>
  );
}

export default FilterCheckbox;
