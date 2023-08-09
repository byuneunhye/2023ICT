import styled from "styled-components";
import Header from "./common/header";
import MainPage from "./common/main/index";

function Main() {
  return (
    <Container>
      <Header />
      <MainPage />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  margin: 0;
  padding: 0;
`;
