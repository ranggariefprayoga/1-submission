/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { postedAt } from "../utils";

function CommentItem({ comment }) {
  return (
    <div role="button" className="comment-item" id={comment.id}>
      <div className="comment-item-photo">
        <img src={comment.owner.avatar} alt={comment.owner.name} />
      </div>
      <div className="comment-item-user">
        <header>
          <div className="comment-item-user-info">
            <p className="name">{comment.owner.name}</p>
            <p className="date">{postedAt(comment.createdAt)}</p>
          </div>
        </header>
        <article className="comment-item-text">
          <p className="text">{parse(comment.content)}</p>
        </article>
      </div>
    </div>
  );
}

export default CommentItem;
