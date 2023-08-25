/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import CommentItem from "./CommentItem";
import { CommentListContainer, CommentListTitle } from "./styled/CommentList";

function CommentList({ comments }) {
  return (
    <CommentListContainer role="button">
      <CommentListTitle>Komentar ({comments.length})</CommentListTitle>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </CommentListContainer>
  );
}

export default CommentList;
