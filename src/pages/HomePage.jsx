/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { asyncAddThread } from "../states/threads/action";
import ThreadInput from "../component/ThreadInput";
import ThreadList from "../component/ThreadsList";
import { HomePageContainer, HomeTitle } from "./styled/HomePage";

function HomePage() {
  const { users = [], threads = [], authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = (title, body) => {
    dispatch(asyncAddThread(title, body));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <HomePageContainer>
      <HomeTitle>let's start talking</HomeTitle>
      <ThreadInput addThread={onAddThread} />
      <ThreadList threads={threadList} />
    </HomePageContainer>
  );
}

export default HomePage;
