/* eslint-disable quotes */
import { useState } from "react";

export default function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = ({ target }) => {
    setValue(target.value);
  };

  return [value, handleValueChange, setValue];
}
