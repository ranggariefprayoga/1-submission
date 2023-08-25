/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

/* eslint-disable linebreak-style */
import { describe, it, expect } from "vitest";
import threadsReducer from "./reducer";

// Scenario unit test threadsReducer function :
// - should return the initial state when given by unknown action
// - should return the threads when given by RECEIVE_THREADS action
// - should return the threads with the new thread when given by ADD_THREAD action
// - shuld return the threadId and userId when given by UP_VOTE action
// - shuld return the threadId and userId when given by DOWN_VOTE action
// - shuld return the threadId and userId when given by NEUTRALIZE_VOTE action

describe("threadsReducer function", () => {
  it("should return the initial state when given by unknown action", () => {
    const initialState = [];
    const action = { type: "UNKNOWN" };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it("should return the threads when given by RECEIVE_THREADS action", () => {
    const initialState = [];
    const action = {
      type: "RECEIVE_THREADS",
      payload: {
        threads: [
          {
            body: "Ini adalah thread pertama",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            downVotesBy: [],
            id: "thread-1",
            ownerId: "users-1",
            title: "Thread Pertama",
            totalComments: 0,
            upVotesBy: [],
          },
          {
            id: "thread-2",
            title: "Thread Kedua",
            body: "Ini adalah thread kedua",
            category: "General",
            createdAt: "2021-06-21T07:00:00.000Z",
            ownerId: "users-2",
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0,
          },
        ],
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it("should return the threads with the new thread when given by ADD_THREAD action", () => {
    const initialState = [
      {
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        downVotesBy: [],
        id: "thread-1",
        ownerId: "users-1",
        title: "Thread Pertama",
        totalComments: 0,
        upVotesBy: [],
      },
    ];

    const action = {
      type: "ADD_THREAD",
      payload: {
        thread: {
          id: "thread-1",
          title: "Thread Pertama",
          body: "Ini adalah thread pertama",
          category: "General",
          createdAt: "2021-06-21T07:00:00.000Z",
          ownerId: "users-1",
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it("shuld return the threadId and userId when given by UP_VOTE action", () => {
    const initialState = [
      {
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        downVotesBy: [],
        id: "thread-1",
        ownerId: "users-1",
        title: "Thread Pertama",
        totalComments: 0,
        upVotesBy: [],
      },
    ];

    const action = {
      type: "UP_VOTE",
      payload: {
        threadId: {
          threadId: "thread-1",
        },
        userId: {
          userId: "users-1",
        },
      },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(
      initialState.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            upVotesBy: thread.upVotesBy.includes(action.payload.userId) ? thread.upVotesBy.filter((id) => id !== action.payload.userId) : thread.upVotesBy.concat([action.payload.userId]),
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      })
    );
  });

  it("shuld return the threadId and userId when given by DOWN_VOTE action", () => {
    const initialState = [
      {
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        downVotesBy: [],
        id: "thread-1",
        ownerId: "users-1",
        title: "Thread Pertama",
        totalComments: 0,
        upVotesBy: [],
      },
    ];

    const action = {
      type: "DOWN_VOTE",
      payload: {
        threadId: {
          threadId: "thread-1",
        },
        userId: {
          userId: "users-1",
        },
      },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(
      initialState.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.includes(action.payload.userId) ? thread.downVotesBy.filter((id) => id !== action.payload.userId) : thread.downVotesBy.concat([action.payload.userId]),
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      })
    );
  });

  it("shuld return the threadId and userId when given by NEUTRALIZE_VOTE action", () => {
    const initialState = [
      {
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        downVotesBy: [],
        id: "thread-1",
        ownerId: "users-1",
        title: "Thread Pertama",
        totalComments: 0,
        upVotesBy: [],
      },
    ];

    const action = {
      type: "NEUTRALIZE_VOTE",
      payload: {
        threadId: {
          threadId: "thread-1",
        },
        userId: {
          userId: "users-1",
        },
      },
    };

    const nextState = threadsReducer(initialState, action);
    expect(nextState).toEqual(
      initialState.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
            upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          };
        }
        return thread;
      })
    );
  });
});
