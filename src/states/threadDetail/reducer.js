/* eslint-disable max-len */
/* eslint-disable quotes */
import { ActionType } from "./action";

export default function threadDetailReducer(threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.ADD_COMMENT:
      return {
        ...threadDetail,
        comments: [action.payload.comment, ...threadDetail.comment],
      };
    case ActionType.UP_VOTE:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId) ? comment.upVotesBy.filter((id) => id !== action.payload.userId) : comment.upVotesBy.concat([action.payload.userId]),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };

    case ActionType.DOWN_VOTE:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId) ? comment.downVotesBy.filter((id) => id !== action.payload.userId) : comment.downVotesBy.concat([action.payload.userId]),
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };

    case ActionType.NEUTRALIZE_VOTE:
      return {
        ...threadDetail,
        comments: threadDetail.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };

    default:
      return threadDetail;
  }
}
