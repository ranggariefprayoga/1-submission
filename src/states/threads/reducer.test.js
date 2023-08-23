/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import { describe, it, expect } from "vitest";
import threadsReducer from "./reducer";

describe("threadsReducer function", () => {
  // - should return the initial state when given by unknown action
  it("should return the initial state when given by unknown action", () => {
    const initialState = [];
    const action = { type: "UNKNOWN" };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
  // - should return the threads when given by RECEIVE_THREADS action
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

  // - should return the threads with the new thread when given by ADD_THREAD action
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
});
