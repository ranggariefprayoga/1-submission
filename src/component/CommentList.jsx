/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <div role="button" className="comment-list">
      <h4>Komentar</h4>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
