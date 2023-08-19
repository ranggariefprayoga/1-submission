/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { IoBarChart } from "react-icons/io5";

function LeaderboardItem({ leaderboard }) {
  return (
    <div className="leaderboard-info">
      <img src={leaderboard.user.avatar} alt={leaderboard.user.name} />
      <div className="leaderboard-info_user">
        <h3 className="name">{leaderboard.user.name}</h3>
        <h4 className="email">{leaderboard.user.email}</h4>
      </div>
      <div className="leaderboard-score">
        <h1 className="icon">
          <IoBarChart />
        </h1>
        <h3 className="score">{leaderboard.score}</h3>
      </div>
    </div>
  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const LeaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export { LeaderboardItemShape };

export default LeaderboardItem;
