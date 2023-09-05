/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/order */
/* eslint-disable object-curly-newline */

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { RegisterInputContainer, RegisterInputName, RegisterInputEmail, RegisterInputPassword, RegisterInputButton } from "./styled/RegisterInput";
import { useState } from "react";

function RegisterInput({ register }) {
  const [name, onNameChange] = useState("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  function handleNameChange({ target }) {
    if (target.value.length <= 8) {
      onNameChange(target.value);
    }
  }

  return (
    <RegisterInputContainer>
      <RegisterInputName type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <RegisterInputEmail type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      <RegisterInputPassword type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <RegisterInputButton type="button" onClick={() => register({ name, email, password })}>
        Register
      </RegisterInputButton>
    </RegisterInputContainer>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
