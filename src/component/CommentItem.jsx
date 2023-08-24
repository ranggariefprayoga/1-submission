/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { postedAt } from "../utils";
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { asyncNeutralizeVoteComment, asyncUpVoteComment, asyncDownVoteComment } from "../states/threadDetail/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CommentItem({ comment }) {
  const { id: threadId } = useParams();
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const handleUpVoteComment = (e) => {
    e.stopPropagation();
    if (comment.upVotesBy.includes(authUser.id)) {
      dispatch(asyncNeutralizeVoteComment(threadId, comment.id));
    } else {
      dispatch(asyncUpVoteComment(threadId, comment.id));
    }
  };

  const handleDownVoteComment = (e) => {
    e.stopPropagation();
    if (comment.downVotesBy.includes(authUser.id)) {
      dispatch(asyncNeutralizeVoteComment(threadId, comment.id));
    } else {
      dispatch(asyncDownVoteComment(threadId, comment.id));
    }
  };
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
        <section className="comment-item-information">
          <div className="likes">
            <p className="upVote" onClick={handleUpVoteComment}>
              {comment.upVotesBy.includes(authUser.id) ? <AiFillLike /> : <AiOutlineLike />} <strong>{comment.upVotesBy.length}</strong>
            </p>
            <p className="downVote" onClick={handleDownVoteComment}>
              {comment.downVotesBy.includes(authUser.id) ? <AiFillDislike /> : <AiOutlineDislike />} <strong>{comment.downVotesBy.length}</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommentItem;
