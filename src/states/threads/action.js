import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const ActionType = {
  RECEIVE_THREADS: "RECEIVE_TALKS",
  ADD_THREAD: "ADD_THREAD",
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

function asyncAddThread(title, body) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      console.log("pantau", { title, body });
      const thread = await api.createThread({ title, body });
      console.log("pantau 3", thread);
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveThreadsActionCreator, addThreadActionCreator, asyncAddThread };
