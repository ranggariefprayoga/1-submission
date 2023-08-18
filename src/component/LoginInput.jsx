import PropType from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  return (
    <form className="login-input">
      <input className="email" type="text" value={email} onChange={onEmailChange} placeholder="Your Email" />
      <input className="password" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      <button className="button" type="button" onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropType.func.isRequired,
};

export default LoginInput;
