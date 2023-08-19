import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import ThreadDetail from "../component/ThreadDetail";
import CommentInput from "../component/CommentInput";
import CommentList from "../component/CommentList";
import { asyncAddComment } from "../states/comments/action";

function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }
  // console.log("pantau 8", comments);
  const addComment = (content) => {
    console.log("panmtau 1", content);
    dispatch(asyncAddComment({ id, content }));
  };

  return (
    <section className="detail-page">
      <div className="detail-page-info">
        <ThreadDetail detailThread={threadDetail} />
      </div>
      <div className="detail-page-comments">
        <CommentInput detailThread={threadDetail} onAddComment={addComment} />
        <CommentList comments={threadDetail.comments} />
      </div>
    </section>
  );
}

export default DetailPage;
