/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import PropType from "prop-types";
import useInput from "../hooks/useInput";
import {
  LoginInputContainer, LoginInputEmail, LoginInputPassword, LoginInputButton,
} from "./styled/LoginInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <LoginInputContainer>
      <LoginInputEmail type="text" value={email} onChange={onEmailChange} placeholder="Your Email" />
      <LoginInputPassword type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <LoginInputButton type="button" onClick={() => login({ email, password })}>
        Login
      </LoginInputButton>
    </LoginInputContainer>
  );
}

LoginInput.propTypes = {
  login: PropType.func.isRequired,
};

export default LoginInput;
