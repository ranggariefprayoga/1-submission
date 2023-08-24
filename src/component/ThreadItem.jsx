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
    <div role="button" className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item-photo">
        <img src={thread.user.avatar} alt={thread.user.name} />
      </div>
      <div className="thread-item-user">
        <header>
          <div className="thread-item-user-info">
            <h3 className="judul">{thread.title}</h3>
            <p className="name">{thread.user.name}</p>
            <p className="email">{thread.user.email}</p>
          </div>
          <p className="date">{postedAt(thread.createdAt)}</p>
        </header>
        <article className="thread-item-text">
          <p className="text">{parse(thread.body)}</p>
        </article>
        <section className="thread-item-information">
          <p className="comment">
            <MdComment /> <strong>{thread.totalComments}</strong>
          </p>
          <div className="likes">
            <p className="upVote" onClick={handleUpVoteThread}>
              {thread.upVotesBy.includes(authUser.id) ? <AiFillLike /> : <AiOutlineLike />} <strong>{thread.upVotesBy.length}</strong>
            </p>
            <p className="downVote" onClick={handleDownVoteThread}>
              {thread.downVotesBy.includes(authUser.id) ? <AiFillDislike /> : <AiOutlineDislike />} <strong>{thread.downVotesBy.length}</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ThreadItem;
