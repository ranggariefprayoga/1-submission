import LeaderboardItem from "./LeaderboadItem";
import { LeaderboardItemShape } from "./LeaderboadItem";
import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
function LeaderboardsList({ leaderboards }) {
  return (
    <div className="leaderboards-list">
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} avatar={leaderboard.user.avatar} name={leaderboard.user.name} email={leaderboard.user.email} score={leaderboard.score} />
      ))}
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(LeaderboardItemShape).isRequired),
};

export default LeaderboardsList;
