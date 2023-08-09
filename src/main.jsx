import styled from "styled-components";
import Header from "./common/header";
import MainPage from "./common/main/index";
import { useEffect, useState } from "react";
import { getBoardList } from "./apis";
import { customAxios } from "./apis";

function Main() {
  const [dataList, setDataList] = useState([]);

  const fetchBoardList = async () => {
    try {
      const { data } = await customAxios.get("/board");
      setDataList(data);
    } catch {
      console.log("에러");
    }
  };
  useEffect(() => {
    fetchBoardList();
  }, []);

  return (
    <Container>
      <Header />
      <MainPage />
      {dataList.map((item, index) => (
        <div>{item.title}</div>
      ))}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  margin: 0;
  padding: 0;
`;
