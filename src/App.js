import styled from "styled-components";
import Header from "./common/header";
import MainPage from "./common/main";

function App() {
  return (
    <Container>
      <Header />
      <MainMargin>
        <MainPage />
      </MainMargin>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const MainMargin = styled.div`
  margin-top: 50px;
`;
