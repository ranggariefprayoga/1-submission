/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { MdComment } from "react-icons/md";
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { asyncNeutralizeVoteThread, asyncUpVoteThread, asyncDownVoteThread } from "../states/threads/action";
import { postedAt } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { ThreadItemContainer, ThreadItemImage, UserContainer, UserHeader, UserInfo, Title, Name, Email, Date, Content, InformationContainer, TotalComments, VoteContainer, UpVote, DownVote } from "./styled/ThreadItem";

function ThreadItem({ thread }) {
  const { authUser } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onThreadClick = () => {
    navigate(`/threads/${thread.id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/threads/${thread.id}`);
    }
  };

  const handleUpVoteThread = (e) => {
    e.stopPropagation();
    if (thread.upVotesBy.includes(authUser.id)) {
      dispatch(asyncNeutralizeVoteThread(thread.id));
    } else {
      dispatch(asyncUpVoteThread(thread.id));
    }
  };

  const handleDownVoteThread = (e) => {
    e.stopPropagation();
    if (thread.downVotesBy.includes(authUser.id)) {
      dispatch(asyncNeutralizeVoteThread(thread.id));
    } else {
      dispatch(asyncDownVoteThread(thread.id));
    }
  };

  return (
    <ThreadItemContainer onClick={onThreadClick} onKeyDown={onThreadPress}>
      <ThreadItemImage src={thread.user.avatar} alt={thread.user.name} />
      <UserContainer>
        <UserHeader>
          <UserInfo>
            <Title>{thread.title}</Title>
            <Name>{thread.user.name}</Name>
            <Email>{thread.user.email}</Email>
          </UserInfo>
          <Date>{postedAt(thread.createdAt)}</Date>
        </UserHeader>
        <Content>{parse(thread.body)}</Content>
        <InformationContainer>
          <TotalComments>
            {" "}
            <MdComment /> <strong>{thread.totalComments}</strong>
          </TotalComments>
          <VoteContainer>
            <UpVote onClick={handleUpVoteThread}>
              {thread.upVotesBy.includes(authUser.id) ? <AiFillLike /> : <AiOutlineLike />} <strong>{thread.upVotesBy.length}</strong>
            </UpVote>
            <DownVote onClick={handleDownVoteThread}>
              {thread.downVotesBy.includes(authUser.id) ? <AiFillDislike /> : <AiOutlineDislike />} <strong>{thread.downVotesBy.length}</strong>
            </DownVote>
          </VoteContainer>
        </InformationContainer>
      </UserContainer>
    </ThreadItemContainer>
  );
}

export default ThreadItem;
