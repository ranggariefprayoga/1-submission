/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <form className="register-input">
      <input className="name" type="text" value={name} onChange={onNameChange} placeholder="Name" />
      <input className="email" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
      <input className="password" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button className="button" type="button" onClick={() => register({ name, email, password })}>
        Register
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
