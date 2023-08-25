import styled from "styled-components";

const DetailPageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const DetailContent = styled.div`
  margin-top: 60px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
`;

export { DetailPageContainer, DetailContent };
