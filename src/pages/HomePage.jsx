import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreads } from "../states/shared/action";
import { asyncAddThread } from "../states/threads/action";

function HomePage() {
  const { users = [], threads = [], authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onAddThread = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  //Tambahin logic like

  const threadList = threads.map((thread) => ({
    ...thread,
    // authUser: authUser.id,
  }));

  return (
    <div>
      <h1>Ini Home Page</h1>
    </div>
  );
}

export default HomePage;
