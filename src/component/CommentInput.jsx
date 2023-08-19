/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useState } from "react";

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
    <div className="comment-input">
      <h2>Tambahkan Komentar</h2>
      <form>
        <div className="comment-post">
          <input className="body" type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Tambahkan Komentar
        </button>
      </form>
    </div>
  );
}

export default CommentInput;
