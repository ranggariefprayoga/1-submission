import { LuAperture } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
      <header className="login-page_hero">
        <h1>
          <LuAperture />
        </h1>
      </header>
      <article>
        <h2>Halaman Login</h2>
        <LoginInput login={onLogin} />
        <p>
          Don`t have an account? <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
