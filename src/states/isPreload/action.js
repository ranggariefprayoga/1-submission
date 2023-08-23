/* eslint-disable quotes */
import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../../utils/api";
import { setAuthUserActionCreator } from "../authUser/action";

const ActionType = {
  SET_IS_PRELOAD: "SET_IS_PRELOAD",
};

function setIsPreloadActionCreator(isPreLoad) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreLoad,
    },
  };
}

function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const authUser = await api.seeOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      dispatch(setIsPreloadActionCreator(null));
    } finally {
      dispatch(setIsPreloadActionCreator(false));
    }
    dispatch(hideLoading());
  };
}

export { ActionType, setIsPreloadActionCreator, asyncPreloadProcess };
