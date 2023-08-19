import { ActionType } from "./action";

export default function commentsReducer(comments = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENTS:
      return action.payload.comments;
    case ActionType.ADD_COMMENT:
      return [...comments, action.payload.comment];
    default:
      comments;
  }
}
