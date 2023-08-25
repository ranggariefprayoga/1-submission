/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { IoBarChart } from "react-icons/io5";
import { LeaderboardsItemContainer, LeaderboardItemImage, LeaderboardUserInfoContainer, LeaderboardUserName, LeaderboardUserEmail, LeaderboardScoreContainer, LeaderboardScore } from "./styled/leaderboardItem";

function LeaderboardItem({ leaderboard }) {
  return (
    <LeaderboardsItemContainer>
      <LeaderboardItemImage src={leaderboard.user.avatar} alt={leaderboard.user.name} />
      <LeaderboardUserInfoContainer>
        <LeaderboardUserName>{leaderboard.user.name}</LeaderboardUserName>
        <LeaderboardUserEmail>{leaderboard.user.email}</LeaderboardUserEmail>
      </LeaderboardUserInfoContainer>
      <LeaderboardScoreContainer>
        <IoBarChart />
        <LeaderboardScore>{leaderboard.score}</LeaderboardScore>
      </LeaderboardScoreContainer>
    </LeaderboardsItemContainer>
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
