/* eslint-disable quotes */
import { ActionType } from "./action";

export default function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.UP_VOTE:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          console.log(thread);
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId) ? thread.upVotesBy.filter((id) => id !== action.payload.userId) : thread.upVotesBy.concat([action.payload.userId]),
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      });
    case ActionType.DOWN_VOTE:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId) ? thread.downVotesBy.filter((id) => id !== action.payload.userId) : thread.downVotesBy.concat([action.payload.userId]),
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      });
    case ActionType.NEUTRALIZE_VOTE:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}
