/* eslint-disable max-len */
import styled from 'styled-components';

const CommentItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const CommentItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentItemUserContainer = styled.div`
  flex: 1;
`;

const UserContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const UserName = styled.p`
  font-weight: bold;
`;

const PostedAt = styled.p`
  font-size: 12px;
  color: #999;
`;

const CommentContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const VoteContainer = styled.section`
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

export {
  CommentItemContainer, CommentItemImage, CommentItemUserContainer, UserContainer, UserName, PostedAt, CommentContent, VoteContainer, UpVote, DownVote,
};
