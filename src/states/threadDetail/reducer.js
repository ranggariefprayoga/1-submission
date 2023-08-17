import { ActionType } from "./action";

export default function threadDetailReducer(talkDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    default:
      return talkDetail;
  }
}
