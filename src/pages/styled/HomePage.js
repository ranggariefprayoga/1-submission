import styled from "styled-components";

const HomePageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const HomeTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-bottom: 32px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  &:after {
    content: "";
    display: block;
    width: 20%;
    height: 3px;
    background-color: black;
    margin: 1px auto 0;
  }
`;

export { HomePageContainer, HomeTitle };
