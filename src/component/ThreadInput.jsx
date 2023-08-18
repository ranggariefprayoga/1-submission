/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";

function ThreadInput({ addThread }) {
  const [text, setText] = useState();

  function addthread() {
    if (text.trim()) {
      addThread(text);
      setText("");
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  return (
    <div className="talk-input">
      <textarea type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
      <p className="talk-input__char-left">
        <strong>{text.length}</strong>
        /320
      </p>
      <button type="submit" onClick={addthread}>
        Talk
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addTalk: PropTypes.func.isRequired,
};

export default ThreadInput;
