/* eslint-disable no-alert */
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveThreadDetail } from '../threadDetail/action';

const ActionType = {
  ADD_COMMENT: 'ADD_COMMENT',
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
};

function receiveCommentActionCreator(comments) {
  return {
    type: ActionType.RECEIVE_COMMENTS,
    payload: {
      comments,
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

export {
  ActionType, addCommentActionCreator, asyncAddComment, receiveCommentActionCreator,
};
