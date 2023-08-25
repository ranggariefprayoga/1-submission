/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { CommentInputContainer, InputTitle, FormContainer, InputContent, InputButton } from "./styled/CommentInput";

function CommentInput({ onAddComment }) {
  const [text, setText] = useState("");

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddComment(text);
  }

  return (
    <CommentInputContainer>
      <InputTitle>Tambahkan Komentar</InputTitle>
      <FormContainer>
        <InputContent type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
        <InputButton type="submit" onClick={handleSubmit}>
          Tambahkan Komentar
        </InputButton>
      </FormContainer>
    </CommentInputContainer>
  );
}

export default CommentInput;
