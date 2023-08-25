/* eslint-disable no-console */
/* eslint-disable quotes */

import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_THREADS",
  ADD_THREAD: "ADD_THREAD",
  UP_VOTE: "UP_VOTE",
  DOWN_VOTE: "DOWN_VOTE",
  NEUTRALIZE_VOTE: "NEUTRALIZE_VOTE",
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function upVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.UP_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.DOWN_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeVoteThreadActionCreator(threadId, userId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread(title, body) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const thread = await api.createThread({ title, body });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      console.log(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralizeVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeVoteThreadActionCreator(threadId, authUser.id));
    try {
      await api.neutralizeVoteThread(threadId);
    } catch (error) {
      console.log(error.message);
      dispatch(neutralizeVoteThreadActionCreator(threadId, authUser.id));
    }
  };
}

function asyncUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteThreadActionCreator(threadId, authUser.id));
    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      console.log(error.message);
    }
  };
}

function asyncDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteThreadActionCreator(threadId, authUser.id));
    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      console.log(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeVoteThreadActionCreator,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
};
