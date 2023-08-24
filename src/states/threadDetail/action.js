/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable no-alert */
import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  UPDATE_THREAD_DETAIL: "UPDATE_THREAD_DETAIL",
  ADD_COMMENT: "ADD_COMMENT",
  UP_VOTE: "UP_VOTE",
  DOWN_VOTE: "DOWN_VOTE",
  NEUTRALIZE_VOTE: "NEUTRALIZE_VOTE",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.UP_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.DOWN_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralizeVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.seeDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.createComment({ id, content });
      dispatch(asyncReceiveThreadDetail(id));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeVoteCommentActionCreator(commentId, authUser.id));
    try {
      await api.neutralizeVoteComment(threadId, commentId);
    } catch (error) {
      console.log(error.message);
      dispatch(neutralizeVoteCommentActionCreator(commentId, authUser.id));
    }
  };
}

function asyncUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteCommentActionCreator(commentId, authUser.id));
    try {
      await api.upVoteComment(threadId, commentId);
    } catch (error) {
      console.log(error.message);
    }
  };
}

function asyncDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator(commentId, authUser.id));
    try {
      await api.downVoteComment(threadId, commentId);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export { ActionType, receiveThreadDetailActionCreator, addCommentActionCreator, asyncReceiveThreadDetail, asyncAddComment, asyncNeutralizeVoteComment, asyncDownVoteComment, asyncUpVoteComment };
