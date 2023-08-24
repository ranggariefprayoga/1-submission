/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
import { useState } from "react";
import PropTypes from "prop-types";

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
      <div className="thread-input">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input className="title" type="text" placeholder="Thread Title" value={title} onChange={handleTitleChange} />
          <p className="thread-input__title">
            <strong>{title.length}</strong>
            /50
          </p>
          <label htmlFor="body">Body</label>
          <textarea className="body" type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
        </div>
        <p className="thread-input__body">
          <strong>{text.length}</strong>
          /320
        </p>
        <button type="submit" onClick={addthread}>
          Thread
        </button>
      </div>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
