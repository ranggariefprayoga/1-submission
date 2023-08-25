/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import LoginInput from "../component/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";
import {
  LoginPageContainer, LoginInputContainer, Title, styles, Question,
} from "./styled/LoginPage";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  return (
    <LoginPageContainer>
      <LoginInputContainer>
        <Title>Login, Now!</Title>
        <LoginInput login={onLogin} />
        <Question>
          Don`t have an account?{" "}
          <Link to="/register" style={styles.menuStyle}>
            Register
          </Link>
        </Question>
      </LoginInputContainer>
    </LoginPageContainer>
  );
}

export default LoginPage;
