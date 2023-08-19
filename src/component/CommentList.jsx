/* eslint-disable react/prop-types */
import CommentItem from "./CommentItem";

function CommentList({ comments }) {
  return (
    <>
      <div role="button" className="comment-list">
        <h4>Komentar</h4>
        {comments.map((comment, idx) => (
          <CommentItem key={idx} comment={comment} />
        ))}
      </div>
    </>
  );
}

export default CommentList;
