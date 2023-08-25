/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-no-bind */

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import { useState } from "react";
import PropTypes from "prop-types";
import { InputContainer, TitleLabel, InputTitle, CountdownTitle, ContentLabel, InputContentThread, CountdownContent, InputButton } from "./styled/ThreadInput";

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function addthread(e) {
    e.preventDefault();
    if (text.trim() && title.trim()) {
      addThread(title, text);
      setTitle("");
      setText("");
    }
  }

  function handleTitleChange({ target }) {
    if (target.value.length <= 50) {
      setTitle(target.value);
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <form>
      <InputContainer>
        {" "}
        <TitleLabel htmlFor="title">Title</TitleLabel>
        <InputTitle type="text" placeholder="Thread Title" value={title} onChange={handleTitleChange} />
        <CountdownTitle>
          <strong>{title.length}</strong>
          /50
        </CountdownTitle>
        <ContentLabel htmlFor="body">Body</ContentLabel>
        <InputContentThread type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
        <CountdownContent>
          <strong>{text.length}</strong>
          /320
        </CountdownContent>
      </InputContainer>
      <InputButton type="submit" onClick={addthread}>
        Thread
      </InputButton>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
