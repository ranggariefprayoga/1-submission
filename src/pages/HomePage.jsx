import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { asyncAddThread } from "../states/threads/action";
import ThreadInput from "../component/ThreadInput";
import ThreadList from "../component/ThreadsList";

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
    <section className="home-page">
      <ThreadInput addThread={onAddThread} />
      <ThreadList threads={threadList} />
    </section>
  );
}

export default HomePage;
