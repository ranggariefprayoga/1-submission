import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
// import { receiveCommentActionCreator } from "../comment/action";

const ActionType = {
  RECEIVE_THREAD_DETAIL: "RECEIVE_THREAD_DETAIL",
  CLEAR_THREAD_DETAIL: "CLEAR_THREAD_DETAIL",
  UPDATE_THREAD_DETAIL: "UPDATE_THREAD_DETAIL",
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

// function asyncUpdateThreadDetail(threadId) {
//   return async (dispatch) => {
//     dispatch(clearThreadDetailActionCreator());
//     try {
//       const threadDetail = await api.seeDetailThread(threadId);
//       dispatch(receiveThreadDetailActionCreator(threadDetail));

//       // dispatch(receiveCommentActionCreator(threadDetail.comments));
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// }

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    // dispatch(clearThreadDetailActionCreator());
    try {
      const threadDetail = await api.seeDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));

      // dispatch(receiveCommentActionCreator(threadDetail.comments));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveThreadDetailActionCreator, asyncReceiveThreadDetail };
