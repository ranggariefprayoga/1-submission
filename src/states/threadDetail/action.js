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

export { ActionType, receiveThreadDetailActionCreator, addCommentActionCreator, asyncReceiveThreadDetail, asyncAddComment };
