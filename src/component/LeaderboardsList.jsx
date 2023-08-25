/* eslint-disable quotes */
/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import LeaderboardItem, { LeaderboardItemShape } from "./LeaderboadItem";
import LeaderboardsListContainer from "./styled/leaderboardsList";

function LeaderboardsList({ leaderboards }) {
  return (
    <LeaderboardsListContainer>
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} leaderboard={leaderboard} />
      ))}
    </LeaderboardsListContainer>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(LeaderboardItemShape).isRequired),
};

export default LeaderboardsList;
