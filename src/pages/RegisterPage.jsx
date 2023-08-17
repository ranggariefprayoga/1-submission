import { LuAppWindow } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import RegisterInput from "../component/RegisterInput";
import { asyncRegisterUser } from "../states/users/action";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate("/login");
  };

  return (
    <section>
      <header>
        <h1>
          <LuAppWindow />
        </h1>
      </header>
      <article>
        <h2>Buat Akun Kamu</h2>
        <RegisterInput register={onRegister} />
        <p>
          Sudah Punya Akun? <Link to="/login">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
