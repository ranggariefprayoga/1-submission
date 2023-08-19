/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeaderboardsList from "../component/LeaderboardsList";
import { asyncPopulateLeaderboards } from "../states/leaderboards/action";

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <section className="leaderboards-page">
      <LeaderboardsList leaderboards={leaderboards} />
    </section>
  );
}

export default LeaderboardsPage;
