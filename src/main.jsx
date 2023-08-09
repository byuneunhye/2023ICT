import styled from "styled-components";
import Header from "./common/header";
import MainPage from "./common/main/index";
import { useEffect, useState } from "react";
import { getBoardList } from "./apis";
import { customAxios } from "./apis";

function Main() {
  return (
    <Container>
      <Header />
      <MainPage />
      {/* {dataList.map((item, index) => (
        <div>{item.title}</div>
      ))} */}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  margin: 0;
  padding: 0;
`;
