import styled from "styled-components";

const RegisterInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const RegisterInputName = styled.input`
  height: 44px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ff9900;
    box-shadow: 0px 0px 6px rgba(255, 153, 0, 0.5);
  }
`;

const RegisterInputEmail = styled.input`
  height: 44px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ff9900;
    box-shadow: 0px 0px 6px rgba(255, 153, 0, 0.5);
  }
`;

const RegisterInputPassword = styled.input`
  height: 44px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding-left: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #ff9900;
    box-shadow: 0px 0px 6px rgba(255, 153, 0, 0.5);
  }
`;

const RegisterInputButton = styled.button`
  height: 44px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  background-color: #3498db;

  &:hover {
    cursor: pointer;
    background-color: #2980b9;
  }
`;

export { RegisterInputContainer, RegisterInputName, RegisterInputEmail, RegisterInputPassword, RegisterInputButton };
