/* eslint-disable object-curly-newline */

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { RegisterInputContainer, RegisterInputName, RegisterInputEmail, RegisterInputPassword, RegisterInputButton } from "./styled/RegisterInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <RegisterInputContainer>
      <RegisterInputName type="text" value={name} onChange={onNameChange} placeholder="Name" />
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
