/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-alert */
import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";

function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.seeAllThreads();

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };
