/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import { postedAt } from "../utils";
import {
  ThreadDetailContainer, Title, Content, UserInfoContainer, Image, Name, PostedAt, SenderInfo,
} from "./styled/ThreadDetail";

function ThreadDetail({ detailThread }) {
  return (
    <ThreadDetailContainer role="button">
      <Title>{detailThread.title}</Title>
      <Content>{parse(detailThread.body)}</Content>
      <UserInfoContainer>
        <Image src={detailThread.owner.avatar} alt={detailThread.owner.name} />
        <SenderInfo>
          <Name>{detailThread.owner.name}</Name>
          <PostedAt>{postedAt(detailThread.createdAt)}</PostedAt>
        </SenderInfo>
      </UserInfoContainer>
    </ThreadDetailContainer>
  );
}

export default ThreadDetail;
