import styled from "styled-components";

const RegisterPageContainer = styled.section`
  background-image: url(../../public/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const RegisterInputContainer = styled.article`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 30px;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1rem;
`;

const Question = styled.p`
  font-size: 1rem;
`;

const styles = {
  menuStyle: {
    textDecoration: "none",
    color: "pink",
    fontWeight: "bold",
    transition: "color 0.3s",
    "&:hover": {
      color: "#ff9900",
    },
  },
};

export { RegisterPageContainer, RegisterInputContainer, Title, styles, Question };
