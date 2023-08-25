/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/react-in-jsx-scope */
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import RegisterInput from "../component/RegisterInput";
import { asyncRegisterUser } from "../states/users/action";
import { RegisterInputContainer, RegisterPageContainer, Title, styles, Question } from "./styled/RegisterPage";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate("/login");
  };

  return (
    <RegisterPageContainer>
      <RegisterInputContainer>
        <Title>
          <h2>Create your account!</h2>
        </Title>
        <RegisterInput register={onRegister} />
        <Question>
          Already have an account?{" "}
          <Link to="/login" style={styles.menuStyle}>
            Login
          </Link>
        </Question>
      </RegisterInputContainer>
    </RegisterPageContainer>
  );
}

export default RegisterPage;
