import styled from "styled-components";

const ThreadItemContainer = styled.div`
  border: none;
  outline: none;
  display: flex;
  padding: 10px;
  gap: 16px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ThreadItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const UserContainer = styled.div`
  flex: 1;
`;

const UserHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 3px;
`;
const Name = styled.p`
  font-size: 12px;
  color: #666;
`;
const Email = styled.p`
  font-size: 10px;
  color: #999;
  margin-bottom: 4px;
`;
const Date = styled.p`
  font-size: 12px;
  color: #999;
`;

const Content = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const InformationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalComments = styled.p`
  font-size: 14px;
  color: #666;
`;

const VoteContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
`;

const UpVote = styled.p`
  padding: 8px;
  cursor: pointer;
`;

const DownVote = styled.p`
  padding: 8px;
  cursor: pointer;
`;

export { ThreadItemContainer, ThreadItemImage, UserContainer, UserHeader, UserInfo, Title, Name, Email, Date, Content, InformationContainer, TotalComments, VoteContainer, UpVote, DownVote };
