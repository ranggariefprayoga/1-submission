import styled from "styled-components";

const ThreadsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(200, 200, 200, 0.8), 0 0 20px rgba(255, 255, 255, 0.8);
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  cursor: pointer;
`;

export default ThreadsListContainer;
