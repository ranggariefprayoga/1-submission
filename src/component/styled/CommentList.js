import styled from 'styled-components';

const CommentListContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const CommentListTitle = styled.div`
  font-weight: bold;
  padding: 10px;
`;

export { CommentListContainer, CommentListTitle };
