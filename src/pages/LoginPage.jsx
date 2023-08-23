/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import LoginInput from "../component/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate("/");
  };

  return (
    <section className="login-page">
      <article className="login-page_input">
        <h2>Please login !</h2>
        <LoginInput login={onLogin} />
        <p>
          Don`t have an account?{" "}
          <Link to="/register" className="to-register">
            Register
          </Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
