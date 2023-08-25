/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LeaderboardsList from "../component/LeaderboardsList";
import LeaderboardsPageContainer from "./styled/LeaderboardsPage";
import { asyncPopulateLeaderboards } from "../states/leaderboards/action";

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <LeaderboardsPageContainer>
      <LeaderboardsList leaderboards={leaderboards} />
    </LeaderboardsPageContainer>
  );
}

export default LeaderboardsPage;
