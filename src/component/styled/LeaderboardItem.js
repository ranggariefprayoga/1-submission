/* eslint-disable quotes */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import styled from "styled-components";
import { devices } from "./breakpoints";

const LeaderboardsItemContainer = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr;
  align-items: center;
  gap: 16px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  @media only screen and ${devices.sm} {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr 1fr;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const LeaderboardItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  @media only screen and ${devices.sm} {
    margin: 0 auto;
  }
`;

const LeaderboardUserInfoContainer = styled.div`
  @media only screen and ${devices.sm} {
    display: flex;
    margin: 0 auto;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`;

const LeaderboardUserName = styled.h3`
  font-weight: bold;
  color: #333;
`;

const LeaderboardUserEmail = styled.h5`
  font-weight: normal;
  color: #999;
`;

const LeaderboardScoreContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
  @media only screen and ${devices.sm} {
    justify-content: center;
  }
`;

const LeaderboardScore = styled.h3`
  font-weight: bold;
  color: #ff9900;
`;

export { LeaderboardsItemContainer, LeaderboardItemImage, LeaderboardUserInfoContainer, LeaderboardUserName, LeaderboardUserEmail, LeaderboardScoreContainer, LeaderboardScore };
