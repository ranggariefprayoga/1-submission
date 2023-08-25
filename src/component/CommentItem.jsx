/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { postedAt } from "../utils";
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { asyncNeutralizeVoteComment, asyncUpVoteComment, asyncDownVoteComment } from "../states/threadDetail/action";
import { CommentItemContainer, CommentItemImage, CommentItemUserContainer, UserContainer, UserName, PostedAt, CommentContent, VoteContainer, UpVote, DownVote } from "./styled/CommentItem";
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
    <CommentItemContainer role="button" id={comment.id}>
      <CommentItemImage src={comment.owner.avatar} alt={comment.owner.name} />
      <CommentItemUserContainer>
        <UserContainer>
          <UserName>{comment.owner.name}</UserName>
          <PostedAt>{postedAt(comment.createdAt)}</PostedAt>
        </UserContainer>
        <CommentContent>{parse(comment.content)}</CommentContent>
        <VoteContainer>
          <UpVote onClick={handleUpVoteComment}>
            {comment.upVotesBy.includes(authUser.id) ? <AiFillLike /> : <AiOutlineLike />} <strong>{comment.upVotesBy.length}</strong>
          </UpVote>
          <DownVote onClick={handleDownVoteComment}>
            {comment.downVotesBy.includes(authUser.id) ? <AiFillDislike /> : <AiOutlineDislike />} <strong>{comment.downVotesBy.length}</strong>
          </DownVote>
        </VoteContainer>
      </CommentItemUserContainer>
    </CommentItemContainer>
  );
}

export default CommentItem;
