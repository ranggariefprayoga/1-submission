import styled from 'styled-components';

const CommentInputContainer = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f5;
  transition: transform 0.2s ease-in-out;
`;

const InputTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContent = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 18px;
`;

const InputButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  height: 44px;

  &:hover {
    background-color: #0056b3;
  }
`;

export {
  CommentInputContainer, InputTitle, FormContainer, InputContent, InputButton,
};
