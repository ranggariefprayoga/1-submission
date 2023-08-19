/* eslint-disable quotes */
/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import LeaderboardItem, { LeaderboardItemShape } from "./LeaderboadItem";

function LeaderboardsList({ leaderboards }) {
  return (
    <div className="leaderboards-list">
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} leaderboard={leaderboard} />
      ))}
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(LeaderboardItemShape).isRequired),
};

export default LeaderboardsList;
