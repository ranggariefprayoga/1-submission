import styled from 'styled-components';

const ThreadDetailContainer = styled.div`
  padding: 10px;
  transition: transform 0.2s ease-in-out;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
`;

const SenderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;
const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`;
const PostedAt = styled.p`
  font-size: 14px;
  color: #999;
`;

export {
  ThreadDetailContainer, Title, Content, UserInfoContainer, Image, Name, PostedAt, SenderInfo,
};
