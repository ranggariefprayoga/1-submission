/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import api from "../../utils/api";
import { asyncPopulateLeaderboards, receiveLeaderboardsActionCreator } from "./action";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const fakeLeaderboardsResponse = [
  {
    user: {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 10,
  },
  {
    user: {
      id: "users-2",
      name: "Jane Doe",
      email: "jane@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 5,
  },
];

const fakeErrorResponse = new Error("Ups, something went wrong ");

//  skenario testing
//   - asyncPopulateLeaderboards thunk
//   - should dispatch action correctly when data fetching success
//   - should dispatch action and call alert correctly when data fetching failed

describe("asyncPopulateLeaderboards thunk", () => {
  beforeEach(() => {
    api._seeLeaderboards = api.seeLeaderboards;
  });

  afterEach(() => {
    api.seeLeaderboards = api._seeLeaderboards;

    delete api._seeLeaderboards;
  });

  it("should dispatch action correctly when data fetching success", async () => {
    api.seeLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    const dispatch = vi.fn();

    await asyncPopulateLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it("should dispatch action and call alert correctly when data fetching failed", async () => {
    api.seeLeaderboards = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    window.alert = vi.fn();

    await asyncPopulateLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
