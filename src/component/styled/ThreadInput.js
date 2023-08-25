import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const InputTitle = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: white;

  &:focus {
    border: 2px solid black;
  }
`;

const CountdownTitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
`;

const ContentLabel = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
`;

const InputContentThread = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: white;
  height: 100px;

  &:focus {
    border: 2px solid black;
  }

  &::placeholder {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }
`;

const CountdownContent = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 24px;
`;

const InputButton = styled.button`
  width: 100%;
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  margin-bottom: 32px;

  &:hover {
    background-color: #2980b9;
  }
`;

export { InputContainer, TitleLabel, InputTitle, CountdownTitle, ContentLabel, InputContentThread, CountdownContent, InputButton };
