import LeaderboardItem from "./LeaderboadItem";
import { LeaderboardItemShape } from "./LeaderboadItem";
import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
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
